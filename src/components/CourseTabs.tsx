import StarRating from "@/components/StarRating";
import type { Course } from "AppModels";
import { ChevronDown, ChevronUp, Play, User } from "lucide-react";
import { useState } from "react";

interface CourseModalTabsProps {
  course: Course;
}

const CourseModalTabs: React.FC<CourseModalTabsProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const tabs = [
    { id: "overview", label: "Tổng quan" },
    { id: "curriculum", label: "Chương trình học" },
    { id: "instructor", label: "Giảng viên" },
    { id: "reviews", label: "Đánh giá" },
  ];

  return (
    <div className="px-4 sm:px-8 py-6 sm:py-8">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6 sm:mb-8">
        <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "border-teal-500 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mô tả khóa học</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Chương trình học</h3>
            {course.curriculum.map((section, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-4 sm:px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-left">
                    <span className="font-semibold text-teal-600">
                      Phần {index + 1}: {section.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {section.duration} • {section.lessons.length} bài học
                    </span>
                  </div>
                  {expandedSections.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedSections.includes(index) && (
                  <div className="px-4 sm:px-6 py-4 bg-white">
                    <ul className="space-y-3">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lessonIndex}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <Play className="w-4 h-4 text-teal-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "instructor" && (
          <div>
            <h3 className="text-xl font-bold mb-4">Giảng viên</h3>
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    {course.instructor}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Chuyên gia Tài chính Cá nhân
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực tài chính và đầu tư,
                {course.instructor} đã giúp hàng ngàn người xây dựng nền tảng tài chính vững chắc.
              </p>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-xl font-bold">Đánh giá</h3>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">
                    {course.rating}
                  </div>
                  <StarRating rating={course.rating} size="sm" />
                  <div className="text-sm text-gray-500">
                    {course.reviewCount} đánh giá
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {course.reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b border-gray-100 pb-6 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <div className="flex items-center gap-2">
                            <StarRating rating={review.rating} size="sm" />
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseModalTabs;
