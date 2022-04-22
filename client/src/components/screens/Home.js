/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/Home.scss';
import Header from './Header';
import Main from './Main';

export default function Home() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className={`Home theme-${theme}`}>
      <Header />
      <Main />
    </div>
  );
}
