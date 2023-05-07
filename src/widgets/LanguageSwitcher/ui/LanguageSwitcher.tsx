import React from "react";
import styles from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { type CommonComponentProps } from "shared/types/commonTypes";

export const LanguageSwitcher: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t, i18n } = useTranslation();

  const handleToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      additionalClass={classNames(styles.language_switcher, {}, [additionalClass])}
      onClick={handleToggleLanguage}>
        {t("language")}
    </Button>
  );
};
