import React from "react";
import styles from './Navbar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  additionalClass?: string
}

export const Navbar: React.FC<NavbarProps> = ({additionalClass}) => {
  return (
    <div className={classNames(styles.navbar, {}, [additionalClass])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} additionalClass={styles.main_link}>About</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
      </div>
    </div>
  )
}