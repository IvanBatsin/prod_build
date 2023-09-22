import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUserName";
import { useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextSize, TextThemes } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { routePaths } from "shared/config/routerConfig/routerConfig";

export const Navbar: React.FC<CommonComponentProps> = React.memo(function Navbar ({ additionalClass }: CommonComponentProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
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

  return (
    <header className={classNames(styles.navbar, {}, [additionalClass])}>
      {authData
        ? <div className={styles.logoutWrapper}>
            <Text size={TextSize.L} theme={TextThemes.INVERTED} title={t("logo") || ""}/>
            <AppLink additionalClass={styles.createBtn} theme={AppLinkTheme.SECONDARY} to={`${routePaths.articleCreate}`}>
              {t("createArticle")}
            </AppLink>
            <Button
              theme={ButtonTypes.CLEAR_INVERTED}
              additionalClass={styles.links}
              onClick={handleLogoutClick}
            >
              {t("logout")}
            </Button>
          </div>
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
