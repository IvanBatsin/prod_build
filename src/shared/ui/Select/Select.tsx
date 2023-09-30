import React from "react";
import styles from "./Select.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames } from "@/shared/lib/classNames/classNames";

export interface SelectOption {
  value: string
  content: string
}

type SelectProps = CommonComponentProps & {
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Select: React.FC<SelectProps> = React.memo(function Select (props: SelectProps) {
  const { additionalClass, label, options, value, readonly, onChange } = props;

  const optionsList = React.useMemo(() => {
    return options?.map(option => {
      return (
        <option key={option.value} className={styles.option} value={option.value}>
          {option.content}
        </option>
      );
    });
  }, [options]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(event.currentTarget.value);
  };

  return (
    <div className={classNames(styles.wrapper, {}, [additionalClass])}>
      {label &&
        <span className={styles.label}>{`${label} >`}</span>
      }
      <select
        className={styles.select}
        value={value}
        disabled={readonly}
        onChange={handleSelectChange}
      >
        {optionsList}
      </select>
    </div>
  );
});
