import { setCoursesAction } from "@/features/course";
import { selectCourseStateInfo } from "@/features/course/course.selectors";
import { GetCourses } from "@/services/course";
import { useDispatch, useSelector } from "react-redux";

export const useProduct = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector(selectCourseStateInfo);

  if (!courses || courses.length === 0) {
    const response = GetCourses();
    dispatch(setCoursesAction(response));
  }
};
