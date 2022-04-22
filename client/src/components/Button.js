/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { useSelector } from 'react-redux';

import '../styles/Button.scss';

export default function Button({ callback, text }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <button
      data-name={text}
      type="button"
      onClick={callback}
      className={`
        Button
        Button--${theme}
        theme-${theme}
      `}
    >
      {text}
    </button>
  );
}
