import React, { Suspense } from 'react';
import { Counter } from './components/Counter';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageComponent } from './pages/AboutPage/AboutPage.async';
import { MainPageComponent } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(classNames('baseClass', {selected: true, test: false, str: 'str'}, ['fist', 'last']))

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageComponent/>}/>
          <Route path='/' element={<MainPageComponent/>}/>
        </Routes>
      </Suspense>
      <Counter/>
    </div>
  )
}