import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "Khóa học", href: "/courses" },
      { label: "Giảng viên", href: "/instructors" },
      { label: "Danh mục", href: "/categories" },
      { label: "Tìm kiếm AI", href: "/ai-search" },
    ],
    support: [
      { label: "Trung tâm trợ giúp", href: "/help" },
      { label: "Liên hệ", href: "/contact" },
      { label: "Hướng dẫn", href: "/guide" },
      { label: "FAQ", href: "/faq" },
    ],
    company: [
      { label: "Về chúng tôi", href: "/about" },
      { label: "Tin tức", href: "/news" },
      { label: "Tuyển dụng", href: "/careers" },
      { label: "Đối tác", href: "/partners" },
    ],
    legal: [
      { label: "Điều khoản", href: "/terms" },
      { label: "Chính sách", href: "/privacy" },
      { label: "Cookie", href: "/cookies" },
      { label: "Bảo mật", href: "/security" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary">EduMarket</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Nền tảng học trực tuyến hàng đầu với công nghệ AI, mang đến trải
              nghiệm học tập cá nhân hóa và hiệu quả nhất cho mọi người.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>support@edumarket.vn</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+84 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Tầng 10, Tòa nhà ABC, Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Nền tảng
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Hỗ trợ
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Công ty
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative">
                Pháp lý
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-primary"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Đăng ký nhận tin
              </h4>
              <p className="text-gray-300">
                Nhận thông tin khóa học mới và ưu đãi đặc biệt
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-200">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} EduMarket. Tất cả quyền được bảo lưu.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-gray-400 text-sm">
              Được xây dựng bởi EduMarket Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
