/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const themeState = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
    themeSwitcher: {
      light: 'dark',
      dark: 'light',
    },
  },
  reducers: {
    switchTheme: (state, action) => {
      state.value = state.themeSwitcher[action.payload];
    },
  },
});

export const { switchTheme } = themeState.actions;

export default themeState.reducer;
