import { createSlice } from "@reduxjs/toolkit";
import { initialAppState } from "./app.initialState";
import { setIsLoading, setTheme } from "./app.reducers";

const app = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setIsLoadingAction: setIsLoading,
    setThemeAction: setTheme,
  },
});

export const { setIsLoadingAction, setThemeAction } = app.actions;
export default app.reducer;
