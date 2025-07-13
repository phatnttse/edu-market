import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/Error/NotFound";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "@/pages/Products";
import MainLayout from "@/components/layouts/MainLayout";
import WishlistPage from "@/pages/Wishlist";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
