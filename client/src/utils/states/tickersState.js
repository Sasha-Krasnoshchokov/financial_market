/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const tickersState = createSlice({
  name: 'tickers',
  initialState: {
    value: null,
    wasSelected: null,
  },
  reducers: {
    recorderTickers: (state, action) => {
      state.value = (
        state.value
          ? (action.payload.map((item) => {
            const ticker = state.value.find((tick) => tick.ticker === item.ticker);
            if (ticker.isFollow) {
              return ({
                ...ticker,
                ...item,
              });
            }
            return ({
              ...ticker,
            });
          }))
          : (action.payload.map((item) => ({
            ...item,
            isSelected: true,
            isFollow: true,
          })))
      );
    },
    selectorTickers: (state, action) => {
      state.value = state.value.map((item) => (
        (item.ticker === action.payload)
          ? ({
            ...item,
            isSelected: !item.isSelected,
          }) : ({
            ...item,
          })
      ));
    },
    followTickers: (state, action) => {
      state.value = state.value.map((item) => (
        (item.ticker === action.payload)
          ? ({
            ...item,
            isFollow: !item.isFollow,
          }) : ({
            ...item,
          })
      ));
    },
  },
});

export const {
  recorderTickers,
  selectorTickers,
  followTickers,
} = tickersState.actions;

export default tickersState.reducer;
