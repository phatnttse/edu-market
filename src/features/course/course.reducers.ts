import type { PayloadAction } from "@reduxjs/toolkit";
import type { TCourseState } from "AppModels";

export const setErrorMsg = (
  state: TCourseState,
  action: PayloadAction<string | null>
) => {
  state.errorMsg = action.payload;
};

export const setCourses = (
  state: TCourseState,
  action: PayloadAction<any[]>
) => {
  state.courses = action.payload;
};

export const setTotalPages = (
  state: TCourseState,
  action: PayloadAction<number>
) => {
  state.totalPages = action.payload;
};

export const setCurrentPage = (
  state: TCourseState,
  action: PayloadAction<number>
) => {
  state.currentPage = action.payload;
};

export const setLoading = (
  state: TCourseState,
  action: PayloadAction<boolean>
) => {
  state.isLoading = action.payload;
};
