import { PlayIcon, ArrowRight } from "lucide-react";
import CourseCardList from "./CourseCardList";
import { mockCourses } from "../../../data/courses";
import CourseDetailsDialog from "@/components/CourseDetailsDialog";
import type { Course } from "AppModels";
import React from "react";

const HeroSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(
    null
  );
  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };
  const closeDialog = () => setSelectedCourse(null);
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>

        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-2/5 text-center lg:text-left">
              <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white px-4 py-2 rounded-full inline-block mb-6 shadow-lg">
                <p className="text-sm font-medium">
                  🎓 Nền tảng học trực tuyến hàng đầu
                </p>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight dark:text-gray-100">
                Học tập thông minh với Công nghệ AI
              </h1>

              <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 dark:text-gray-400 leading-relaxed">
                Khám phá hàng nghìn khóa học chất lượng cao với sự hỗ trợ của
                trí tuệ nhân tạo. Học mọi lúc, mọi nơi với phương pháp cá nhân
                hóa phù hợp với bạn.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <button className="bg-gradient-to-r text-sm from-primary to-primary/90 text-white cursor-pointer px-4 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Bắt đầu học miễn phí
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <button className="bg-gradient-to-r from-secondary to-secondary/90 text-white cursor-pointer w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <PlayIcon className="w-6 h-6 text-white ml-1" />
                  </button>
                  <span className="text-gray-700 font-medium dark:text-gray-300">
                    Xem video giới thiệu
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    50K+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Học viên
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Khóa học
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    98%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Hài lòng
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/5 relative flex justify-center md:flex hidden">
              <div className="absolute -top-10 lg:top-0 right-0 lg:right-5 w-20 h-20 bg-[#00BA9D] rounded-full opacity-20 animate-pulse dark:bg-[#00D1B2]"></div>
              <div className="absolute top-24 lg:top-32 left-0 lg:left-5 w-12 h-12 bg-[#FF6B38] rounded-full opacity-20 dark:bg-[#FF8C61]"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>

              <div className="relative md:flex hidden">
                <img
                  src="./hero_student.png"
                  alt="Giảng viên AI"
                  className="relative z-10 object-cover h-auto w-full max-w-xs mx-auto drop-shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-200 to-transparent rounded-full blur-2xl opacity-30"></div>
              </div>
            </div>

            <div className="md:w-2/5 relative mt-8 lg:mt-0">
              <CourseCardList
                courses={mockCourses.slice(0, 3)}
                onCourseClick={handleCourseClick}
              />
            </div>
          </div>
        </div>
      </section>
      <CourseDetailsDialog
        isOpen={!!selectedCourse}
        onClose={closeDialog}
        course={selectedCourse}
      />
    </>
  );
};

export default HeroSection;
