/* eslint-disable no-unused-vars */
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { selectorTickers, followTickers } from './states/tickersState';

export default function useTickers(sortBy = '', removeIt = '') {
  const tickers = useSelector((state) => state.tickers.value);

  const dispatch = useDispatch();
  const selectTickers = (ticker) => dispatch(selectorTickers(ticker));
  const followByTickers = (ticker) => dispatch(followTickers(ticker));

  return ({
    tickers,
    selectTickers,
    followByTickers,
  });
}
