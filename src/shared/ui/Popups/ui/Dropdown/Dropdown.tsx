import React, { Fragment, type JSXElementConstructor, type ReactElement } from "react";
import styles from "./Dropdown.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import type { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import { directionMapper } from "../styles/consts";
import popupStyles from "../styles/popup.module.scss";

export interface DrobdownItem {
  disabled?: boolean
  content: React.ReactNode
  href?: string
  handleClick?: () => void
}

type DropdownProps = CommonComponentProps & {
  trigger: React.ReactNode
  items: DrobdownItem[]
  direction?: DropdownDirection
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { additionalClass, items, trigger, direction = "bottom right" } = props;

  return (
    <Menu as="div" className={classNames(popupStyles.popup, {}, [additionalClass])}>
      <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(styles.itemsList, {}, [directionMapper[direction]])}>
        {items.map((item, index) => {
          const innerContent = ({ active }: { active: boolean }): ReactElement<any, string | JSXElementConstructor<any>> => (
            <button disabled={item.disabled} type="button" onClick={item.handleClick} className={classNames(styles.item, { [popupStyles.active]: active }, [])}>
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={index} disabled={item.disabled} as={AppLink} to={item.href}>
                {innerContent}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item key={index} disabled={item.disabled} as={Fragment}>
              {innerContent}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
