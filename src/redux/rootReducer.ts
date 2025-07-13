import app from "@/features/app";
import course from "@/features/course";
import wishlist from "@/features/wishlist";
import { combineReducers } from "@reduxjs/toolkit";
import type { AnyAction, Reducer } from "@reduxjs/toolkit";

const combineReducer = combineReducers({
  app: app,
  course: course,
  wishlist: wishlist,
});

export type RootState = ReturnType<typeof combineReducer>;

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === "logOut") {
    state = {} as RootState;
  }
  return combineReducer(state, action);
};

export default rootReducer;
