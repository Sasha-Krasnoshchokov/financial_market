/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import '../styles/DropList.scss';
import CheckMark from './CheckMark';

export default function DropList({
  title,
  name,
  arrayToDisplay = [],
  handleAction = () => {},
}) {
  const theme = useSelector((state) => state.theme.value);
  const themeSwitcher = useSelector((state) => state.theme.themeSwitcher);

  const titleToDisplay = (title !== 'Intervals')
    ? title
    : `${title} : ${arrayToDisplay.find((interval) => interval.isSelected).interval}`;

  return (
    <div
      className={`
        DropList
        theme-${themeSwitcher[theme]}
      `}
    >
      <div
        className="DropList-list"
      >
        <h4 className="DropList-list-title">{titleToDisplay}</h4>
        <div className={`DropList-list-items theme-${theme}`}>
          {
            arrayToDisplay && arrayToDisplay.map((item) => (
              <React.Fragment key={item[name]}>
                <button
                  id={item[name]}
                  type="button"
                  className={`
                  DropList-list-item
                  theme-${theme}
                `}
                  onClick={() => handleAction(item[name])}
                >
                  <p
                    id={item[name]}
                    className="DropList-list-item-title"
                  >
                    {item[name]}
                  </p>
                  <div className="DropList-list-checkmark">
                    <CheckMark id={item[name]} isSelected={item.isSelected} />
                  </div>
                </button>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  );
}
