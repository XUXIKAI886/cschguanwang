# 呈尚策划官网

专业的外卖双平台代运营服务商官网，基于 Next.js 14 + TypeScript + Tailwind CSS 构建。

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS V3
- **UI 组件**: shadcn/ui
- **图标**: Lucide React
- **部署**: GitHub Pages

## 📋 功能特性

### 🏠 首页
- Hero 区域展示核心价值主张
- 15项核心服务矩阵展示
- 可度量的成功指标看板
- 客户案例和社会证明
- 运营知识中心预览
- 强引导的 CTA 区域

### 🛠️ 服务页面
- **双平台代运营**: 饿了么 & 美团协同运营
- **视觉与品牌**: 门店装修、菜品拍摄、品牌设计
- **数据与增长**: 数据分析、竞品监控、ROI优化

### 📞 联系我们
- 免费门店诊断表单
- 多种联系方式
- 服务承诺和流程说明
- 表单验证和提交反馈

### 👥 关于我们
- 公司发展历程
- 团队价值观
- 资质认证展示
- 核心团队介绍

### 🔧 SEO 优化
- 完整的 meta 标签配置
- sitemap.xml 自动生成
- robots.txt 配置
- 结构化数据支持

## 🎯 核心设计理念

### 转化驱动
- 3秒内传达价值主张
- 多层次CTA引导用户行动
- 表单转化率优化设计
- 社会证明增强信任

### 专业形象
- 统一的品牌视觉系统
- 专业的数据指标展示
- 权威认证和案例证明
- 清晰的服务流程说明

### 用户体验
- 响应式设计适配所有设备
- 快速加载和流畅交互
- 清晰的信息架构
- 无障碍访问支持

## 📊 性能目标

- **首页 LCP**: ≤2.5s
- **CLS**: ≤0.1
- **可访问性评分**: ≥90
- **SEO评分**: ≥90

## 🚦 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 导出静态文件
```bash
npm run export
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx          # 首页
│   ├── services/         # 服务页面
│   ├── contact/          # 联系我们
│   ├── about/            # 关于我们
│   ├── sitemap.ts        # 站点地图
│   └── robots.txt        # 爬虫规则
├── components/            # 组件目录
│   ├── ui/               # 基础UI组件
│   ├── layout/           # 布局组件
│   └── sections/         # 页面区块组件
├── lib/                  # 工具库
└── .github/workflows/    # GitHub Actions
```

## 🔧 部署说明

本项目配置了 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤
1. 推送代码到 main 分支
2. GitHub Actions 自动触发构建
3. 构建完成后自动部署到 gh-pages 分支
4. 网站自动更新

### 环境要求
- Node.js 18+
- GitHub Pages 已启用

## 📝 内容更新指南

### 更新公司信息
修改 `components/layout/footer.tsx` 和 `app/about/page.tsx`

### 更新服务内容
修改 `app/services/` 目录下的相关页面

### 更新案例数据
修改 `components/sections/cases-section.tsx`

### 更新联系方式
修改 `components/layout/header.tsx` 和 `app/contact/page.tsx`

## 📱 响应式适配

- **移动端**: 320px - 768px
- **平板**: 768px - 1024px  
- **桌面端**: 1024px+

所有组件都经过响应式适配，确保在不同设备上的最佳体验。

## 🎨 设计规范

### 色彩系统
- **主色**: 蓝色系 (Primary)
- **辅助色**: 紫色、绿色、橙色
- **中性色**: 灰色系

### 字体规范
- **中文**: 系统默认字体
- **英文**: Inter 字体
- **代码**: Fira Code

### 间距系统
基于 4px 网格系统，使用 Tailwind CSS 的间距单位。

## 🔍 SEO 策略

### 目标关键词
- 外卖代运营
- 饿了么代运营
- 美团代运营
- 双平台代运营
- 外卜爆单
- 呈尚策划

### 页面优化
- 每个页面独立的 meta 标签
- 语义化 HTML 结构
- 图片 alt 属性完整
- 内链结构清晰

## 📞 技术支持

如有技术问题或需要定制开发，请联系开发团队。

## 📄 许可证

© 2025 呈尚策划. 保留所有权利.
