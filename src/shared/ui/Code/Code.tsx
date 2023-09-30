import React from "react";
import styles from "./Code.module.scss";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTypes } from "../Button/Button";
import CopyIcon from "../../assets/copy.svg";

type CodeProps = CommonComponentProps & {
  codeFragment: string
}

export const Code: React.FC<CodeProps> = (props) => {
  const { codeFragment, additionalClass } = props;

  const handleCodeCopy = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    await navigator.clipboard.writeText(codeFragment);
  };

  return (
    <pre className={classNames(styles.container, {}, [additionalClass])}>
      <Button
        additionalClass={styles.copy_btn}
        theme={ButtonTypes.CLEAR}
        onClick={handleCodeCopy}
      >
        <CopyIcon className={styles.copy_icon}/>
      </Button>
      <code>
        {codeFragment}
      </code>
    </pre>
  );
};
