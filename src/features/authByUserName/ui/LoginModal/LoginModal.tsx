import React from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import type { CommonComponentProps } from "shared/types/commonTypes";

type LoginModalProps = CommonComponentProps & {
  isOpen: boolean
  onCLose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { isOpen, additionalClass, onCLose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCLose}
      lazy
    >
      <LoginForm/>
    </Modal>
  );
};
