import React from "react";
import styles from "./EditableProfileCardHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import { getProfileReadOnly } from "features/editableProfileCard/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileData } from "features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { editableProfileCardActions } from "../../model/slice/editableProfileCardSlice";
import { updateProfileData } from "features/editableProfileCard/model/services/updateProfileData/updateProfileData";
import { classNames } from "shared/lib/classNames/classNames";

export const EditableProfileCardHeader: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("profile");
  const readOnly = useSelector(getProfileReadOnly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const isEditable = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();
  const { additionalClass } = props;

  const handleEditClick = React.useCallback(() => {
    dispatch(editableProfileCardActions.setReadOnly(false));
  }, [dispatch]);

  const handleCancelEditClick = React.useCallback(() => {
    dispatch(editableProfileCardActions.cancelEditProfile());
  }, [dispatch]);

  const handleSaveClick = React.useCallback(() => {
    dispatch(updateProfileData(null) as any);
  }, [dispatch]);

  return (
    <HStack additionalClass={classNames(styles.container, {}, [additionalClass])} justify="between" align="end">
      <Text title={t("profileTitle") || ""}/>
      {isEditable &&
        <div className={styles.btn_wrapper}>
          {readOnly
            ? <Button
              theme={ButtonTypes.OUTLINE}
              additionalClass={styles.editBtn}
              data-testid="EditableProfileCard.EditBtn"
              onClick={handleEditClick}
            >
              {t("prodileEdit")}
            </Button>
            : <>
              <Button
                theme={ButtonTypes.OUTLINE_RED}
                additionalClass={styles.editBtn}
                data-testid="EditableProfileCard.CancelBtn"
                onClick={handleCancelEditClick}
              >
                {t("prodileEditCancel")}
              </Button>
              <Button
                theme={ButtonTypes.OUTLINE}
                additionalClass={styles.editBtn}
                data-testid="EditableProfileCard.SaveBtn"
                onClick={handleSaveClick}
              >
                {t("profileSave")}
              </Button>
            </>
          }
        </div>
      }
    </HStack>
  );
};
