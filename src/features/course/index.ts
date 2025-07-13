import { createSlice } from "@reduxjs/toolkit";
import {
  setCourses,
  setCurrentPage,
  setErrorMsg,
  setLoading,
  setTotalPages,
} from "./course.reducers";
import { initialCourseState } from "./course.initialState";

const course = createSlice({
  name: "course",
  initialState: initialCourseState,
  reducers: {
    setErrorMsgAction: setErrorMsg,
    setCoursesAction: setCourses,
    setTotalPagesAction: setTotalPages,
    setCurrentPageAction: setCurrentPage,
    setIsLoadingAction: setLoading,
  },
});

export const {
  setErrorMsgAction,
  setCoursesAction,
  setTotalPagesAction,
  setCurrentPageAction,
  setIsLoadingAction,
} = course.actions;
export default course.reducer;
