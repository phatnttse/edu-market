import type { PayloadAction } from "@reduxjs/toolkit";
import type { Course, TWishlistState } from "AppModels";

export const setErrorMsg = (
  state: TWishlistState,
  action: PayloadAction<string | null>
) => {
  state.errorMsg = action.payload;
};

export const updateWishlist = (
  state: TWishlistState,
  action: PayloadAction<Course>
) => {
  const itemIndex = state.items.findIndex(
    (item) => item.id === action.payload.id
  );
  if (itemIndex !== -1) {
    state.items.splice(itemIndex, 1);
  } else {
    state.items.push(action.payload);
  }
  state.totalItems = state.items.length;
  state.errorMsg = null;
};
