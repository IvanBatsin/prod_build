import React from "react";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { Dropdown } from "@/shared/ui/Popups/index";
import { useSelector } from "react-redux";
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { routePaths } from "@/shared/config/routerConfig/routerConfig";
import { useTranslation } from "react-i18next";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import type { DrobdownItem } from "@/shared/ui/Popups/ui/Dropdown/Dropdown";

export const AvatarDropdown: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);
  const authData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogoutClick = React.useCallback(() => {
    dispatch(userActions.userLogout());
  }, [dispatch]);

  const itemsRender = React.useMemo(() => {
    const result: DrobdownItem[] = [];
    if (!authData) return null;

    if (isAdmin || isManager) {
      result.push(
        {
          content: t("admin"),
          href: `${routePaths.admin_panel}`
        }
      );
    }

    result.push(
      {
        content: t("toProfile"),
        href: `${routePaths.profile}/${authData.id}`
      },
      {
        content: t("logout"),
        handleClick: handleLogoutClick
      }
    );
    return result;
  }, [authData, handleLogoutClick, isAdmin, isManager, t]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      trigger={<Avatar size={30} src={authData.avatar || ""}/>}
      direction="bottom left"
      items={itemsRender || []}
      additionalClass={additionalClass}
    />
  );
};
