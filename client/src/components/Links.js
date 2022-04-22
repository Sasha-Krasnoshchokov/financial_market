/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../styles/Link.scss';

export default function Links({ path, text }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <Link
      to={`${path}`}
      className={`
        Link
        Link--${theme}
        theme-${theme}
      `}
    >
      {text}
    </Link>
  );
}
