/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/Header.scss';
import Logo from '../Logo';
import ThemeSwitcher from '../ThemeSwitcher';
import Menu from './Menu';

export default function Header() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <header className={`Header theme-${theme}`}>
      <Logo />
      <h1 className="Header-title">Financial Analytic Manager</h1>
      <div className="Header-theme-switcher">
        <ThemeSwitcher />
      </div>
      <Menu params="data" icon="icon" />
    </header>
  );
}
