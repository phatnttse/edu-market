import type { TCourseState } from "AppModels";

export const initialCourseState: TCourseState = {
  errorMsg: null,
  courses: [],
  totalPages: 0,
  currentPage: 1,
  isLoading: false,
};
