import type { RootState } from "@/redux/store";

export const selectWishlistStateInfo = (state: RootState) => state.wishlist;
