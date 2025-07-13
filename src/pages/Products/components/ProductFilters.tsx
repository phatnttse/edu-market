import { Checkbox } from "@/components/ui/checkbox";
import { useIsMobile } from "@/hooks/use-mobile";
import { Star } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface ProductFiltersProps {
  categories: Category[];
  selectedCategories: string[];
  selectedLevels: string[];
  selectedMinPrice: number[];
  selectedMaxPrice: number[];
  selectedRatings: number[];
  onCategoryChange: (categoryId: string) => void;
  onLevelChange: (level: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onRatingChange: (rating: number) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategories,
  selectedLevels,
  selectedMinPrice,
  selectedMaxPrice,
  selectedRatings,
  onCategoryChange,
  onLevelChange,
  onPriceChange,
  onRatingChange,
}) => {
  const handlePriceChange = (min: number, max: number) => {
    onPriceChange(min, max);
  };
  const isMobile = useIsMobile();

  return (
    <div
      className={`bg-white rounded-xl p-6 sticky top-24 dark:bg-gray-800 overflow-y-auto ${
        isMobile ? "h-[calc(100vh-6rem)]" : "h-full"
      }`}
    >
      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 border-b pb-4">Danh mục</h4>
        <div className="space-y-6 mt-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.name)}
                onCheckedChange={() => onCategoryChange(category.name)}
              />
              <label
                htmlFor={`category-${category.id}`}
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-sm font-medium"
              >
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 border-b pb-4">Khoảng giá</h4>
        <div className="space-y-6 mt-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="price-all"
              checked={
                selectedMinPrice.length === 0 && selectedMaxPrice.length === 0
              }
              onCheckedChange={() => handlePriceChange(0, Infinity)}
            />
            <label
              htmlFor="price-all"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Tất cả
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="price-free"
              checked={
                selectedMinPrice.includes(0) && selectedMaxPrice.includes(0)
              }
              onCheckedChange={() => handlePriceChange(0, 0)}
            />
            <label
              htmlFor="price-free"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Miễn phí
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="price-under-500"
              checked={
                selectedMinPrice.includes(0) &&
                selectedMaxPrice.includes(500000)
              }
              onCheckedChange={() => handlePriceChange(0, 500000)}
            />
            <label
              htmlFor="price-under-500"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Dưới 500.000đ
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="price-500-1000"
              checked={
                selectedMinPrice.includes(500000) &&
                selectedMaxPrice.includes(1000000)
              }
              onCheckedChange={() => handlePriceChange(500000, 1000000)}
            />
            <label
              htmlFor="price-500-1000"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              500.000đ - 1.000.000đ
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="price-over-1000"
              checked={
                selectedMinPrice.includes(1000000) &&
                selectedMaxPrice.includes(Infinity)
              }
              onCheckedChange={() => handlePriceChange(1000000, Infinity)}
            />
            <label
              htmlFor="price-over-1000"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Trên 1.000.000đ
            </label>
          </div>
        </div>
      </div>

      {/* Level */}
      <div className="mb-6">
        <h4 className="font-medium mb-3 border-b pb-4">Mức độ</h4>
        <div className="space-y-6 mt-4">
          {["Tất cả", "Cơ bản", "Trung cấp", "Nâng cao"].map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={`level-${level}`}
                checked={
                  selectedLevels.includes(level) ||
                  (level === "Tất cả" && selectedLevels.length === 0)
                }
                onCheckedChange={() => onLevelChange(level)}
              />
              <label
                htmlFor={`level-${level}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="font-medium mb-3 border-b pb-4">Đánh giá</h4>
        <div className="space-y-6 mt-4">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={selectedRatings.includes(rating)}
                onCheckedChange={() => onRatingChange(rating)}
              />
              <label
                htmlFor={`rating-${rating}`}
                className="flex items-center gap-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span>& lên</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
