import React from "react";
import styles from "./AddCommentForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getCommentFormText } from "features/addCommentForm/model/selectors/getCommentFormText/getCommentFormText";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentFormActions, addCommentFormReducer } from "features/addCommentForm/model/slice/addCommentFormSlice";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import type { CommonComponentProps } from "shared/types/commonTypes";

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

type AddCommentFormProps = CommonComponentProps & {
  sendComment: (text: string) => void
}

const AddCommentForm: React.FC<AddCommentFormProps> = (props) => {
  const { additionalClass, sendComment } = props;
  const { t } = useTranslation("addCommentForm");
  const text = useSelector(getCommentFormText);
  const dispatch = useAppDispatch();

  const handleTextChange = (value: string): void => {
    dispatch(addCommentFormActions.setText(value));
  };

  const handleSendComment = (): void => {
    sendComment(text || "");
    handleTextChange("");
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.container, {}, [additionalClass])}>
        <Input
          additionalClass={styles.input}
          placeholder={t("enterText") || ""}
          value={text}
          onChange={handleTextChange}
        />
        <Button onClick={handleSendComment}>{t("send") || ""}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
