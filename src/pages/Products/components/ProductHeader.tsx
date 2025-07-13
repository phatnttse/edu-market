import { AuroraBackground } from "@/components/ui/aurora-background";
import { useIsMobile } from "@/hooks/use-mobile";
import { LayoutDashboard, List, Search } from "lucide-react";
import { toast } from "sonner";

interface ProductHeaderProps {
  layout: string;
  setLayout: (layout: string) => void;
  filteredProductsCount: number;
  totalProductsCount: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  layout,
  setLayout,
  filteredProductsCount,
  totalProductsCount,
  searchTerm,
  setSearchTerm,
}) => {
  const isMobile = useIsMobile();
  const handleLayoutChange = (newLayout: string) => {
    if (isMobile && newLayout === "list") {
      toast.info("Chế độ danh sách không khả dụng trên thiết bị di động.");
      return;
    }
    setLayout(newLayout);
  };
  return (
    <AuroraBackground className="pb-32 pt-10 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container max-w-8xl mx-auto px-14 relative">
        <div className="flex items-center my-4 justify-start gap-6">
          <h1 className="font-bold text-3xl max-[776px]:text-xl">
            Danh sách sản phẩm
          </h1>
          <div className="flex max-[776px]:text-xs md:text-sm items-center border px-4 py-1 rounded-3xl gap-2 bg-white mt-[2px] dark:bg-gray-800/80">
            <span>{filteredProductsCount} sản phẩm</span>
          </div>
        </div>
        <p className="mb-6">
          Khám phá hàng nghìn sản phẩm chất lượng cao với sự hỗ trợ của AI.
        </p>

        <div className="flex items-center md:justify-between max-[776px]:flex-col">
          <div className="flex flex-col">
            <div className="flex items-center md:mb-8 max-[776px]:mb-4">
              <div className="bg-gray-100 rounded-full p-1 flex dark:bg-gray-700">
                <button
                  onClick={() => handleLayoutChange("grid")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    layout === "grid"
                      ? "bg-white text-primary shadow-sm dark:bg-gray-800 dark:text-gray-100"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  <LayoutDashboard size={16} />
                  Hình ảnh
                </button>
                <button
                  onClick={() => handleLayoutChange("list")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    layout === "list"
                      ? "bg-white text-primary shadow-sm dark:bg-gray-800 dark:text-gray-100"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  <List size={16} />
                  Danh sách
                </button>
              </div>
            </div>
            <p>
              Hiển thị 1-{filteredProductsCount} trên {totalProductsCount} sản
              phẩm
            </p>
          </div>
          <div className="relative w-full max-w-xs max-[776px]:mt-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm khóa học..."
              className="w-full px-4 py-3 pl-10 pr-4 bg-white border border-gray-300 rounded-3xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:bg-white/90 dark:bg-gray-800/80 dark:text-white dark:border-neutral-700 dark:focus:bg-gray-700 dark:hover:bg-gray-800/90"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500 cursor-pointer dark:text-neutral-500" />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default ProductHeader;
