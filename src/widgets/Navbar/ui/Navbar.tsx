import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { LoginModal } from "features/authByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, userActions } from "entities/User";

export const Navbar: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();

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
    <div className={classNames(styles.navbar, {}, [additionalClass])}>
      {authData
        ? <Button
          theme={ButtonTypes.CLEAR_INVERTED}
          additionalClass={styles.links}
          onClick={handleLogoutClick}
        >
          {t("logout")}
        </Button>
        : <>
          <Button
            theme={ButtonTypes.CLEAR_INVERTED}
            additionalClass={styles.links}
            onClick={handleModalOpen}
          >
            {t("login")}
          </Button>
          <LoginModal
            isOpen={isAuthModal}
            onCLose={handleModalClose}
          />
        </>
      }
    </div>
  );
};
