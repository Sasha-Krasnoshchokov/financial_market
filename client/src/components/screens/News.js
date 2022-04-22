/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/News.scss';
import Links from '../Links';
import useIntervals from '../../utils/useIntervals';
import useTickers from '../../utils/useTickers';
import getDataFromServer from '../../utils/getDataFromServer';

export default function News() {
  const theme = useSelector((state) => state.theme.value);
  const themeSwitcher = useSelector((state) => state.theme.themeSwitcher);

  const { intervals } = useIntervals();
  const { delay } = intervals.find((item) => item.isSelected);
  const { tickers } = useTickers();
  const arrayToDisplay = tickers
    ? tickers.filter((ticker) => ticker.isSelected && ticker.isFollow)
    : [];

  getDataFromServer(delay);

  const renderNewsInfo = (title, decor) => (
    <div className="News-info">
      <div className="News-info-wrapper">
        <section className={`News-section theme-${decor}`}>
          <h2 className="News-info-title">{title}</h2>
          <p className="News-text">News 1</p>
          <p className="News-text">News 2</p>
          <p className="News-text">News 3</p>
        </section>
      </div>
    </div>
  );

  return (
    <div className={`News theme-${theme}`}>
      <div className={`treadmill theme-${themeSwitcher[theme]}`}>
        {
          arrayToDisplay.map((item) => (
            <React.Fragment key={item.ticker}>
              <span className={`treadmill-text theme-${theme}`}>
                {`${item.ticker} : ${item.price}`}
              </span>
            </React.Fragment>
          ))
        }
      </div>

      {renderNewsInfo('Top News', theme)}
      {renderNewsInfo('Finance News', theme)}
      {renderNewsInfo('Sports News', theme)}
      {renderNewsInfo('Show business News', theme)}

      <nav className={`News-backhome theme-${theme}`}>
        <Links path="/" text="Home page" />
      </nav>
    </div>
  );
}
