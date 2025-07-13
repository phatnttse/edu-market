import type { Course, TAppThunk } from "AppModels";
import { setErrorMsgAction, updateWishlistAction } from ".";

export const requestUpdateWishlist = (course: Course): TAppThunk => {
  return async (dispatch: any) => {
    try {
      dispatch(updateWishlistAction(course));
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Cập nhật danh sách yêu thích không thành công";
      dispatch(setErrorMsgAction(errorMessage));
    }
  };
};
