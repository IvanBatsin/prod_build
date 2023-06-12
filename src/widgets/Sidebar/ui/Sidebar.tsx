import React from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSizes, ButtonTypes } from "shared/ui/Button/Button";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { routePaths } from "shared/config/routerConfig/routerConfig";
import AboutLinkIcon from "../assets/aboutLink.svg";
import MainLinkIcon from "../assets/mainLink.svg";

export const Sidebar: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const { t } = useTranslation();

  const handleToggleSidebar = (): void => { setCollapsed(prev => !prev) };

  return (
    <div data-testid="sidebar-test-id" className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [additionalClass])}>
      <Button
        additionalClass={styles.collapseBtn}
        data-testid="toggle-sidebar"
        onClick={handleToggleSidebar}
        theme={ButtonTypes.BACKGROUND_INVERTED}
        square
        size={ButtonSizes.XL}
      >
          { collapsed ? ">" : "<" }
      </Button>
      <div className={styles.link_items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routePaths.about} additionalClass={styles.item}>
          <AboutLinkIcon className={styles.link_img}/>
          <span className={styles.link_item}>
            {t("aboutLink")}
          </span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={routePaths.main} additionalClass={styles.item}>
          <MainLinkIcon className={styles.link_img}/>
          <span className={styles.link_item}>
            {t("mainLink")}
          </span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
        <LanguageSwitcher
          short={collapsed}
          additionalClass={styles.lang}
        />
      </div>
    </div>
  );
};
