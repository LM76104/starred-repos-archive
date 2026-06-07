# 创造与魔法攻略百科 - 技术架构文档

## 1. 项目架构

```
┌─────────────────────────────────────────────────────────┐
│                      前端应用                            │
│  React 18 + TypeScript + Vite + Tailwind CSS           │
├─────────────────────────────────────────────────────────┤
│  页面路由 (React Router DOM)                            │
│  ├── / (首页)                                          │
│  ├── /map (地图资源)                                   │
│  ├── /feed (生物饲料)                                  │
│  ├── /recipes (食谱大全)                               │
│  ├── /creatures (生物图鉴)                             │
│  ├── /plants (植物图鉴)                                │
│  └── /versions/:id (版本详情)                          │
├─────────────────────────────────────────────────────────┤
│  状态管理 (Zustand)                                     │
│  ├── useAppStore - 全局状态                             │
│  ├── useSearchStore - 搜索筛选状态                      │
│  └── useFavoriteStore - 收藏状态                        │
└─────────────────────────────────────────────────────────┘
```

## 2. 技术选型

| 类别 | 技术 | 版本 |
|-----|------|-----|
| 框架 | React | 18.x |
| 语言 | TypeScript | 5.x |
| 构建 | Vite | 5.x |
| 样式 | Tailwind CSS | 3.x |
| 路由 | React Router DOM | 6.x |
| 状态 | Zustand | 4.x |
| 动画 | Framer Motion | 11.x |
| 图标 | Lucide React | 最新 |

## 3. 目录结构

```
src/
├── components/          # 公共组件
│   ├── layout/         # 布局组件 (Header, Footer, Sidebar)
│   ├── ui/             # UI基础组件 (Button, Card, Modal)
│   └── common/         # 通用业务组件
├── pages/              # 页面组件
│   ├── Home/           # 首页
│   ├── Map/            # 地图资源
│   ├── Feed/           # 生物饲料
│   ├── Recipes/        # 食谱大全
│   ├── Creatures/      # 生物图鉴
│   ├── Plants/         # 植物图鉴
│   └── Versions/       # 版本历史
├── hooks/              # 自定义Hooks
├── stores/            # Zustand状态库
├── data/              # 静态数据
├── types/             # TypeScript类型定义
├── utils/             # 工具函数
└── styles/            # 全局样式
```

## 4. 核心组件设计

### 4.1 布局组件

- **Header**: 毛玻璃导航栏，包含Logo、主导航、搜索入口
- **Footer**: 版权信息、数据来源链接
- **PageWrapper**: 页面容器，带入场动画

### 4.2 UI组件

- **MagicCard**: 玻璃拟态卡片，支持hover动效
- **SearchBar**: 搜索组件，支持实时筛选
- **FilterTabs**: 筛选标签组
- **ResourceMarker**: 地图坐标标记
- **VersionTimeline**: 版本时间轴
- **DetailModal**: 详情弹窗

### 4.3 动画规范

```css
/* 基础过渡 */
--transition-fast: 150ms ease-out;
--transition-normal: 300ms ease-out;
--transition-slow: 500ms ease-out;

/* 弹性动画 */
--transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* 滚动视差 */
--parallax-speed: 0.5;
```

## 5. 响应式策略

- **桌面端**: 1280px+ 完整布局
- **平板端**: 768px-1279px 双栏布局
- **移动端**: <768px 单栏布局，底部导航

## 6. 数据模拟

使用本地JSON文件模拟游戏数据，包含：
- 10+ 张地图资源数据
- 50+ 采集物坐标
- 30+ 饲料配方
- 40+ 食谱配方
- 60+ 生物数据
- 50+ 植物数据
- 20+ 版本历史

---

## 7. 性能优化

- 图片懒加载
- 组件按需渲染
- CSS变量主题切换
- 动画GPU加速 (transform, opacity)
