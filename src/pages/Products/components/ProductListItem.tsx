import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Heart,
  ShoppingCart,
  BookOpen,
  Clock,
  Play,
  Search,
} from "lucide-react";
import type { Course } from "AppModels";
import CourseDetailsDialog from "@/components/CourseDetailsDialog";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlistStateInfo } from "@/features/wishlist/wishlist.selectors";
import { requestUpdateWishlist } from "@/features/wishlist/wishlist.actions";
import { toast } from "sonner";

interface ProductListItemProps {
  product: Course;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
}: ProductListItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
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

  const isInWishlist = wishlist.some((item: Course) => item.id === product.id);
  return (
    <>
      <div className="flex flex-row group transition-all duration-300 bg-white rounded-xl overflow-hidden border-gray-200">
        <div className="relative w-80 h-56 flex-shrink-0 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full rounded-xl object-cover transition-transform duration-300"
          />

          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs px-3 py-1 rounded-md">
                {product.badge.toUpperCase()}
              </Badge>
            </div>
          )}

          <Button
            type="button"
            onClick={() => handleUpdateWishlist(product)}
            size="sm"
            variant="ghost"
            className={`absolute top-3 right-3 h-8 w-8 p-0 rounded-full shadow-sm z-20 hover:bg-red-300 ${
              isInWishlist ? "bg-red-400" : "bg-white"
            }`}
          >
            <Heart
              className={`w-4 h-4 text-gray-600 hover:text-red-500 transition-colors ${
                isInWishlist ? "text-white" : "text-gray-600"
              }`}
            />
          </Button>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 z-10">
            <Button
              size="lg"
              className="h-12 w-12 p-0 bg-white/90 hover:bg-white rounded-full shadow-lg"
            >
              <Play
                className="w-5 h-5 text-gray-700 ml-0.5"
                fill="currentColor"
              />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors cursor-pointer">
              {product.title}
            </h3>

            <p className="text-gray-500 text-sm mb-3">
              {product.category}, {product.level}
            </p>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm ml-1">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-500 text-sm">
                ({product.reviewCount})
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 text-sm">
                {product.instructor}
              </span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
              {product.description}
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Từ {product.price.toLocaleString("vi-VN")}đ</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>{product.students} học viên</span>
              </div>
              <div className="flex items-center gap-1">
                <ShoppingCart className="w-4 h-4" />
                <span>{product.lessons} deals</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="default"
              type="button"
              className="px-8 py-2 rounded-lg font-medium transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Search className="w-4 h-4" />
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
      <CourseDetailsDialog
        course={product}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ProductListItem;
