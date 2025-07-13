import type { RootState } from "@/redux/store";

export const selectCourseStateInfo = (state: RootState) => state.course;
