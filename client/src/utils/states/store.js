import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './themeState';
import logsReducer from './logsState';
import tickersReducer from './tickersState';
import intervalsReducer from './intervalsState';

export default configureStore({
  reducer: {
    theme: themeReducer,
    userStatus: logsReducer,
    tickers: tickersReducer,
    intervals: intervalsReducer,
  },
});
