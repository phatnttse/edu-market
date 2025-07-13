import React from "react";
import { ArrowRight } from "lucide-react";
import CourseCard from "../../../components/CourseCard";
import { useSelector } from "react-redux";
import { selectCourseStateInfo } from "@/features/course/course.selectors";
import { useNavigate } from "react-router-dom";

const PopularCourseSection: React.FC = () => {
  const { courses } = useSelector(selectCourseStateInfo);
  const popularCourses = courses.slice(0, 4);
  const navigate = useNavigate();

  return (
    <>
      <section className="py-16 px-4 max">
        <div className="mx-auto max-w-8xl">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm font-medium tracking-wide uppercase mb-3">
              Khám phá khóa học phổ biến
            </p>
            <h2 className="md:text-4xl font-bold text-gray-900 mb-6">
              Chọn khóa học phù hợp với bạn
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/products")}
              aria-label="Xem thêm khóa học"
              className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Xem thêm khóa học
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCourseSection;
