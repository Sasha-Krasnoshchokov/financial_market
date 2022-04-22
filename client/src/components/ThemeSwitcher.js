/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../styles/ThemeSwitcher.scss';
import { switchTheme } from '../utils/states/themeState';

export default function ThemeSwitcher() {
  const theme = useSelector((state) => state.theme.value);
  const themeSwitcher = useSelector((state) => state.theme.themeSwitcher);
  const dispatch = useDispatch();

  const switcherTheme = () => {
    dispatch(switchTheme(theme));
  };

  return (
    <div
      className={`
        Switcher
        Switcher--${theme}
        theme-${themeSwitcher[theme]}
      `}
    >
      <button
        type="button"
        onClick={switcherTheme}
        className={`button theme-${themeSwitcher[theme]}`}
      >
        <div className="button-divider--bigger" />
        <div className={`button-divider--smaller theme-${theme}`} />
      </button>
    </div>
  );
}
