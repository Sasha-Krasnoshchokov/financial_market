/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

import '../styles/Logo.scss';

export default function Logo() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className="Logo">
      <a
        href="/"
        className={classnames(
          'Logo Logo-link',
          `Logo-${theme} theme-${theme}`,
        )}
      >
        FAM
      </a>
    </div>
  );
}
