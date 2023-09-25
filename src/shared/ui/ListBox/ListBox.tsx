import { Listbox } from "@headlessui/react";
import React from "react";
import styles from "./ListBox.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack/HStack/HStack";
import type { DropdownDirection } from "shared/types/ui";

export interface ListBoxItem {
  value: string
  content: React.ReactNode
  disabled?: boolean
}

type ListBoxProps = CommonComponentProps & {
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
  handleOnChangeValue: (value: any) => void
}

const directionMapper: Record<DropdownDirection, string> = {
  "bottom left": styles.bottomLeft,
  "bottom right": styles.bottomRight,
  "top left": styles.topLeft,
  "top right": styles.topRight
};

export const ListBox: React.FC<ListBoxProps> = (props) => {
  const { additionalClass, items, defaultValue, value, readonly, label, direction = "bottom left", handleOnChangeValue } = props;

  return (
    <HStack gap="4">
      {label && <span>{label + " >"}</span>}
      <Listbox disabled={readonly} as={"div"} className={classNames(styles.container, {}, [additionalClass])} value={value} onChange={handleOnChangeValue}>
        <Listbox.Button className={styles.triggerBtn}>
          <Button disabled={readonly}>{value || defaultValue}</Button>
        </Listbox.Button>
        <Listbox.Options className={classNames(styles.options, {}, [directionMapper[direction]])}>
          {items?.map((item) => (
            <Listbox.Option
              as={React.Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li className={classNames(styles.optionItem, { [styles.selectedItem]: active, [styles.disabled]: item.disabled }, [])}>
                  {selected && "selected"}
                  {item.content}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </HStack>
  );
};
