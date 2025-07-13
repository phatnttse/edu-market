import React from "react";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "AppModels";
import { useNavigate } from "react-router-dom";
import CourseCard from "@/components/CourseCard";

interface WishlistGridProps {
  items: Course[];
  onUpdateWishlist: (course: Course) => void;
}

const WishlistGrid: React.FC<WishlistGridProps> = ({ items }) => {
  const navigate = useNavigate();
  if (!items || items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mb-20">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-8 mb-6">
              <Heart className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Danh sách yêu thích trống
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              Bạn chưa có sản phẩm nào trong danh sách yêu thích. Hãy khám phá
              và thêm những khóa học yêu thích của bạn!
            </p>
            <Button
              onClick={() => navigate("/products")}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <ArrowRight className="h-4 w-4" />
              Khám phá thêm sản phẩm
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default WishlistGrid;
