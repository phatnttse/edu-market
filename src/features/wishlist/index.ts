import { createSlice } from "@reduxjs/toolkit";
import { setErrorMsg, updateWishlist } from "./wishlist.reducers";
import { initialWishlistState } from "./wishlist.initialState";

const wishlist = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    setErrorMsgAction: setErrorMsg,
    updateWishlistAction: updateWishlist,
  },
});

export const { setErrorMsgAction, updateWishlistAction } = wishlist.actions;
export default wishlist.reducer;
