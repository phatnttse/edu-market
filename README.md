# EduMarket - Sàn Thương Mại Điện Tử Giáo Dục với AI

Một ứng dụng web hiện đại cho sàn thương mại điện tử giáo dục tích hợp AI, được xây dựng với React, TypeScript, Vite, Tailwind CSS và shadcn/ui.

## 🌟 Tính năng chính

### ✅ Đã hoàn thành

- **Trang sản phẩm với sidebar**: Left sidebar filter và product grid/list layouts
- **Mobile responsive**: Filter button với Sheet component trên mobile
- **Component architecture**: Tách thành ProductCard, ProductListItem, ProductFilters, ProductHeader, ProductGrid
- **Real data integration**: Sử dụng data từ courses với Redux state management
- **Wishlist functionality**: Trang yêu thích với WishlistGrid và empty state
- **Header improvements**: Heart icon hiển thị số sản phẩm yêu thích
- **AI Chat Assistant**: AIChatSheet với simulation messages và smart responses
- **Suggestion Sheet**: Random course suggestions với professional UI
- **Mobile navigation**: Improved mobile Sheet với gradient header và card layout
- **Gợi ý thông minh**: SuggestionSheet với random courses từ Redux state
- **Professional UI**: Modern design với gradients, shadows, animations
- **Dark mode support**: Complete theme switching với proper dark mode
- **Responsive design**: Mobile-first design hoạt động mượt mà trên mọi thiết bị

### 🎨 UI/UX Features

- **Modern Component Library**: Sử dụng shadcn/ui với custom styling
- **Gradient Themes**: Consistent blue/purple gradient branding
- **Smooth Animations**: Framer Motion cho transitions và micro-interactions
- **Card-based Layout**: Professional card designs với hover effects
- **Mobile-first**: Responsive breakpoints và mobile-optimized components
- **Interactive Elements**: Hover states, loading indicators, visual feedback

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

- **Node.js**: 20.19.0 trở lên (khuyến nghị LTS version)
- **npm**: 10.0.0+ hoặc **yarn**: 1.22.0+
- **Git**: Để clone repository

### Kiểm tra phiên bản Node.js

```bash
node --version
# Phải >= v20.19.0

npm --version
# Phải >= 10.0.0
```

**Lưu ý**: Nếu bạn đang sử dụng phiên bản Node.js cũ hơn, vui lòng cập nhật qua [Node.js official website](https://nodejs.org/) hoặc sử dụng Node Version Manager (nvm).

### 1. Clone repository

```bash
git clone https://github.com/LerclercDuong/UniBot-WebApp.git
cd edu-ecommerce-ai
```

### 2. Cài đặt dependencies

```bash
# Sử dụng npm (khuyến nghị)
npm install

# Hoặc sử dụng yarn
yarn install
```

**Lưu ý**: Quá trình cài đặt có thể mất 2-5 phút tùy vào tốc độ mạng.

### 3. Chạy development server

```bash
# Development mode với hot reload
npm run dev

# Hoặc với yarn
yarn dev
```

Ứng dụng sẽ khởi chạy tại: **http://localhost:5173**

### 4. Build cho production

```bash
# Tạo build optimized cho production
npm run build

# Hoặc với yarn
yarn build
```

Build output sẽ được tạo trong thư mục `dist/`.

### 5. Preview production build

```bash
# Preview build locally
npm run preview

# Hoặc với yarn
yarn preview
```

Preview server sẽ chạy tại: **http://localhost:4173**

### 6. Lint và format code

```bash
# Kiểm tra linting
npm run lint

# Fix linting issues tự động
npm run lint:fix

# Format code với Prettier
npm run format
```

## 🔧 Scripts có sẵn

| Script               | Mô tả                                  |
| -------------------- | -------------------------------------- |
| `npm run dev`        | Chạy development server với hot reload |
| `npm run build`      | Build production với optimization      |
| `npm run preview`    | Preview production build locally       |
| `npm run lint`       | Kiểm tra code quality với ESLint       |
| `npm run lint:fix`   | Tự động fix linting issues             |
| `npm run format`     | Format code với Prettier               |
| `npm run type-check` | Type checking với TypeScript           |

## 🐛 Troubleshooting

### Node.js version issues

```bash
# Nếu gặp lỗi về Node.js version
node --version  # Kiểm tra version hiện tại

# Cài đặt Node.js 20.19.0+ từ nodejs.org
# Hoặc sử dụng nvm (Node Version Manager)
nvm install 20.19.0
nvm use 20.19.0
```

### Port đã được sử dụng

```bash
# Nếu port 5173 đã được sử dụng
npm run dev -- --port 3000

# Hoặc kill process đang sử dụng port
npx kill-port 5173
```

### Clear cache

```bash
# Clear npm cache
npm cache clean --force

# Xóa node_modules và reinstall
rm -rf node_modules package-lock.json
npm install
```

### Permission issues (Linux/Mac)

```bash
# Fix permission issues
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) ./node_modules
```

## 🏗️ Cấu trúc dự án

```
src/
├── components/             # Các component UI
├── pages/                  # Page components
├── features/               # Redux features
├── hooks/                  # Custom React hooks
├── data/                   # Static data
└── redux/                  # Redux store configuration
└── context/
└── lib/
└── services/
└── routes/
```
