import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { EffectCards } from "swiper/modules";
import CourseCard from "../../../components/CourseCard";
import type { Course } from "AppModels";

interface CourseCardListProps {
  courses: Course[];
  onCourseClick?: (course: Course) => void;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
SwiperCore.use([Navigation]);

const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
  onCourseClick,
}) => {
  return (
    <div className="w-full md:max-w-sm mx-auto max-[776px]:max-w-xs">
      <Swiper
        cardsEffect={{
          perSlideOffset: 6,
          perSlideRotate: 3,
          slideShadows: false,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
          stopOnLastSlide: true,
          waitForTransition: true,
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              course={course}
              onClick={() => onCourseClick && onCourseClick(course)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseCardList;
