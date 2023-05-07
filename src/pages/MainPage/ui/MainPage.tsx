import React from "react";
import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation('mainPage');

  return (
    <div>
      {t('main page')}
    </div>
  )
}

export default MainPage;