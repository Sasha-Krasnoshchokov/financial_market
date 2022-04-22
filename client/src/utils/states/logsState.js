/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const logsState = createSlice({
  name: 'userStatus',
  initialState: {
    value: 'Log out',
    statusSwitcher: {
      'Log in': 'Log out',
      'Log out': 'Log in',
    },
  },
  reducers: {
    switcher: (state, action) => {
      state.value = state.statusSwitcher[action.payload];
    },
  },
});

export const { switcher } = logsState.actions;

export default logsState.reducer;
