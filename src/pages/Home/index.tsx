import HeroSection from "./components/HeroSection";
import PageMeta from "@/components/PageMeta";
import PopularCourseSection from "./components/PopularCourseSection";
import { ExploreCarouselSection } from "./components/ExploreCarouselSection";
import { AnimatedTestimonials } from "./components/Testimonials";
import { testimonials } from "@/data/testimonials";

const HomePage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Sàn thương mại giáo dục trực tuyến - EduMarket"
        description="Khám phá hàng nghìn khóa học chất lượng cao với sự hỗ trợ của trí tuệ nhân tạo. Học mọi lúc, mọi nơi với phương pháp cá nhân hóa phù hợp với bạn."
      />
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <HeroSection />
      </div>
      <div className="w-full container mx-auto">
        <div className="w-full p-6">
          <PopularCourseSection />
          <ExploreCarouselSection />
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </div>
    </>
  );
};

export default HomePage;
