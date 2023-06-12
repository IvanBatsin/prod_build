import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import { type CommonComponentProps } from "shared/types/commonTypes";

type LanguageSwitcherProps = CommonComponentProps & {
  short?: boolean
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ additionalClass, short }) => {
  const { t, i18n } = useTranslation();

  const handleToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      additionalClass={classNames("", {}, [additionalClass])}
      onClick={handleToggleLanguage}>
        {t(short ? "shortLanguage" : "language")}
    </Button>
  );
};
