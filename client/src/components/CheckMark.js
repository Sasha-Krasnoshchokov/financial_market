/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/CheckMark.scss';

export default function CheckMark({ id, isSelected }) {
  const theme = useSelector((state) => state.theme.value);
  const themeSwitcher = useSelector((state) => state.theme.themeSwitcher);

  return (
    <div className="CheckMark">
      <div
        id={id}
        className={`
          CheckMark-icon
          ${
            isSelected && `CheckMark-icon--selected-${themeSwitcher[theme]}`
          }
        `}
      />
    </div>
  );
}
