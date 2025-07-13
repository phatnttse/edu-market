import { Button } from "@/components/ui/button";
import {
  AlertCircleIcon,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProductListItem from "./ProductListItem";
import type { Course } from "AppModels";
import CourseCard from "@/components/CourseCard";
import { useSelector } from "react-redux";
import { selectCourseStateInfo } from "@/features/course/course.selectors";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProductGridProps {
  layout: string;
  products: Course[];
  setPage: (page: number) => void;
  limit: number;
  onCourseClick?: (course: Course) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  layout,
  products,
  setPage,
  limit,
  onCourseClick,
}) => {
  const { totalPages, currentPage, isLoading } = useSelector(
    selectCourseStateInfo
  );

  const renderPageButtons = () => {
    const maxVisibleButtons = 5;
    const buttons = [];

    if (totalPages <= maxVisibleButtons) {
      for (let i = 0; i < totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            size="sm"
            onClick={() => setPage(i)}
            className={`size-10 p-0 rounded-xl hover:shadow-xl transition-all duration-300 ${
              currentPage === i
                ? "bg-primary text-white border-none"
                : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-green-50 dark:hover:bg-green-900/50 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-primary"
            }`}
          >
            {i + 1}
          </Button>
        );
      }
    } else {
      let startPage = Math.max(0, currentPage - 2);
      const endPage = Math.min(
        totalPages - 1,
        startPage + maxVisibleButtons - 1
      );

      if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(0, endPage - maxVisibleButtons + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            size="sm"
            onClick={() => setPage(i)}
            className={`size-10 p-0 rounded-xl hover:shadow-xl transition-all duration-300 ${
              currentPage === i
                ? "bg-green-600 text-white border-none"
                : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-green-50 dark:hover:bg-green-900/50 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600"
            }`}
          >
            {i + 1}
          </Button>
        );
      }
    }

    return buttons;
  };

  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: limit }).map((_, index) => (
        <div key={index} className="w-full rounded-lg overflow-hidden">
          <Skeleton className="w-full h-48" />{" "}
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

  const renderNoDataMessage = () => (
    <Alert className="bg-yellow-50 border-yellow-200 mt-30">
      <AlertCircleIcon className="h-6 w-6 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        <strong>Không có sản phẩm nào phù hợp với tìm kiếm của bạn.</strong> Vui
        lòng thử lại với từ khóa khác hoặc điều chỉnh bộ lọc.
      </AlertDescription>
    </Alert>
  );

  return (
    <div className="dark:bg-gray-800">
      {layout === "grid" ? (
        <>
          {isLoading ? (
            renderSkeleton()
          ) : products.length === 0 ? (
            renderNoDataMessage()
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <CourseCard
                  key={product.id}
                  course={product}
                  onClick={() => onCourseClick && onCourseClick(product)}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <div className="space-y-4">
              {Array.from({ length: limit }).map((_, index) => (
                <div key={index} className="w-full rounded-lg overflow-hidden">
                  <Skeleton className="w-full h-32" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            renderNoDataMessage()
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}

      {totalPages > 1 && (
        <div className="px-8 py-6 pt-10 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-xl hover:shadow-xl transition-all duration-300"
                onClick={() => setPage(0)}
                disabled={currentPage === 0}
              >
                <span className="sr-only">Go to first page</span>
                <ChevronFirst />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-xl hover:shadow-xl transition-all duration-300"
                onClick={() => setPage(Math.max(currentPage - 1, 0))}
                disabled={currentPage === 0}
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeft />
              </Button>

              <div className="flex items-center space-x-2">
                {renderPageButtons()}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-xl hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  setPage(Math.min(currentPage + 1, totalPages - 1))
                }
                disabled={currentPage === totalPages - 1}
              >
                <span className="sr-only">Go to next page</span>
                <ChevronRight />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-xl hover:shadow-xl transition-all duration-300"
                onClick={() => setPage(totalPages - 1)}
                disabled={currentPage === totalPages - 1}
              >
                <span className="sr-only">Go to last page</span>
                <ChevronLast />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
