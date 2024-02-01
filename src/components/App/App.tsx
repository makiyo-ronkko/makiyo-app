import React from 'react';
import style from './App.module.css';
import { MainStyle } from '../Main/index';
import { ScrollToTop } from '../../helpers/scroll';

export const App = () => {
  return (
    <div className={style.mainWrapper}>
      <ScrollToTop />
      <MainStyle />
    </div>
  );
};
