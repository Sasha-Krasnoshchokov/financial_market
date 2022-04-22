/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import classnames from 'classnames';
import { useSelector } from 'react-redux';

import '../styles/OpenerCloser.scss';

export default function OpenerCloser({ callback, icon }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div
      className={classnames(
        'OpenerCloser',
        icon === 'closer' && 'button-closer',
        `theme-${theme}`,
      )}
    >
      <button
        type="button"
        onClick={callback}
        className="button"
      >
        <div
          className={classnames(
            'button-icon',
            `button-${icon}--${theme}`,
          )}
        />
      </button>
    </div>
  );
}
