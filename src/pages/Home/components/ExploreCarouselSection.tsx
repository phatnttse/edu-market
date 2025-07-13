import { Card, Carousel } from "@/components/ui/cards-carousel";

export function ExploreCarouselSection() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-8xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-20">
        Khám phá các khoá học và sản phẩm giáo dục mới nhất
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Học tập hiệu quả với AI.
              </span>{" "}
              Tham gia lớp học trực tuyến, tải giáo trình và tài liệu cá nhân
              hóa, hỗ trợ bởi công nghệ AI tiên tiến.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              loading="lazy"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Lớp học trực tuyến",
    title: "Lớp học AI trực tuyến cơ bản",
    src: "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Giáo trình",
    title: "Giáo trình AI nâng cao",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tài liệu",
    title: "Tài liệu học tập AI",
    src: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Lớp học trực tuyến",
    title: "Lớp học lập trình AI",
    src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Giáo trình",
    title: "Giáo trình học AI cơ bản",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tài liệu",
    title: "Tài liệu AI chuyên sâu",
    src: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
