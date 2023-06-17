import React from "react";
import styles from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTypes } from "shared/ui/Button/Button";

const modal_content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum possimus atque similique sed ducimus non! Minus, molestias. Totam mollitia, soluta voluptate porro nulla, libero saepe error nisi ad nobis architecto.";

export const Navbar: React.FC<CommonComponentProps> = ({ additionalClass }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false);

  const handleModalToggle = React.useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [additionalClass])}>
      <Button
        theme={ButtonTypes.CLEAR_INVERTED}
        additionalClass={styles.links}
        onClick={handleModalToggle}
      >
        {t("login")}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={handleModalToggle}
      >
        {modal_content}
      </Modal>
    </div>
  );
};
