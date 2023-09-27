import React from "react";
import { useTranslation } from "react-i18next";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import { Text } from "shared/ui/Text/Text";

const ForbiddenPage: React.FC<CommonComponentProps> = (props) => {
  const { t } = useTranslation("forbidden");

  return (
    <HStack gap="32" align="center" justify="center" max>
      <Text title={t("shouldLogin") || ""}/>
    </HStack>
  );
};

export default ForbiddenPage;
