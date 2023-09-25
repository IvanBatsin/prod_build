import React from "react";
import styles from "./ProfileCard.module.scss";
import { type Mods, classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextThemes } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import type { Profile } from "features/editableProfileCard/model/types/profile";
import { PageLoader } from "widgets/PageLoader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { type Currency, CurrencySelector } from "entities/Currency";
import { CountrySelector, type Country } from "entities/Country";
import { VStack } from "shared/ui/Stack/VStack/VStack";

interface ProfileCardProps {
  profile?: Profile
  isLoading: boolean
  error?: string
  readonly?: boolean
  handleFirstNameChange?: (value?: string) => void
  handleLastNameChange?: (value?: string) => void
  handleAgeChange?: (value?: string) => void
  handleCityChange?: (value?: string) => void
  handleAvatarChange?: (value?: string) => void
  handleUserNameChange?: (value?: string) => void
  handleCurrencyChange: (value?: Currency) => void
  handleCountryChange: (value?: Country) => void
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { profile, isLoading, error, readonly, handleFirstNameChange, handleLastNameChange, handleAgeChange, handleCityChange, handleAvatarChange, handleUserNameChange, handleCurrencyChange, handleCountryChange } = props;
  const { t } = useTranslation("profile");

  if (error) {
    return (
      <div className={classNames(styles.container, { [styles.error]: !!error })}>
        <Text
          theme={TextThemes.ERROR}
          title={t("profileCardErrorTitle") || ""}
          text={t("profileCardErrorText") || ""}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly && !isLoading,
    [styles.loading]: isLoading
  };

  return (
    <div className={classNames(styles.container, mods)}>
      {isLoading
        ? <PageLoader/>
        : <>
          <VStack align="start" gap="8">
            {profile?.avatar &&
              <div className={styles.avatarWrapper}>
                <Avatar src={profile.avatar}/>
              </div>
            }
            <Input
              value={profile?.firstName}
              placeholder={t("firstName") || ""}
              additionalClass={styles.input}
              readonly={readonly}
              onChange={handleFirstNameChange}
            />
            <Input
              value={profile?.lastName}
              placeholder={t("lastName") || ""}
              additionalClass={styles.input}
              readonly={readonly}
              onChange={handleLastNameChange}
            />
            <Input
              value={profile?.age}
              placeholder={t("age") || ""}
              additionalClass={styles.input}
              readonly={readonly}
              onChange={handleAgeChange}
            />
            <Input
              value={profile?.city}
              placeholder={t("city") || ""}
              additionalClass={styles.input}
              readonly={readonly}
              onChange={handleCityChange}
            />
            <Input
              value={profile?.avatar}
              placeholder={t("city") || ""}
              additionalClass={styles.input}
              readonly={readonly}
              onChange={handleAvatarChange}
            />
            <Input
              value={profile?.username}
              placeholder={t("city") || ""}
              additionalClass={styles.input}
              readonly={readonly}
              onChange={handleUserNameChange}
            />
            <CurrencySelector
              value={profile?.currency}
              readonly={readonly}
              additionalClass={styles.input}
              onChange={handleCurrencyChange}
            />
            <CountrySelector
              value={profile?.country}
              readonly={readonly}
              additionalClass={styles.input}
              onChange={handleCountryChange}
            />
          </VStack>
        </>
      }
    </div>
  );
};
