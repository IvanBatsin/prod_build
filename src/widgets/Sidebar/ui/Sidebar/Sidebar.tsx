import React from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button/Button";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";

export const Sidebar: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const { t } = useTranslation();

  const handleToggleSidebar = (): void => { setCollapsed(prev => !prev) };

  return (
    <div data-testid="sidebar-test-id" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [additionalClass])}>
      <Button data-testid="toggle-sidebar" onClick={handleToggleSidebar}>{t("toggleMenu")}</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LanguageSwitcher additionalClass={styles.lang}/>
      </div>
    </div>
  );
};
