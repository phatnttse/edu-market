import { Bot } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SuggestionSheet from "./SuggestionSheet";
import AIChatSheet from "./AIChatSheet";

const AIWidget: React.FC = () => {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSuggestionSheet, setIsOpenSuggestionSheet] = useState(false);
  const [isOpenAIChatSheet, setIsOpenAIChatSheet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        })
        .then(() => {
          setTimeout(() => {
            controls.start({
              opacity: 0,
              y: -20,
              transition: { duration: 0.5 },
            });
          }, 5000);
        });
    }, 15000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <>
      <div className="fixed bottom-40 md:-right-2 max-[776px]:-right-6 z-20 ">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-2xl shadow-lg w-36 ml-20">
            <div className="flex items-center space-x-1">
              <Bot className="w-4 h-4 flex-shrink-0 mr-2" />
              <div>
                <p className="text-xs font-medium leading-tight">
                  Xin chào! Tôi là trợ lý ảo
                </p>
                <p className="text-[10px] opacity-90 mt-0.5">Nhấn để hỗ trợ</p>
              </div>
            </div>
            <div className="absolute bottom-0 right-12 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-purple-600 transform translate-y-full" />
          </div>
        </motion.div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="w-24 h-24 ml-40 mt-2 cursor-pointer transition-all duration-300 relative"
              style={{ animation: "walk 4s ease-in-out infinite" }}
            >
              <img src="./bot.webp" alt="AI Bot" className="object-cover" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="bottom"
            className="rounded-t-3xl bg-white p-6 max-h-[80vh] overflow-y-auto"
          >
            <SheetHeader className="text-center mb-6">
              <SheetTitle className="text-2xl font-bold text-gray-900">
                Chào bạn! Tôi có thể giúp gì?
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-500">
                Chọn một tùy chọn bên dưới để bắt đầu.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3 max-w-md mx-auto">
              <Button
                variant="default"
                className="w-full h-12 text-sm font-medium rounded-lg transition-colors duration-200"
                onClick={() => setIsOpenSuggestionSheet(true)}
              >
                Gợi ý sản phẩm
              </Button>
              <SuggestionSheet
                isOpen={isOpenSuggestionSheet}
                onOpenChange={setIsOpenSuggestionSheet}
              />
              <Button
                variant="default"
                className="w-full h-12 bg-secondary hover:bg-secondary/80 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                onClick={() => setIsOpenAIChatSheet(true)}
              >
                Tư vấn mua hàng
              </Button>
              <AIChatSheet
                isOpen={isOpenAIChatSheet}
                onOpenChange={setIsOpenAIChatSheet}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default AIWidget;
