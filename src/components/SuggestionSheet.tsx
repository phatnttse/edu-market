import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectCourseStateInfo } from "@/features/course/course.selectors";
import { ArrowRight } from "lucide-react";
import type { Course } from "AppModels";
import CourseCard from "./CourseCard";
import { AuroraBackground } from "./ui/aurora-background";
import { Skeleton } from "./ui/skeleton";
import { useNavigate } from "react-router-dom";

interface SuggestionSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  maxItems?: number;
}

const SuggestionSheet: React.FC<SuggestionSheetProps> = ({
  isOpen,
  onOpenChange,
  maxItems = 8,
}) => {
  const { courses } = useSelector(selectCourseStateInfo);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Giả lập thời gian loading (2 giây)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const getRandomCourses = (courseList: Course[], count: number): Course[] => {
    if (!courseList || courseList.length === 0) return [];
    const shuffled = [...courseList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const suggestedCourses = getRandomCourses(courses || [], maxItems);

  const renderSkeleton = () => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
      {Array.from({ length: maxItems }).map((_, index) => (
        <div key={index} className="w-full rounded-lg overflow-hidden">
          <Skeleton className="w-full h-48" />
          <div className="p-4 space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center gap-1">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="rounded-t-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-0 max-h-[90vh] overflow-hidden border-0 shadow-2xl"
      >
        {/* Header với gradient */}
        <AuroraBackground className="bg-gradient-to-r from-blue-500 to-green-500 p-6 text-white">
          <SheetHeader className="text-center">
            <SheetTitle className="text-2xl font-bold text-white mb-2">
              Gợi ý dành riêng cho bạn
            </SheetTitle>
            <SheetDescription className="text-blue-100">
              Khám phá những khóa học hot nhất được chọn lọc kỹ càng
            </SheetDescription>
          </SheetHeader>
        </AuroraBackground>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
          {isLoading ? (
            renderSkeleton()
          ) : suggestedCourses.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Chưa có khóa học nào để gợi ý
              </p>
            </div>
          ) : (
            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {suggestedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          )}

          {/* View All Button */}
          {suggestedCourses.length > 0 && !isLoading && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  navigate("/products");
                  onOpenChange(false);
                }}
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Xem tất cả khóa học
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SuggestionSheet;
