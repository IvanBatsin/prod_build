import React from "react";
import styles from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { classNames } from "shared/lib/classNames/classNames";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

export const ProfileCard: React.FC = () => {
  const { t } = useTranslation("profile");
  const profile = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.container)}>
      <div className={styles.header}>
        <Text title={t("profileTitle") || ""}/>
        <Button
          theme={ButtonTypes.OUTLINE}
          className={styles.editBtn}
        >
          {t("prodileEdit")}
        </Button>
      </div>
      <div className={styles.body}>
        <Input
          value={profile?.firstName}
          placeholder={t("firstName") || ""}
          className={styles.input}
        />
        <Input
          value={profile?.lastName}
          placeholder={t("lastName") || ""}
          className={styles.input}
        />
      </div>
    </div>
  );
};
