import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Menu,
  ChevronDown,
  ChevronRight,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistStateInfo } from "@/features/wishlist/wishlist.selectors";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/data/nav-items";
import { AuroraBackground } from "../ui/aurora-background";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { totalItems } = useSelector(selectWishlistStateInfo);

  const toggleItem = (item: string) => {
    setOpenItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsSheetOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 dark:shadow-gray-800/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">EduMarket</span>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="dark:text-gray-200">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dark:bg-gray-800">
                      <ul className="grid gap-3 p-4 w-[300px] md:w-[400px] lg:w-[500px] dark:text-gray-200">
                        {item.items.map((subItem) => (
                          <li key={subItem.title} className="p-2">
                            <NavigationMenuLink asChild>
                              <Link
                                to={subItem.to}
                                className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                <div className="text-sm font-medium leading-none dark:text-gray-200">
                                  {subItem.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground dark:text-gray-400 line-clamp-2">
                                  {subItem.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.to!}
                      className={
                        navigationMenuTriggerStyle() + " dark:text-gray-200"
                      }
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => navigate("/wishlist")}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors dark:hover:bg-gray-800 cursor-pointer"
          >
            <Heart className="h-6 w-6 text-primary dark:text-gray-300" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <Button
            variant="outline"
            onClick={() => navigate("/signin")}
            className="border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Đăng nhập
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            className="bg-primary hover:bg-primary/90 text-white dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Đăng ký
          </Button>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors dark:hover:bg-gray-800">
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[320px] sm:w-[400px] p-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
          >
            <AuroraBackground className="bg-gradient-to-r from-primary to-blue-600 p-2 text-white">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-3 text-left text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-white" />
                    EduMarket
                  </div>
                </SheetTitle>
                <SheetDescription className="text-blue-100 mt-2">
                  Nền tảng học tập trực tuyến hàng đầu Việt Nam
                </SheetDescription>
              </SheetHeader>
            </AuroraBackground>

            <div className="flex-1 overflow-y-auto">
              <nav className="p-4 space-y-2">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-1 mb-4">
                  <button
                    onClick={() => handleNavigate("/wishlist")}
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                        <Heart className="h-5 w-5 text-red-500" />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Yêu thích
                      </span>
                    </div>
                    {totalItems > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium">
                        {totalItems}
                      </span>
                    )}
                  </button>
                </div>

                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          if (item.to) {
                            handleNavigate(item.to);
                          } else {
                            toggleItem(item.title);
                          }
                        }}
                        className="flex items-center justify-between w-full p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </span>
                        {item.items && (
                          <div className="bg-primary/10 p-1 rounded-lg">
                            {openItems.includes(item.title) ? (
                              <ChevronDown className="h-4 w-4 text-primary" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-primary" />
                            )}
                          </div>
                        )}
                      </button>
                      {item.items && openItems.includes(item.title) && (
                        <div className="bg-gray-50 dark:bg-gray-700/50 px-4 pb-3">
                          <div className="space-y-1">
                            {item.items.map((subItem) => (
                              <button
                                key={subItem.title}
                                onClick={() => handleNavigate(subItem.to)}
                                className="block w-full text-left p-2 rounded-lg text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-white dark:hover:bg-gray-700 transition-colors"
                              >
                                {subItem.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              <div className="p-4 pt-2">
                <div className="space-y-3 p-4">
                  <Button
                    variant="outline"
                    onClick={() => handleNavigate("/signin")}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    onClick={() => handleNavigate("/signup")}
                    className="w-full"
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
