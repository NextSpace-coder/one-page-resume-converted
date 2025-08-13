# One Page Resume - React TypeScript Template

A sleek, modern one-page resume template built with React, TypeScript, and Vite. Perfect for professionals who want to showcase their skills, experience, and portfolio in a single, elegant page.

## 项目类型

**One Page Resume** - A professional single-page resume website template designed for developers, designers, and creative professionals.

## 主要功能特性

- ✨ **One Page Design** - Everything on a single, scrollable page
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎭 **Smooth Animations** - Beautiful scroll animations with Framer Motion
- 💼 **Professional Sections** - Home, Skills, Services, Resume, Portfolio, Contact
- 📊 **Interactive Elements** - Circular progress bars, skill charts
- 🖼️ **Portfolio Gallery** - Image lightbox with Swiper integration
- 📞 **Contact Form** - Working contact form with Formspree integration
- 🎨 **Modern UI/UX** - Clean, minimal design with smooth transitions
- ⚡ **Fast Performance** - Optimized build with TypeScript and Vite
- 🔗 **Smooth Scrolling** - React Scroll for seamless navigation

## 技术栈

- **前端框架**: React 18+ with TypeScript
- **构建工具**: Vite
- **样式方案**: Custom CSS + Responsive Design
- **动画**: Framer Motion
- **字体**: Poppins (Google Fonts via Fontsource)
- **图标**: Custom icons and images
- **轮播**: Swiper.js
- **滚动**: React Scroll
- **进度条**: React Circular Progressbar
- **弹窗**: ReactJS Popup
- **表单**: Axios + Formspree
- **数据库**: Supabase (预配置)
- **类型检查**: TypeScript

## 项目结构

```
├── src/
│   ├── components/           # 组件目录
│   │   ├── Layout.tsx        # 主布局组件
│   │   ├── Loader.tsx        # 加载动画
│   │   └── Navbar.tsx        # 导航栏
│   ├── pages/                # 页面组件
│   │   ├── index.tsx         # 主页面
│   │   └── sections/         # 页面区块
│   │       ├── Home.tsx      # 首页区块
│   │       ├── Skills.tsx    # 技能展示
│   │       ├── Service.tsx   # 服务介绍
│   │       ├── Resume.tsx    # 简历经历
│   │       ├── Contact.tsx   # 联系方式
│   │       └── portfolio/    # 作品集
│   │           ├── index.tsx
│   │           ├── portfolio.css
│   │           └── items/    # 作品项目
│   │               ├── PortfolioItem1.tsx
│   │               ├── PortfolioItem2.tsx
│   │               ├── PortfolioItem3.tsx
│   │               └── portfolio-item.css
│   ├── data/                 # 数据配置
│   │   ├── home.json         # 首页数据
│   │   ├── skills.json       # 技能数据
│   │   ├── service.json      # 服务数据
│   │   ├── resume.json       # 简历数据
│   │   ├── portfolio.json    # 作品集数据
│   │   ├── contact.json      # 联系数据
│   │   └── navbar.json       # 导航数据
│   ├── app/                  # 应用配置
│   │   ├── index.tsx         # 应用入口
│   │   └── routes.tsx        # 路由配置
│   ├── assets/               # 静态资源
│   │   ├── css/              # 样式文件
│   │   │   ├── style.css     # 主样式
│   │   │   ├── responsive.css # 响应式样式
│   │   │   ├── common.css    # 通用样式
│   │   │   ├── setup.css     # 基础设置
│   │   │   └── sm-clean.css  # 清理样式
│   │   └── images/           # 图片资源
│   │       ├── home/         # 首页图片
│   │       ├── services/     # 服务图标
│   │       └── portfolio/    # 作品图片
│   ├── types/                # 类型定义
│   │   └── portfolio.types.ts
│   ├── utils/                # 工具函数
│   │   └── converter.ts      # 数据转换
│   ├── integrations/         # 第三方集成
│   │   └── supabase/         # Supabase配置
│   └── main.tsx              # 应用入口
├── public/                   # 公共资源
│   └── favicon.ico           # 网站图标
├── index.html                # HTML模板
├── vite.config.ts            # Vite配置
├── tsconfig.json             # TypeScript配置
└── package.json              # 项目依赖
```

## 页面功能

### 🏠 **首页 (Home)**
- 个人介绍和欢迎信息
- 专业头衔和简介
- 社交媒体链接
- 个人照片展示

### 🎯 **技能 (Skills)**
- 技术技能圆形进度条
- 技能分类展示
- 可视化技能等级
- 专业能力概览

### 🛠️ **服务 (Services)**
- 提供的专业服务
- 服务图标和描述
- 服务特色展示

### 📄 **简历 (Resume)**
- 工作经历时间轴
- 教育背景信息
- 专业认证
- 个人成就

### 💼 **作品集 (Portfolio)**
- 项目作品展示
- 图片画廊效果
- 作品详细描述弹窗
- 项目分类筛选

### 📞 **联系我 (Contact)**
- 联系表单
- 个人联系信息
- 地址和联系方式
- Formspree表单集成

## 安装和使用

### 环境要求

- Node.js 16+
- npm 或 pnpm
- TypeScript支持的编辑器

### 安装步骤

```bash
# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm run dev
# 或
pnpm run dev

# 构建生产版本
npm run build
# 或
pnpm run build

# 预览构建结果
npm run preview
# 或
pnpm run preview
```

## 配置说明

### 内容定制

所有内容都可以通过修改 `src/data/` 目录下的 JSON 文件来定制：

1. **首页信息** - 修改 `home.json`
2. **技能数据** - 修改 `skills.json`
3. **服务内容** - 修改 `service.json`
4. **简历信息** - 修改 `resume.json`
5. **作品集** - 修改 `portfolio.json`
6. **联系信息** - 修改 `contact.json`
7. **导航菜单** - 修改 `navbar.json`

### 图片更新

替换 `src/assets/images/` 目录下的相应图片：
- 个人照片: `home/home.jpg`
- 服务图标: `services/service*.png`
- 作品图片: `portfolio/portfolio*.jpg`

### 表单配置

在 `contact.json` 中更新 `formspreeEndpoint` 为你的 Formspree 端点。

### 颜色主题

在 `src/assets/css/style.css` 中修改 CSS 变量来定制颜色主题。

### Supabase 集成

项目已预配置 Supabase 支持，如需使用请：

1. 在 `.env` 文件中添加环境变量：
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. 根据需求修改 `src/integrations/supabase/types.ts` 中的数据库类型定义

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 特色功能

- 🎨 **单页设计** - 所有内容在一个页面中
- ⚡ **快速加载** - Vite优化构建
- 🔍 **SEO优化** - 良好的搜索引擎优化
- 🎭 **平滑动画** - Framer Motion动画效果
- 📱 **移动优先** - 响应式设计
- 🛠️ **易于定制** - JSON配置文件
- 🔧 **现代工具链** - TypeScript + Vite

## 自定义指南

### 添加新技能

在 `skills.json` 中添加新的技能项：

```json
{
  "name": "新技能",
  "percentage": 85,
  "color": "#FF6B6B"
}
```

### 添加作品项目

1. 在 `portfolio.json` 中添加项目数据
2. 在 `portfolio/items/` 创建对应的组件文件
3. 添加项目图片到 `assets/images/portfolio/`

### 修改联系表单

1. 注册 Formspree 账号获取端点
2. 更新 `contact.json` 中的 `formspreeEndpoint`
3. 根据需要修改表单字段

## 部署说明

### 静态部署

构建后的文件可以部署到任何静态托管服务：
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

### 构建命令

```bash
npm run build
```

生成的文件在 `dist/` 目录中。

## 注意事项

- 确保所有图片路径正确
- 表单提交需要有效的 Formspree 端点
- 建议定期更新依赖包
- 测试所有设备上的响应式效果

## 技术支持

如遇到问题，请检查：
1. Node.js 版本是否满足要求
2. 依赖包是否完全安装
3. TypeScript 编译是否有错误
4. 图片和数据文件路径是否正确
5. Formspree 端点是否有效