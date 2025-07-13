import type { PayloadAction } from "@reduxjs/toolkit";
import type { TAppState } from "AppModels";

export const setIsLoading = (
  state: TAppState,
  action: PayloadAction<boolean>
) => {
  state.isLoading = action.payload;
};

export const setTheme = (
  state: TAppState,
  action: PayloadAction<"light" | "dark">
) => {
  state.theme = action.payload;
};
