import React from "react";
import { useTranslation } from "react-i18next";
import { PageWrapper } from "@/widgets/PageWrapper/PageWrapper";

const AboutPage: React.FC = () => {
  const { t } = useTranslation("aboutPage");

  return (
    <PageWrapper>
      <section>
        {t("about site")}
      </section>
    </PageWrapper>
  );
};

export default React.memo(AboutPage);
