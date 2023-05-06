import React from "react";
import styles from './Sidebar.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  additionalClass?: string
}

export const Sidebar: React.FC<SidebarProps> = ({additionalClass}) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const handleToggleSidebar = () => setCollapsed(prev => !prev);

  return (
    <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [additionalClass])}>
      <button onClick={handleToggleSidebar}>toggle sidebar</button>
      <div className={styles.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}