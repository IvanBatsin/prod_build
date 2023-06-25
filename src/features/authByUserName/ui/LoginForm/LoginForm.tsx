import React from "react";
import styles from "./LoginForm.module.scss";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTypes } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../../authByUserName/model/services/loginByUsername/loginByUsername";
import { Text, TextThemes } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const REDUCER_LIST: ReducersList = {
  login: loginReducer
};

const LoginForm: React.FC<CommonComponentProps> = React.memo(function LoginForm ({ additionalClass }: CommonComponentProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const handleChangeUsername = React.useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = React.useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLoginClick = React.useCallback((): void => {
    dispatch(loginByUsername({ username, password }) as any);
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader reducers={REDUCER_LIST}>
      <div className={classNames(styles.loginForm, {}, [additionalClass])}>
        <Text title={t("authorizationForm")}/>
        {error && <Text text={t("authorizationError")} theme={TextThemes.ERROR}/>}
        <Input
          autoFocus
          placeholder={t("EnterUserName")}
          additionalClass={styles.input}
          type="text"
          value={username}
          onChange={handleChangeUsername}
        />
        <Input
          placeholder={t("EnterPassword")}
          additionalClass={styles.input}
          type="text"
          value={password}
          onChange={handleChangePassword}
        />
        <Button disabled={isLoading} theme={ButtonTypes.OUTLINE} additionalClass={styles.loginBtn} onClick={handleLoginClick}>
          {t("login")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
