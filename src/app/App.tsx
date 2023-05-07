import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/themeProvider';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}