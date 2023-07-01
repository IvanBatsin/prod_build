import React from "react";
import styles from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSizes, ButtonTypes } from "shared/ui/Button/Button";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { sidebarItemList } from "../model/SidebarItemType";
import { SidebarItem } from "./SidebarItem/SidebarItem";

export const Sidebar: React.FC<CommonComponentProps> = React.memo(function Sidebar ({ additionalClass }: CommonComponentProps) {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const handleToggleSidebar = (): void => { setCollapsed(prev => !prev) };

  const listItems = React.useMemo(() => {
    return sidebarItemList.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed}/>);
  }, [collapsed]);

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
        {listItems}
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
});
