import { AuroraBackground } from "@/components/ui/aurora-background";
import { selectWishlistStateInfo } from "@/features/wishlist/wishlist.selectors";
import { useSelector } from "react-redux";

const WishlistHeader: React.FC = () => {
  const { totalItems } = useSelector(selectWishlistStateInfo);
  return (
    <AuroraBackground className="pb-32 pt-10 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container max-w-8xl mx-auto px-14 relative">
        <div className="flex flex-col items-center my-4 justify-center gap-4">
          <h1 className="font-bold text-3xl max-[776px]:text-xl">
            Danh sách yêu thích
          </h1>
          <div className="flex max-[776px]:text-xs md:text-sm items-center border px-4 py-1 rounded-3xl gap-2 bg-white mt-[2px] dark:bg-gray-800/80">
            <span>{totalItems} sản phẩm</span>
          </div>
        </div>
        <p className="mb-6 text-center">
          Xem lại những sản phẩm bạn đã yêu thích.
        </p>
      </div>
    </AuroraBackground>
  );
};

export default WishlistHeader;
