import React from "react";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { Card } from "@/shared/ui/Card/Card";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack/VStack/VStack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { HStack } from "@/shared/ui/Stack/HStack/HStack";
import { Button, ButtonTypes } from "@/shared/ui/Button/Button";
import { BrowserView, MobileView } from "react-device-detect";
import { DrawerWrapper } from "@/shared/ui/Drawer/DrawerWrapper";

type RatingCardProps = CommonComponentProps & {
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  handleCancel?: (starCount: number) => void
  handleAccept?: (starCount: number, feedback?: string) => void
}

export const RatingCard: React.FC<RatingCardProps> = (props) => {
  const { additionalClass, feedbackTitle, title, hasFeedback, handleCancel, handleAccept } = props;
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [starsCount, setStarsCount] = React.useState<number>(0);
  const [feedback, setFeedback] = React.useState<string>("");
  const { t } = useTranslation();

  const handleStarSelect = (selectedStarsCount: number): void => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      handleAccept?.(selectedStarsCount);
    }
  };

  const handleModalFeedbackAccept = (): void => {
    setIsModalOpen(false);
    handleAccept?.(starsCount, feedback);
  };

  const handleModalFeedbackCancel = (): void => {
    setIsModalOpen(false);
    handleCancel?.(starsCount);
  };

  const modalContent = (
    <VStack max gap="32">
      <Text title={feedbackTitle}/>
      <Input onChange={setFeedback} placeholder={t("yourFeedback") || ""}/>
      <HStack gap="16" justify="end">
        <Button onClick={handleModalFeedbackCancel} theme={ButtonTypes.OUTLINE_RED}>{t("close")}</Button>
        <Button onClick={handleModalFeedbackAccept}>{t("send")}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card additionalClass={classNames("", {}, [additionalClass])}>
      <VStack align="center" gap="8">
        <Text title={title}/>
        <StarRating size={40} handleSelect={handleStarSelect}/>
      </VStack>
        <BrowserView>
          <Modal onClose={handleModalFeedbackCancel} isOpen={isModalOpen} lazy>
            {modalContent}
          </Modal>
        </BrowserView>
        <MobileView>
          <DrawerWrapper isOpen={isModalOpen} handleClose={handleModalFeedbackCancel}>
            {modalContent}
          </DrawerWrapper>
        </MobileView>
    </Card>
  );
};
