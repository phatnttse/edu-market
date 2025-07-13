import PageMeta from "@/components/PageMeta";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ProductFilters from "./components/ProductFilters";
import ProductGrid from "./components/ProductGrid";
import ProductHeader from "./components/ProductHeader";
import { selectCourseStateInfo } from "@/features/course/course.selectors";
import { selectAppStateInfo } from "@/features/app/app.selectors";
import { requestGetCourses } from "@/features/course/course.actions";
import type { Course, TGetCourseParams } from "AppModels";
import { setIsLoadingAction } from "@/features/course";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import CourseDetailsDialog from "@/components/CourseDetailsDialog"; // Import dialog

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectAppStateInfo);
  const { courses, errorMsg } = useSelector(selectCourseStateInfo);
  const [layout, setLayout] = React.useState("grid");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const [selectedLevels, setSelectedLevels] = React.useState<string[]>([]);
  const [selectedMinPrice, setSelectedMinPrice] = React.useState<number[]>([]);
  const [selectedMaxPrice, setSelectedMaxPrice] = React.useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = React.useState<number[]>([]);
  const [page, setPage] = React.useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const limit = 6;

  useEffect(() => {
    dispatch(setIsLoadingAction(true));
    const delayLoading = setTimeout(() => {
      const params: TGetCourseParams = {
        page,
        limit,
        search: searchTerm,
        category: selectedCategories,
        minPrice: selectedMinPrice,
        maxPrice: selectedMaxPrice,
        level: selectedLevels,
        rating: selectedRatings,
      };
      dispatch(requestGetCourses(params)).then(() => {
        dispatch(setIsLoadingAction(false));
      });
    }, 300);

    return () => clearTimeout(delayLoading);
  }, [
    dispatch,
    page,
    limit,
    searchTerm,
    selectedCategories,
    selectedMinPrice,
    selectedMaxPrice,
    selectedLevels,
    selectedRatings,
  ]);

  const categories = [
    { id: "programming", name: "Lập trình", count: 2 },
    { id: "ai", name: "Trí tuệ nhân tạo", count: 1 },
    { id: "design", name: "Thiết kế", count: 1 },
    { id: "marketing", name: "Marketing", count: 1 },
    { id: "data", name: "Dữ liệu", count: 1 },
    { id: "management", name: "Quản lý", count: 1 },
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevels((prev) =>
      level === "Tất cả"
        ? []
        : prev.includes(level)
        ? prev.filter((l) => l !== level)
        : [...prev, level].filter((l) => l !== "Tất cả")
    );
  };

  const handlePriceChange = (min: number, max: number) => {
    setSelectedMinPrice(() => (min === 0 && max === Infinity ? [] : [min]));
    setSelectedMaxPrice(() => (min === 0 && max === Infinity ? [] : [max]));
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [rating]
    );
  };

  const openDialog = (course: Course) => {
    setSelectedCourse(course);
  };

  const closeDialog = () => {
    setSelectedCourse(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (errorMsg) {
    return <div className="text-center py-10 text-red-600">{errorMsg}</div>;
  }

  return (
    <>
      <PageMeta
        title="Danh sách sản phẩm - EduMarket"
        description="Khám phá hàng nghìn sản phẩm chất lượng cao với sự hỗ trợ của trí tuệ nhân tạo. Mua sắm mọi lúc, mọi nơi với phương pháp cá nhân hóa phù hợp với bạn."
      />
      <div className="w-full relative">
        <ProductHeader
          layout={layout}
          setLayout={setLayout}
          filteredProductsCount={courses.length}
          totalProductsCount={courses.length}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="lg:hidden fixed top-150 left-0 z-50">
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white shadow-lg hover:shadow-xl border border-primary"
              >
                <Filter className="h-5 w-5 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Bộ lọc</h3>
                <ProductFilters
                  categories={categories}
                  selectedCategories={selectedCategories}
                  selectedLevels={selectedLevels}
                  selectedMinPrice={selectedMinPrice}
                  selectedMaxPrice={selectedMaxPrice}
                  selectedRatings={selectedRatings}
                  onCategoryChange={handleCategoryChange}
                  onLevelChange={handleLevelChange}
                  onPriceChange={handlePriceChange}
                  onRatingChange={handleRatingChange}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="relative -mt-20 z-10 pb-20">
          <div className="container max-w-8xl mx-auto px-14">
            <div className="flex gap-8">
              <div className="hidden lg:block w-1/4 flex-shrink-0">
                <ProductFilters
                  categories={categories}
                  selectedCategories={selectedCategories}
                  selectedLevels={selectedLevels}
                  selectedMinPrice={selectedMinPrice}
                  selectedMaxPrice={selectedMaxPrice}
                  selectedRatings={selectedRatings}
                  onCategoryChange={handleCategoryChange}
                  onLevelChange={handleLevelChange}
                  onPriceChange={handlePriceChange}
                  onRatingChange={handleRatingChange}
                />
              </div>

              <div className="w-full lg:w-3/4">
                <ProductGrid
                  layout={layout}
                  products={courses}
                  setPage={setPage}
                  limit={limit}
                  onCourseClick={openDialog}
                />
              </div>
            </div>
          </div>
        </div>
        <CourseDetailsDialog
          isOpen={!!selectedCourse}
          onClose={closeDialog}
          course={selectedCourse}
        />
      </div>
    </>
  );
};

export default ProductsPage;
