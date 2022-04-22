/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const intervals = createSlice({
  name: 'userStatus',
  initialState: {
    value: [
      {
        interval: 'Auto',
        delay: null,
        isSelected: true,
      },
      {
        interval: '10 Sec',
        delay: 10000,
        isSelected: false,
      },
      {
        interval: '30 Sec',
        delay: 30000,
        isSelected: false,
      },
      {
        interval: '1 Min',
        delay: 60000,
        isSelected: false,
      },
      {
        interval: '1 Hour',
        delay: 3600000,
        isSelected: false,
      },
    ],
  },
  reducers: {
    switcherIntervals: (state, action) => {
      state.value = state.value.map((item) => ({
        ...item,
        isSelected: (item.interval === action.payload),
      }));
    },
  },
});

export const { switcherIntervals } = intervals.actions;

export default intervals.reducer;
