import {
  Star,
  Clock,
  Users,
  BookOpen,
  Play,
  Heart,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "AppModels";
import React from "react";
import CourseDetailsDialog from "./CourseDetailsDialog";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { requestUpdateWishlist } from "@/features/wishlist/wishlist.actions";
import { selectWishlistStateInfo } from "@/features/wishlist/wishlist.selectors";

interface CourseCardProps {
  course?: Course;
  onClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const [isOpenCourseDetailsDialog, setIsOpenCourseDetailsDialog] =
    React.useState<boolean>(false);
  const dispatch = useDispatch();
  const handleUpdateWishlist = (course: Course) => {
    dispatch(requestUpdateWishlist(course));
    toast.success(
      `Bạn vừa ${course?.title ? "bỏ" : "thêm"} khóa học ${
        course?.title
      } vào danh sách yêu thích!`
    );
  };
  const { items: wishlist } = useSelector(selectWishlistStateInfo);

  if (!course) return null;

  const discountPercent = course.originalPrice
    ? Math.round(
        ((course.originalPrice - course.price) / course.originalPrice) * 100
      )
    : 0;

  const isInWishlist = wishlist.some((item: Course) => item.id === course.id);

  return (
    <>
      <div className="group bg-white rounded-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 w-full max-w-sm mx-auto transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>

          {course.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {course.badge}
              </span>
            </div>
          )}

          {discountPercent > 0 && (
            <div className="absolute top-3 right-3">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                -{discountPercent}%
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
              {course.category}
            </span>
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-lg">
              {course.level}
            </span>
          </div>

          <h3 className="text-gray-900 truncate font-bold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
            {course.title}
          </h3>

          <div className="flex items-center gap-2 my-4">
            <p className="text-gray-600 text-sm font-medium">
              Giáo viên: {course.instructor}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4 text-gray-400 mb-1" />
              <span className="text-xs text-gray-600 font-medium">
                {course.students.toLocaleString()}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-4 h-4 text-gray-400 mb-1" />
              <span className="text-xs text-gray-600 font-medium">
                {course.duration}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-4 h-4 text-gray-400 mb-1" />
              <span className="text-xs text-gray-600 font-medium">
                {course.level}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(course.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {course.rating}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              ({course.students} đánh giá)
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-2xl text-emerald-600">
                {course.price.toLocaleString("vi-VN")}đ
              </span>
              {course.originalPrice && (
                <span className="text-sm text-gray-400 line-through mt-[4px]">
                  {course.originalPrice.toLocaleString("vi-VN")}đ
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={"default"}
              type="button"
              className="flex-1 cursor-pointer"
              onClick={
                onClick ? onClick : () => setIsOpenCourseDetailsDialog(true)
              }
            >
              <Search className="w-4 h-4" />
              Xem chi tiết
            </Button>
            <Button
              variant={"outline"}
              type="button"
              className={`hover:bg-white ${
                isInWishlist ? "bg-red-100" : "bg-white"
              }`}
              onClick={() => handleUpdateWishlist(course)}
            >
              <Heart
                className={`w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors ${
                  isInWishlist ? "text-red-500" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
      <CourseDetailsDialog
        isOpen={isOpenCourseDetailsDialog}
        onClose={() => setIsOpenCourseDetailsDialog(false)}
        course={course}
      />
    </>
  );
};

export default CourseCard;
