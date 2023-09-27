import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUserName";
import { useSelector } from "react-redux";
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextSize, TextThemes } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { routePaths } from "shared/config/routerConfig/routerConfig";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import { type DrobdownItem, Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";

export const Navbar: React.FC<CommonComponentProps> = React.memo(function Navbar ({ additionalClass }: CommonComponentProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);
  const dispatch = useAppDispatch();

  const handleModalClose = React.useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleModalOpen = React.useCallback(() => {
    setIsAuthModal(true);
  }, []);

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

  return (
    <header className={classNames(styles.navbar, {}, [additionalClass])}>
      {authData
        ? <HStack align="baseline" justify="between" max>
            <Text size={TextSize.L} theme={TextThemes.INVERTED} title={t("logo") || ""}/>
            <AppLink additionalClass={styles.createBtn} theme={AppLinkTheme.SECONDARY} to={`${routePaths.articleCreate}`}>
              {t("createArticle")}
            </AppLink>
            <Dropdown
              additionalClass={styles.dropdown}
              trigger={<Avatar size={30} src={authData.avatar || ""}/>}
              direction="bottom left"
              items={itemsRender || []}
            />
        </HStack>
        : <>
          <Button
            theme={ButtonTypes.CLEAR_INVERTED}
            additionalClass={styles.links}
            onClick={handleModalOpen}
          >
            {t("login")}
          </Button>
          {isAuthModal &&
            <LoginModal
              isOpen={isAuthModal}
              onClose={handleModalClose}
            />
          }
        </>
      }
    </header>
  );
});
