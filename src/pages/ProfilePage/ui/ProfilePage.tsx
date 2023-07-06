import { ProfileCard, fetchProfileData, getProfileError, getProfileForm, getProfileReadOnly, getProfileValidationErrors, profileActions, profileReducer } from "entities/Profile";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import React from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import styles from "./ProfilePage.module.scss";
import type { Currency } from "entities/Currency";
import type { Country } from "entities/Country";
import { Text, TextThemes } from "shared/ui/Text/Text";
import { ValidationProfileError } from "entities/Profile/model/types/profile";
import { useTranslation } from "react-i18next";

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage: React.FC = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const profileForm = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const validationErrorsTranslate = {
    [ValidationProfileError.INCORRECT_AGE]: t("incorrectAge"),
    [ValidationProfileError.INCORRECT_COUNTRY]: t("incorrectCountry"),
    [ValidationProfileError.INCORRECT_PROFILE_DATA]: t("incorrectProfileData"),
    [ValidationProfileError.NONE_DATA]: t("noneData"),
    [ValidationProfileError.SERVER_ERROR]: t("serverError")
  };

  const handleFirstNameChange = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value }));
  }, [dispatch]);

  const handleLastNameChange = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value }));
  }, [dispatch]);

  const handleAgeChange = React.useCallback((value?: string) => {
    if (/^\d+$/g.test(value || "")) {
      dispatch(profileActions.updateProfile({ age: Number(value) }));
    }
  }, [dispatch]);

  const handleCityChange = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value }));
  }, [dispatch]);

  const handleAvatarChange = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const handleUserNameChange = React.useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value }));
  }, [dispatch]);

  const handleCurrencyChange = React.useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleCountryChange = React.useCallback((value?: Country) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  React.useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData(null) as any);
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileHeader additionalClass={styles.header}/>
        {validationErrors?.length &&
          validationErrors.map(error => {
            return <Text key={error} theme={TextThemes.ERROR} title={validationErrorsTranslate[error]}/>;
          })
        }
        <ProfileCard
          profile={profileForm}
          error={error}
          isLoading={!!isLoading}
          readonly={readOnly}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleAgeChange={handleAgeChange}
          handleCityChange={handleCityChange}
          handleAvatarChange={handleAvatarChange}
          handleUserNameChange={handleUserNameChange}
          handleCurrencyChange={handleCurrencyChange}
          handleCountryChange={handleCountryChange}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default React.memo(ProfilePage);
