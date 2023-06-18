import React from "react";
import styles from "./LoginForm.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

export const LoginForm: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.loginForm, {}, [additionalClass])}>
      <Input autoFocus placeholder={t("EnterUserName")} additionalClass={styles.input} type="text"/>
      <Input placeholder={t("EnterPassword")} additionalClass={styles.input} type="text"/>
      <Button additionalClass={styles.loginBtn}>
        {t("login")}
      </Button>
    </div>
  );
};
