import React, { Suspense } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm.async";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { PageLoader } from "widgets/PageLoader";

type LoginModalProps = CommonComponentProps & {
  isOpen: boolean
  onCLose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { isOpen, onCLose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCLose}
      lazy
    >
    <Suspense fallback={<PageLoader/>}>
      <LoginForm/>
    </Suspense>
    </Modal>
  );
};
