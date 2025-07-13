import React, { useState, useRef, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  User,
  Sparkles,
  MessageCircle,
  Loader2,
  ArrowUp,
} from "lucide-react";
import { AuroraBackground } from "./ui/aurora-background";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface AIChatSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AIChatSheet: React.FC<AIChatSheetProps> = ({ isOpen, onOpenChange }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Xin chào! Tôi là AI Assistant của EduMarket. Tôi có thể giúp bạn tìm kiếm khóa học phù hợp, giải đáp thắc mắc về học tập, hoặc tư vấn lộ trình phát triển kỹ năng. Bạn cần hỗ trợ gì hôm nay?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mockAIResponses = [
    "Tôi hiểu bạn đang quan tâm đến lĩnh vực này. Dựa trên kinh nghiệm, tôi khuyên bạn nên bắt đầu với những khóa học cơ bản trước.",
    "Đó là một câu hỏi rất hay! Để trả lời chính xác, tôi cần biết thêm về mục tiêu và kinh nghiệm hiện tại của bạn.",
    "Tôi có thể gợi ý một số khóa học phù hợp với nhu cầu của bạn. Bạn có muốn xem danh sách các khóa học được đánh giá cao nhất không?",
    "Rất tuyệt! Điều đó cho thấy bạn có định hướng rõ ràng. Tôi sẽ giúp bạn tìm ra lộ trình học tập hiệu quả nhất.",
    "Cảm ơn bạn đã chia sẻ! Dựa trên thông tin này, tôi có thể đưa ra những lời khuyên cụ thể hơn về việc học tập.",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("khóa học") || lowerMessage.includes("course")) {
      return "Tôi có thể giúp bạn tìm khóa học phù hợp! EduMarket có hàng nghìn khóa học chất lượng từ lập trình, thiết kế đến marketing. Bạn quan tâm đến lĩnh vực nào cụ thể?";
    }

    if (
      lowerMessage.includes("giá") ||
      lowerMessage.includes("price") ||
      lowerMessage.includes("phí")
    ) {
      return "Về giá cả, EduMarket có nhiều mức giá khác nhau từ miễn phí đến cao cấp. Chúng tôi thường có các chương trình khuyến mãi hấp dẫn. Bạn có ngân sách dự kiến nào cho việc học không?";
    }

    if (
      lowerMessage.includes("lập trình") ||
      lowerMessage.includes("programming")
    ) {
      return "Lập trình là lĩnh vực rất hot hiện tại! Tôi khuyên bạn nên bắt đầu với Python hoặc JavaScript. Chúng tôi có khóa học từ cơ bản đến nâng cao với giảng viên giàu kinh nghiệm.";
    }

    if (
      lowerMessage.includes("ai") ||
      lowerMessage.includes("trí tuệ nhân tạo")
    ) {
      return "AI đang là xu hướng của tương lai! Chúng tôi có các khóa học AI từ cơ bản như Machine Learning đến nâng cao như Deep Learning. Bạn đã có kiến thức lập trình chưa?";
    }

    if (lowerMessage.includes("thiết kế") || lowerMessage.includes("design")) {
      return "Thiết kế là lĩnh vực sáng tạo tuyệt vời! Chúng tôi có khóa học UI/UX, Graphic Design, và Web Design. Bạn muốn tập trung vào loại thiết kế nào?";
    }

    return mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)];
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "Tôi muốn học lập trình, bắt đầu từ đâu?",
    "Có khóa học AI nào phù hợp người mới?",
    "Khóa học thiết kế UI/UX có gì hay?",
    "Tôi cần tư vấn lộ trình học Data Science",
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="md:min-w-[500px] p-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <AuroraBackground className="bg-gradient-to-r from-primary to-blue-600 p-4 text-white">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-white">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              AI Assistant
            </SheetTitle>
            <SheetDescription className="text-blue-100">
              Trợ lý AI thông minh của EduMarket
            </SheetDescription>
          </SheetHeader>
        </AuroraBackground>

        <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-200px)]">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex gap-3 mb-4 ${
                  message.type === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === "user"
                      ? "bg-primary text-white"
                      : "bg-gradient-to-br from-purple-500 to-blue-500 text-white"
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Sparkles className="h-4 w-4" />
                  )}
                </div>

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <div
                    className={`text-xs mt-1 opacity-70 ${
                      message.type === "user"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 mb-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="bg-white dark:bg-gray-700 shadow-md border border-gray-100 dark:border-gray-600 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-1">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    AI đang suy nghĩ...
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 mb-4"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Gợi ý câu hỏi:
              </p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="w-full text-left p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-blue-200 dark:border-gray-500 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 text-sm"
                >
                  <MessageCircle className="h-4 w-4 inline mr-2 text-primary" />
                  {question}
                </button>
              ))}
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Hỏi tôi điều gì đó..."
              className="w-full pr-12 py-6 rounded-full border-gray-300 dark:border-gray-600 focus:border-primary dark:bg-gray-700 text-sm"
              disabled={isTyping}
            />
            <Button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-primary hover:bg-primary/90"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AIChatSheet;
