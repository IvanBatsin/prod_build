import React from "react";
import styles from "./ProfileHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { type CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getProfileReadOnly, profileActions, updateProfileData } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const ProfileHeader: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("profile");
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();
  const { additionalClass } = props;

  const handleEditClick = React.useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const handleCancelEditClick = React.useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const handleSaveClick = React.useCallback(() => {
    dispatch(updateProfileData(null) as any);
  }, [dispatch]);

  return (
    <div className={classNames(styles.header, {}, [additionalClass])}>
      <Text title={t("profileTitle") || ""}/>
      <div>
        {readOnly
          ? <Button
            theme={ButtonTypes.OUTLINE}
            additionalClass={styles.editBtn}
            onClick={handleEditClick}
          >
            {t("prodileEdit")}
          </Button>
          : <>
            <Button
              theme={ButtonTypes.OUTLINE_RED}
              additionalClass={styles.editBtn}
              onClick={handleCancelEditClick}
            >
              {t("prodileEditCancel")}
            </Button>
            <Button
              theme={ButtonTypes.OUTLINE}
              additionalClass={styles.editBtn}
              onClick={handleSaveClick}
            >
              {t("profileSave")}
            </Button>
          </>
        }
      </div>
  </div>
  );
};
