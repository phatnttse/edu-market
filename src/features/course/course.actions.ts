import type { TAppThunk, TGetCourseParams } from "AppModels";
import { setIsLoadingAction } from "../app";
import { GetCourses } from "@/services/course";
import {
  setCoursesAction,
  setErrorMsgAction,
  setTotalPagesAction,
  setCurrentPageAction,
} from ".";

export const requestGetCourses = (params: TGetCourseParams): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsLoadingAction(true));
    try {
      let response = await GetCourses();
      if (params.search) {
        response = response.filter((course) =>
          course.title.toLowerCase().includes(params.search!.toLowerCase())
        );
      }
      if (params.category && params.category.length > 0) {
        response = response.filter((course) =>
          params.category!.includes(course.category)
        );
      }
      if (params.minPrice && params.minPrice.length > 0) {
        const minPrice = Math.min(...params.minPrice);
        response = response.filter((course) => course.price >= minPrice);
      }
      if (params.maxPrice && params.maxPrice.length > 0) {
        const maxPrice = Math.max(...params.maxPrice);
        response = response.filter((course) => course.price <= maxPrice);
      }
      if (params.level && params.level.length > 0) {
        response = response.filter((course) =>
          params.level!.includes(course.level)
        );
      }
      if (params.rating && params.rating.length > 0) {
        const maxRating = Math.max(...params.rating);
        response = response.filter((course) => course.rating >= maxRating);
      }
      const startIndex = params.page * params.limit;
      const endIndex = startIndex + params.limit;
      const paginatedResponse = response.slice(startIndex, endIndex);

      dispatch(setCoursesAction(paginatedResponse));
      const totalPages = Math.ceil(response.length / params.limit);
      dispatch(setTotalPagesAction(totalPages));
      dispatch(setCurrentPageAction(params.page));
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Có lỗi xảy ra khi lấy danh sách khóa học";
      dispatch(setErrorMsgAction(errorMessage));
    } finally {
      dispatch(setIsLoadingAction(false));
    }
  };
};
