/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/Main.scss';
import DropList from '../DropList';
import useIntervals from '../../utils/useIntervals';
import useTickers from '../../utils/useTickers';
import getDataFromServer from '../../utils/getDataFromServer';
import CheckMark from '../CheckMark';

export default function Main() {
  const theme = useSelector((state) => state.theme.value);
  const themeSwitcher = useSelector((state) => state.theme.themeSwitcher);

  const { intervals } = useIntervals();
  const chaingeIntervals = useIntervals().switchIntervals;
  const { delay } = intervals.find((item) => item.isSelected);

  getDataFromServer(delay);

  const { tickers } = useTickers();
  const selectTicker = useTickers().selectTickers;
  const followByTicker = useTickers().followByTickers;
  const arrayToDisplay = tickers
    ? tickers.filter((ticker) => ticker.isSelected)
    : [];

  const renderTickerInfo = (value, decor) => (
    <p
      className={`
        Main-analytics-ticker-info
        Main-border-thin--${decor}
        ${value.price > 200 && `Main-analytics-positive--${decor}`}
        ${value.price < 200 && 'Main-analytics-negative'}
      `}
    >
      {value.price || value}
    </p>
  );

  return (
    <main className="Main">

      <div className="Main-filters">

        <div className="Main-filters-droplist">
          <DropList
            title="Tickers"
            name="ticker"
            arrayToDisplay={tickers}
            handleAction={selectTicker}
          />
        </div>

        <div className="Main-filters-droplist">
          <DropList
            title="Intervals"
            name="interval"
            arrayToDisplay={intervals}
            handleAction={chaingeIntervals}
          />
        </div>

      </div>

      <section className={`Main-analytics Main-border-fat--${themeSwitcher[theme]}`}>

        <h2 className="Main-analytics-title">Analytic data of tickers</h2>

        <div
          className={`
            Main-analytics-ticker
            Main-analytics-ticker-follow
            theme-${themeSwitcher[theme]}
          `}
        >

          <span className="Main-analytics-ticker-name">
            <p className="Main-analytics-ticker-title">Ticker</p>
            <p className="Main-analytics-ticker-text">Exchange</p>
          </span>

          <div className="Main-analytics-ticker-informations">
            {renderTickerInfo('Price', null)}
            {renderTickerInfo('Change', null)}
            {renderTickerInfo('Percent', null)}
            {renderTickerInfo('Yield', null)}
          </div>

        </div>

        {
          arrayToDisplay.map((ticker) => (
            <React.Fragment key={ticker.ticker}>
              <div
                className={`
                  Main-analytics-ticker
                  theme-${theme}
                  Main-analytics-ticker-${ticker.isFollow && 'follow'}
                `}
              >

                <button
                  type="button"
                  className={`
                    Main-analytics-ticker-button 
                    Main-position-left 
                    theme-${theme}
                  `}
                  onClick={() => selectTicker(ticker.ticker)}
                >
                  <CheckMark id={ticker.ticker} isSelected />
                </button>

                <span className="Main-analytics-ticker-name">
                  <p className="Main-analytics-ticker-title">{ticker.ticker}</p>
                  <p className="Main-analytics-ticker-text">{ticker.exchange}</p>
                </span>

                <div className="Main-analytics-ticker-informations">
                  {renderTickerInfo(ticker, themeSwitcher[theme])}
                  {renderTickerInfo(ticker.change, themeSwitcher[theme])}
                  {renderTickerInfo(
                    Math.round(ticker.change_percent * 1000) / 10,
                    themeSwitcher[theme],
                  )}
                  {renderTickerInfo(Math.round(ticker.yield * 1000) / 10, themeSwitcher[theme])}

                </div>

                <button
                  type="button"
                  className={`
                    Main-analytics-ticker-button
                    Main-position-right
                    theme-${theme}
                  `}
                  onClick={() => followByTicker(ticker.ticker)}
                >
                  <div
                    id={ticker.ticker}
                    className={`
                      Main-analytics-ticker-icon
                      ${
                        ticker.isFollow
                          && `Main-analytics-ticker-icon--selected-${themeSwitcher[theme]}`
                      }
                    `}
                  />
                </button>

              </div>
            </React.Fragment>
          ))
        }
      </section>
    </main>
  );
}
