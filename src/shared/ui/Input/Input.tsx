import React, { type InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { type Mods, classNames } from "@/shared/lib/classNames/classNames";

type InputHtmlProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

type InputProps = InputHtmlProps & CommonComponentProps & {
  value?: string | number
  autofocus?: boolean
  readonly?: boolean
  onChange?: (value: string) => void
}

export const Input: React.FC<InputProps> = React.memo(function Input (props: InputProps) {
  const { value, additionalClass, placeholder, autofocus, readonly = false, type = "text", onChange, ...restProps } = props;

  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [caretPosition, setCaretPosition] = React.useState<number>(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event.currentTarget.value);
    setCaretPosition(event.currentTarget.value.length);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onSelect = (event: any): void => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  React.useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef?.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [styles.readOnly]: readonly
  };

  const isCaretVisible = isFocused && !readonly;

  return (
    <div className={classNames(styles.inputWrapper, mods, [additionalClass])}>
      {placeholder &&
        <div className={styles.placeholder}>
          {`${placeholder} > `}
        </div>
      }
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          type={type}
          value={value}
          className={styles.input}
          readOnly={readonly}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...restProps}
        />
        {isCaretVisible &&
          <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }}/>
        }
      </div>
    </div>
  );
});
