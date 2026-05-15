import type { Metadata } from "next";
import Link from "next/link";
import TrendCard from "../components/TrendCard";
import { PAGE_META, websiteSchema, SITE_URL_BASE } from "../lib/metadata";

const meta = PAGE_META["home"];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    locale: "zh_CN",
    images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }],
  },
};

const schema = websiteSchema();

const trendCards = [
  {
    title: "2024韩国秋冬美妆大趋势：纯欲妆容席卷全亚洲",
    description: "今年韩国美妆圈最热趋势非「纯欲妆」莫属，玻璃肌底妆搭配奶油唇色，打造韩国女团标志性造型，完整教程与产品推荐在内。",
    tag: "韩国美妆",
    href: "/korea-trends/beauty",
    emoji: "💄",
    isHot: true,
    date: "2024-12-01",
  },
  {
    title: "韩系穿搭风格指南：从首尔街头到日常穿搭",
    description: "解析2024年最受中国女孩追捧的韩系穿搭风格，包含纯欲风、学院风、Y2K复古风等五大方向，附带具体单品与品牌推荐。",
    tag: "韩国时尚",
    href: "/korea-trends/fashion",
    emoji: "👗",
    isHot: true,
    date: "2024-11-28",
  },
  {
    title: "Olive Young 2024年度必买清单TOP 30",
    description: "汇集Olive Young全年热销榜单，从护肤精华、防晒霜到彩妆底妆，精选30款口碑最佳、性价比最高的韩国美妆产品。",
    tag: "Olive Young",
    href: "/ranking/olive-young",
    emoji: "🛍️",
    isHot: false,
    date: "2024-11-25",
  },
  {
    title: "韩国时尚品牌大赏：Musinsa & W Concept完全解析",
    description: "深度解析韩国本土最受欢迎的时尚电商平台，推荐10大必关注韩国本地设计师品牌，带你玩转韩国当地时尚。",
    tag: "韩国品牌",
    href: "/ranking/fashion-brands",
    emoji: "👑",
    isHot: false,
    date: "2024-11-20",
  },
  {
    title: "韩国综艺搞笑瞬间合集：笑到肚子疼！",
    description: "精选Running Man、无限挑战、1泊2日等韩国综艺最搞笑名场面，配合中文解说让你了解每个梗背后的文化背景。",
    tag: "搞笑内容",
    href: "/community/funny",
    emoji: "😂",
    isHot: false,
    date: "2024-11-15",
  },
  {
    title: "2024年最火韩国网络梗图合集",
    description: "收录2024年度在韩国各大社交平台疯传的梗图与网络流行语，带你深入了解韩国网络文化，玩转韩国年轻人的幽默语境。",
    tag: "韩国梗图",
    href: "/community/memes",
    emoji: "🎭",
    isHot: false,
    date: "2024-11-10",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #e8315b 0%, #ff6b8a 40%, #ff9500 100%)",
          minHeight: 480,
        }}
        className="relative overflow-hidden flex items-center"
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full mb-5 font-medium">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              每日更新韩国最新潮流
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif", textShadow: "0 2px 16px rgba(0,0,0,0.2)" }}
            >
              韩国潮流·美妆·时尚
              <br />
              <span className="text-yellow-200">第一资讯平台</span>
            </h1>
            <p
              className="text-white/90 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
            >
              汇聚2024年最新韩国美妆排行榜、时尚穿搭推荐、Olive Young购买攻略，
              助您紧跟首尔最前沿潮流动态。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ranking/olive-young"
                className="bg-white text-[#e8315b] font-bold px-6 py-3 rounded-xl hover:bg-yellow-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                🛍️ Olive Young热销榜
              </Link>
              <Link
                href="/korea-trends/beauty"
                className="bg-white/20 backdrop-blur-sm text-white font-semibold border-2 border-white/40 px-6 py-3 rounded-xl hover:bg-white/30 transition-all text-sm"
              >
                💄 韩国美妆推荐
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            right: -40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 180,
            opacity: 0.08,
            userSelect: "none",
          }}
          className="hidden md:block"
        >
          🇰🇷
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#1a1a2e" }} className="py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-center">
            {[
              { label: "每日更新内容", value: "50+" },
              { label: "韩国美妆评测", value: "1,200+" },
              { label: "中文用户", value: "80万+" },
              { label: "合作韩国品牌", value: "200+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #e8315b, #ff9500)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="text-2xl font-bold"
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Trending Now */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
              >
                🔥 最新韩国潮流资讯
              </h2>
              <p className="text-gray-500 text-sm mt-1">每日更新韩国美妆、时尚、文化热点</p>
            </div>
            <Link
              href="/korea-trends"
              className="text-sm text-[#e8315b] font-medium hover:underline hidden md:block"
            >
              查看全部韩国潮流 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trendCards.map((card) => (
              <TrendCard key={card.href} {...card} />
            ))}
          </div>
        </section>

        {/* Category Quick Links */}
        <section className="mb-14">
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
          >
            📂 内容分类导航
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "韩国美妆推荐", href: "/korea-trends/beauty", emoji: "💄", desc: "护肤·彩妆·攻略" },
              { label: "韩国时尚穿搭", href: "/korea-trends/fashion", emoji: "👗", desc: "穿搭·品牌·风格" },
              { label: "Olive Young热销", href: "/ranking/olive-young", emoji: "🛍️", desc: "必买·榜单·攻略" },
              { label: "韩流社区", href: "/community", emoji: "🎉", desc: "搞笑·梗图·话题" },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                style={{
                  background: "white",
                  border: "1px solid #f0e4e8",
                  borderRadius: 14,
                  boxShadow: "0 2px 8px rgba(232,49,91,0.06)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                className="flex flex-col items-center text-center p-5 hover:shadow-lg hover:-translate-y-1 hover:border-[#e8315b]/30 transition-all"
              >
                <span className="text-3xl mb-2">{cat.emoji}</span>
                <span className="font-bold text-gray-800 text-sm mb-1">{cat.label}</span>
                <span className="text-xs text-gray-400">{cat.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO Content Block */}
        <section
          style={{
            background: "white",
            border: "1px solid #f0e4e8",
            borderRadius: 16,
            boxShadow: "0 2px 12px rgba(232,49,91,0.06)",
          }}
          className="p-8 mb-14"
        >
          <h2
            className="text-xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
          >
            关于韩流100 — 您的韩国潮流美妆时尚第一站
          </h2>
          <div
            className="text-gray-600 text-sm leading-loose space-y-3"
            style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
          >
            <p>
              韩流100是专为中文用户打造的<strong>韩国潮流资讯平台</strong>，每日更新来自首尔的最新美妆、时尚和文化资讯。
              无论您想了解<Link href="/korea-trends/beauty" className="text-[#e8315b] hover:underline">韩国美妆护肤品</Link>的最新趋势，
              还是想获取<Link href="/korea-trends/fashion" className="text-[#e8315b] hover:underline">韩系穿搭风格</Link>的详细指南，
              韩流100都能为您提供最权威、最全面的一手资讯。
            </p>
            <p>
              我们的<Link href="/ranking/olive-young" className="text-[#e8315b] hover:underline">Olive Young热销榜</Link>实时追踪韩国最大美妆零售商的销量数据，
              帮助您在购物前做出最明智的选择。同时，我们的<Link href="/community" className="text-[#e8315b] hover:underline">韩流社区</Link>汇聚了
              数十万韩国文化爱好者，分享搞笑内容、梗图和热门话题。
            </p>
            <p>
              作为百度和谷歌双重SEO优化的中文韩国资讯平台，韩流100致力于为中国用户与韩国文化之间搭建最便捷的桥梁。
              2024年韩国最新潮流动态，尽在韩流100！
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
