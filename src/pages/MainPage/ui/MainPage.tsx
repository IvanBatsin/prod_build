import React from "react";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper/PageWrapper";

const MainPage: React.FC = () => {
  const { t } = useTranslation("mainPage");

  return (
    <PageWrapper>
      <section>
        {t("main page")}
      </section>
    </PageWrapper>
  );
};

export default React.memo(MainPage);
