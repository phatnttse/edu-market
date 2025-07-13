import type { Course } from "AppModels";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Lập trình React cơ bản",
    description:
      "Học React từ những kiến thức cơ bản nhất đến các kỹ thuật nâng cao, xây dựng ứng dụng web hiện đại",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    instructor: "Nguyễn Văn An",
    rating: 4.8,
    students: 1250,
    price: 899000,
    originalPrice: 1299000,
    duration: "12 tuần",
    level: "Trung cấp",
    category: "Lập trình",
    badge: "Bestseller",
    reviewCount: 320,
    lessons: 25,
    longDescription:
      "Khóa học cung cấp kiến thức nền tảng về React, bao gồm component, state, props, và các kỹ thuật nâng cao như hooks, context API. Phù hợp cho người mới bắt đầu muốn trở thành lập trình viên web chuyên nghiệp.",
    features: ["Học qua dự án thực tế", "Hỗ trợ 24/7", "Chứng chỉ hoàn thành"],
    curriculum: [
      {
        title: "Giới thiệu về React",
        duration: "2 tuần",
        lessons: [
          "Tổng quan về React",
          "Cài đặt môi trường",
          "Tạo component đầu tiên",
        ],
      },
      {
        title: "Xây dựng ứng dụng",
        duration: "6 tuần",
        lessons: ["Quản lý state", "Sử dụng hooks", "Kết nối API"],
      },
      {
        title: "Dự án cuối khóa",
        duration: "4 tuần",
        lessons: ["Xây dựng ứng dụng hoàn chỉnh", "Triển khai lên server"],
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Trần Văn Hùng",
        avatar: "https://i.pravatar.cc/50?img=1",
        rating: 5,
        comment: "Khóa học rất chi tiết và dễ hiểu!",
        date: "2025-06-15",
      },
      {
        id: 2,
        name: "Lê Thị Mai",
        avatar: "https://i.pravatar.cc/50?img=2",
        rating: 4,
        comment: "Nội dung tốt, nhưng cần thêm bài tập thực hành.",
        date: "2025-06-20",
      },
    ],
  },
  {
    id: "2",
    title: "AI & Machine Learning với Python",
    description:
      "Khóa học toàn diện về trí tuệ nhân tạo và học máy sử dụng Python, TensorFlow và Keras",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    instructor: "Trần Thị Bình",
    rating: 4.9,
    students: 890,
    price: 1299000,
    originalPrice: 1899000,
    duration: "16 tuần",
    level: "Nâng cao",
    category: "Trí tuệ nhân tạo",
    badge: "Mới nhất",
    reviewCount: 245,
    lessons: 30,
    longDescription:
      "Khóa học hướng dẫn chi tiết về AI và Machine Learning, từ cơ bản đến ứng dụng thực tế với các thư viện như TensorFlow và Keras. Phù hợp cho các nhà phát triển muốn khám phá AI.",
    features: ["Học qua dự án AI", "Cộng đồng hỗ trợ", "Tài liệu tham khảo"],
    curriculum: [
      {
        title: "Cơ bản về AI",
        duration: "3 tuần",
        lessons: ["Giới thiệu AI", "Thuật toán cơ bản", "Python cho AI"],
      },
      {
        title: "Machine Learning",
        duration: "7 tuần",
        lessons: ["Hồi quy tuyến tính", "Mạng nơ-ron", "Keras cơ bản"],
      },
      {
        title: "Dự án thực tế",
        duration: "6 tuần",
        lessons: ["Xây dựng mô hình AI", "Đánh giá và tối ưu hóa"],
      },
    ],
    reviews: [
      {
        id: 3,
        name: "Nguyễn Thị Lan",
        avatar: "https://i.pravatar.cc/50?img=3",
        rating: 5,
        comment: "Tuyệt vời, rất thực tế!",
        date: "2025-06-18",
      },
      {
        id: 4,
        name: "Phạm Văn Nam",
        avatar: "https://i.pravatar.cc/50?img=4",
        rating: 4.5,
        comment: "Khóa học khó nhưng đáng giá.",
        date: "2025-06-22",
      },
    ],
  },
  {
    id: "3",
    title: "Thiết kế UI/UX chuyên nghiệp",
    description:
      "Nắm vững nguyên lý thiết kế giao diện người dùng và trải nghiệm người dùng với Figma",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop",
    instructor: "Lê Minh Châu",
    rating: 4.7,
    students: 2100,
    price: 799000,
    originalPrice: 1199000,
    duration: "10 tuần",
    level: "Cơ bản",
    category: "Thiết kế",
    badge: "Phổ biến",
    reviewCount: 450,
    lessons: 20,
    longDescription:
      "Khóa học cung cấp kỹ năng thiết kế UI/UX từ cơ bản đến chuyên sâu, sử dụng Figma để tạo giao diện đẹp mắt và thân thiện với người dùng.",
    features: [
      "Học qua dự án thực tế",
      "Hỗ trợ trực tiếp",
      "Mẫu thiết kế miễn phí",
    ],
    curriculum: [
      {
        title: "Giới thiệu UI/UX",
        duration: "2 tuần",
        lessons: ["Tổng quan UI/UX", "Cài đặt Figma", "Thiết kế cơ bản"],
      },
      {
        title: "Thiết kế chuyên sâu",
        duration: "5 tuần",
        lessons: ["Nguyên lý thiết kế", "Tạo prototype", "Phản hồi người dùng"],
      },
      {
        title: "Dự án thực tế",
        duration: "3 tuần",
        lessons: ["Thiết kế ứng dụng", "Kiểm tra và cải thiện"],
      },
    ],
    reviews: [
      {
        id: 5,
        name: "Trần Thị Hoa",
        avatar: "https://i.pravatar.cc/50?img=5",
        rating: 4.5,
        comment: "Rất hữu ích cho người mới bắt đầu!",
        date: "2025-06-10",
      },
      {
        id: 6,
        name: "Đỗ Văn Tùng",
        avatar: "https://i.pravatar.cc/50?img=6",
        rating: 4.5,
        comment: "Nội dung tốt, cần thêm ví dụ thực tế.",
        date: "2025-06-25",
      },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing và SEO",
    description:
      "Chiến lược marketing số hiệu quả, tối ưu hóa công cụ tìm kiếm và quảng cáo trực tuyến",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    instructor: "Phạm Hoàng Dũng",
    rating: 4.6,
    students: 1680,
    price: 699000,
    originalPrice: 999000,
    duration: "8 tuần",
    level: "Cơ bản",
    category: "Marketing",
    badge: "Giảm giá",
    reviewCount: 300,
    lessons: 15,
    longDescription:
      "Khóa học hướng dẫn các kỹ thuật marketing số và SEO để tăng lưu lượng truy cập và doanh số. Phù hợp cho doanh nghiệp và cá nhân.",
    features: ["Học qua case study", "Công cụ miễn phí", "Hỗ trợ cá nhân"],
    curriculum: [
      {
        title: "Giới thiệu Marketing",
        duration: "2 tuần",
        lessons: ["Tổng quan", "Chiến lược cơ bản", "Công cụ SEO"],
      },
      {
        title: "SEO và Quảng cáo",
        duration: "4 tuần",
        lessons: [
          "Tối ưu hóa từ khóa",
          "Quảng cáo Google",
          "Phân tích dữ liệu",
        ],
      },
      {
        title: "Dự án thực tế",
        duration: "2 tuần",
        lessons: ["Triển khai chiến dịch", "Đo lường hiệu quả"],
      },
    ],
    reviews: [
      {
        id: 7,
        name: "Nguyễn Văn Cường",
        avatar: "https://i.pravatar.cc/50?img=7",
        rating: 4.5,
        comment: "Rất thực tế, áp dụng ngay được!",
        date: "2025-06-12",
      },
      {
        id: 8,
        name: "Lê Thị Hồng",
        avatar: "https://i.pravatar.cc/50?img=8",
        rating: 4,
        comment: "Cần thêm bài tập thực hành.",
        date: "2025-06-28",
      },
    ],
  },
  {
    id: "5",
    title: "Phân tích dữ liệu với Power BI",
    description:
      "Học cách thu thập, xử lý và trực quan hóa dữ liệu để đưa ra quyết định kinh doanh thông minh",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    instructor: "Võ Thị Enh",
    rating: 4.5,
    students: 750,
    price: 999000,
    originalPrice: 1499000,
    duration: "14 tuần",
    level: "Trung cấp",
    category: "Dữ liệu",
    badge: "Chứng chỉ",
    reviewCount: 180,
    lessons: 22,
    longDescription:
      "Khóa học tập trung vào Power BI để phân tích dữ liệu, tạo báo cáo và dashboard chuyên nghiệp. Phù hợp cho nhà quản lý và nhà phân tích.",
    features: [
      "Học qua dữ liệu thực tế",
      "Hỗ trợ kỹ thuật",
      "Chứng chỉ công nhận",
    ],
    curriculum: [
      {
        title: "Giới thiệu Power BI",
        duration: "3 tuần",
        lessons: ["Tổng quan", "Cài đặt", "Kết nối dữ liệu"],
      },
      {
        title: "Phân tích dữ liệu",
        duration: "6 tuần",
        lessons: ["Tạo biểu đồ", "DAX cơ bản", "Tùy chỉnh báo cáo"],
      },
      {
        title: "Dự án cuối khóa",
        duration: "5 tuần",
        lessons: ["Xây dựng dashboard", "Trình bày kết quả"],
      },
    ],
    reviews: [
      {
        id: 9,
        name: "Phan Văn Tuấn",
        avatar: "https://i.pravatar.cc/50?img=9",
        rating: 4.5,
        comment: "Khóa học rất thực dụng!",
        date: "2025-06-14",
      },
      {
        id: 10,
        name: "Trần Thị Ngọc",
        avatar: "https://i.pravatar.cc/50?img=10",
        rating: 4,
        comment: "Cần thêm ví dụ phức tạp hơn.",
        date: "2025-06-30",
      },
    ],
  },
  {
    id: "6",
    title: "Lập trình Python nâng cao",
    description:
      "Nâng cao kỹ năng Python với các dự án thực tế và thuật toán nâng cao",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    instructor: "Hoàng Văn Minh",
    rating: 4.7,
    students: 950,
    price: 1099000,
    originalPrice: 1599000,
    duration: "15 tuần",
    level: "Nâng cao",
    category: "Lập trình",
    badge: "Mới",
    reviewCount: 220,
    lessons: 28,
    longDescription:
      "Khóa học tập trung vào lập trình nâng cao với Python, bao gồm xử lý dữ liệu lớn và thuật toán tối ưu.",
    features: ["Dự án thực tế", "Hỗ trợ trực tuyến", "Tài liệu nâng cao"],
    curriculum: [
      {
        title: "Python cơ bản nâng cao",
        duration: "3 tuần",
        lessons: ["Hàm nâng cao", "Xử lý file", "Debugging"],
      },
      {
        title: "Thuật toán và dữ liệu",
        duration: "7 tuần",
        lessons: [
          "Cấu trúc dữ liệu",
          "Thuật toán sắp xếp",
          "Phân tích hiệu suất",
        ],
      },
      {
        title: "Dự án cuối khóa",
        duration: "5 tuần",
        lessons: ["Xây dựng ứng dụng", "Triển khai dự án"],
      },
    ],
    reviews: [
      {
        id: 11,
        name: "Nguyễn Thị Hạnh",
        avatar: "https://i.pravatar.cc/50?img=11",
        rating: 4.5,
        comment: "Rất thú vị và thực tế!",
        date: "2025-07-01",
      },
    ],
  },
  {
    id: "7",
    title: "Quản lý dự án Agile",
    description:
      "Học cách quản lý dự án hiệu quả với phương pháp Agile và Scrum",
    image:
      "https://images.unsplash.com/photo-1541960071727-c531398e7494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdpbGV8ZW58MHx8MHx8fDA%3D",
    instructor: "Trần Văn Đức",
    rating: 4.6,
    students: 1300,
    price: 849000,
    originalPrice: 1199000,
    duration: "9 tuần",
    level: "Trung cấp",
    category: "Quản lý",
    badge: "Phổ biến",
    reviewCount: 280,
    lessons: 18,
    longDescription:
      "Khóa học cung cấp kỹ năng quản lý dự án Agile, từ lập kế hoạch đến triển khai thực tế.",
    features: ["Học qua case study", "Chứng chỉ Agile", "Hỗ trợ nhóm"],
    curriculum: [
      {
        title: "Giới thiệu Agile",
        duration: "2 tuần",
        lessons: ["Tổng quan", "Nguyên lý Agile", "Scrum cơ bản"],
      },
      {
        title: "Triển khai Agile",
        duration: "5 tuần",
        lessons: ["Quản lý sprint", "Backlog", "Đánh giá tiến độ"],
      },
      {
        title: "Dự án thực tế",
        duration: "2 tuần",
        lessons: ["Triển khai dự án", "Phản hồi và cải tiến"],
      },
    ],
    reviews: [
      {
        id: 12,
        name: "Lê Văn Sơn",
        avatar: "https://i.pravatar.cc/50?img=12",
        rating: 4.5,
        comment: "Khóa học rất hữu ích cho quản lý!",
        date: "2025-07-02",
      },
    ],
  },
];
