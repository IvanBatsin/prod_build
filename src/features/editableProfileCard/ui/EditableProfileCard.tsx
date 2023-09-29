import type { Country } from "entities/Country";
import type { Currency } from "entities/Currency";
import { ProfileCard } from "entities/Profile";
import { getProfileIsLoading } from "features/editableProfileCard/model/selectors/getProfileIsLoading/getProfileIsLoading";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Text, TextThemes } from "shared/ui/Text/Text";
import { getProfileForm } from "../model/selectors/getProfileForm/getProfileForm";
import { getProfileError } from "../model/selectors/getProfileError/getProfileError";
import { getProfileReadOnly } from "../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileValidationErrors } from "../model/selectors/getProfileValidationErrors/getProfileValidationErrors";
import { editableProfileCardActions, editableProfileCardReducer } from "../model/slice/editableProfileCardSlice";
import { fetchProfileData } from "../model/services/fetchProfileData/fetchProfileData";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader/EditableProfileCardHeader";
import { ValidationProfileError } from "../model/consts/consts";

const reducers: ReducersList = {
  profile: editableProfileCardReducer
};

type EditableProfileCardProps = CommonComponentProps & {
  id: string
}

export const EditableProfileCard: React.FC<EditableProfileCardProps> = (props) => {
  const { additionalClass, id } = props;
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
    dispatch(editableProfileCardActions.updateProfile({ firstName: value }));
  }, [dispatch]);

  const handleLastNameChange = React.useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateProfile({ lastName: value }));
  }, [dispatch]);

  const handleAgeChange = React.useCallback((value?: string) => {
    if (/^\d+$/g.test(value || "")) {
      dispatch(editableProfileCardActions.updateProfile({ age: Number(value) }));
    }
  }, [dispatch]);

  const handleCityChange = React.useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateProfile({ city: value }));
  }, [dispatch]);

  const handleAvatarChange = React.useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateProfile({ avatar: value }));
  }, [dispatch]);

  const handleUserNameChange = React.useCallback((value?: string) => {
    dispatch(editableProfileCardActions.updateProfile({ username: value }));
  }, [dispatch]);

  const handleCurrencyChange = React.useCallback((value?: Currency) => {
    dispatch(editableProfileCardActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleCountryChange = React.useCallback((value?: Country) => {
    dispatch(editableProfileCardActions.updateProfile({ country: value }));
  }, [dispatch]);

  useInitialEffect(() => {
    id && dispatch(fetchProfileData(id) as any);
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={additionalClass}>
        <EditableProfileCardHeader/>
        {validationErrors?.length &&
          validationErrors.map(error => {
            return <Text
                      key={error}
                      theme={TextThemes.ERROR}
                      title={validationErrorsTranslate[error as keyof typeof validationErrorsTranslate]}
                      data-testid="EditableProfileCard.Error"
                    />;
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
