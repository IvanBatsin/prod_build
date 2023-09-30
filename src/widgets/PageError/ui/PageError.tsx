import React from "react";
import styles from "./PageError.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { Button, ButtonTypes } from "@/shared/ui/Button/Button";

export const PageError: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t } = useTranslation();

  const handleReloadPage = (): void => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.page_error, {}, [additionalClass])}>
      <p className={styles.message}>{t("errorBoundaryMessage")}</p>
      <Button theme={ButtonTypes.RELOAD} onClick={handleReloadPage}>{t("errorBoundaryButtonText")}</Button>
    </div>
  );
};
