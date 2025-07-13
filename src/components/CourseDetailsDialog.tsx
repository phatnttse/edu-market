import type { Course } from "AppModels";
import {
  Award,
  BookOpen,
  Clock,
  Coins,
  Globe,
  Play,
  User,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CourseModalTabs from "./CourseTabs";
import StarRating from "@/components/StarRating";

interface CourseDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course | null;
}

const CourseDetailsDialog: React.FC<CourseDetailsDialogProps> = ({
  isOpen,
  onClose,
  course,
}) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] h-screen overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg z-[1000]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="relative z-[1001] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-6 font-sans dark:bg-neutral-900"
          >
            <button
              className="sticky p-1 cursor-pointer top-0 right-0 ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-black dark:bg-white"
              onClick={onClose}
            >
              <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <div className="max-h-[calc(100vh-100px)] overflow-y-auto mt-4">
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden pt-4 pb-4 overflow-hidden rounded-3xl">
                <div className="w-full px-4 py-10 mx-auto">
                  <div className="w-[55%] word-break-words text-ellipsis">
                    <h1 className="font-bold text-2xl text-primary">
                      {course.title}
                    </h1>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <User className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.instructor}</span>
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm">{course.category}</span>
                    <StarRating rating={course.rating} size="sm" />
                    <span className="text-sm">
                      {course.rating} ({course.reviewCount} đánh giá)
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full px-4 mx-auto">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3">
                      <CourseModalTabs course={course} />
                    </div>
                    <div className="w-full md:w-1/3">
                      <div className="relative md:-mt-30 max-[776px]:pt-6">
                        <div className="group bg-white rounded-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 w-full max-w-sm mx-auto transform hover:-translate-y-2">
                          <div className="relative overflow-hidden">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-48 object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors cursor-pointer">
                                <Play className="w-8 h-8 text-white fill-white" />
                              </div>
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="font-semibold mb-4 text-lg">
                              Thông tin khoá học
                            </h3>

                            <div className="space-y-6">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Coins className="w-5 h-5" />
                                  <span className="">Giá:</span>
                                </div>
                                <span className="text-xl font-bold text-primary/90">
                                  {course.price.toLocaleString("vn-VN", {
                                    style: "currency",
                                    currency: "VND",
                                  })}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <User className="w-5 h-5" />
                                  <span className="">Giáo viên:</span>
                                </div>
                                <span className="font-medium">
                                  {course.instructor}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Clock className="w-5 h-5" />
                                  <span className="">Thời gian:</span>
                                </div>
                                <span className="font-medium">
                                  {course.duration}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <BookOpen className="w-5 h-5" />
                                  <span className="">Bài học:</span>
                                </div>
                                <span className="font-medium">
                                  {course.lessons}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Users className="w-5 h-5" />
                                  <span className="">Học viên:</span>
                                </div>
                                <span className="font-medium">
                                  {course.students}
                                </span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Globe className="w-5 h-5" />
                                  <span className="">Ngôn ngữ:</span>
                                </div>
                                <span className="font-medium">Tiếng Anh</span>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <Award className="w-5 h-5" />
                                  <span className="">Chứng chỉ:</span>
                                </div>
                                <span className="font-medium">Có</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseDetailsDialog;
