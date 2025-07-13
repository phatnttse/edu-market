import { selectWishlistStateInfo } from "@/features/wishlist/wishlist.selectors";
import WishlistHeader from "./components/WishlistHeader";
import WishlistGrid from "./components/WishlistGrid";
import { useDispatch, useSelector } from "react-redux";
import PageMeta from "@/components/PageMeta";
import { requestUpdateWishlist } from "@/features/wishlist/wishlist.actions";
import type { Course } from "AppModels";

const WishlistPage: React.FC = () => {
  const { items } = useSelector(selectWishlistStateInfo);
  const dispatch = useDispatch();

  const handleUpdateWishlist = (course: Course) => {
    dispatch(requestUpdateWishlist(course));
  };

  return (
    <>
      <PageMeta
        title="Danh sách yêu thích - EduMarket"
        description="Quản lý và xem lại những khóa học yêu thích của bạn trên EduMarket"
      />
      <div className="w-full relative">
        <WishlistHeader />
        <div className="relative -mt-20 z-10 pb-20">
          <div className="container max-w-8xl mx-auto px-14">
            <div className="flex gap-8">
              <div className="w-full">
                <WishlistGrid
                  items={items || []}
                  onUpdateWishlist={handleUpdateWishlist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
