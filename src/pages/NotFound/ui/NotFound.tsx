import React from "react";
import styles from "./NotFound.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import type { CommonComponentProps } from "shared/types/commonTypes";

export const NotFound: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t } = useTranslation("notFound");

  return (
    <div className={classNames(styles.not_found, {}, [additionalClass])}>
      {t("page not found")}
    </div>
  );
};
