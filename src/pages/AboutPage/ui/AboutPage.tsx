import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation('aboutPage');

  return (
    <div>
      {t('about site')}
    </div>
  )
}

export default AboutPage;