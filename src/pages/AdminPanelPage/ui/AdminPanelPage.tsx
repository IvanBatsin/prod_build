import React from "react";
import { useTranslation } from "react-i18next";
import type { CommonComponentProps } from "@/shared/types/commonTypes";

const AdminPanelPage: React.FC<CommonComponentProps> = (props) => {
  const { additionalClass } = props;
  const { t } = useTranslation("admin");

  return (
    <div></div>
  );
};

export default AdminPanelPage;
