import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import TrendCard from "../../components/TrendCard";
import { PAGE_META, breadcrumbSchema, SITE_URL_BASE } from "../../lib/metadata";

const meta = PAGE_META["korea-trends"];

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

const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "韩国潮流", url: SITE_URL_BASE + "/korea-trends/" },
]);

const beautyCards = [
  {
    title: "韩国美妆2024秋冬大趋势：纯欲妆容如何打造",
    description: "从底妆、腮红到口红，带你一步步复刻韩国女团成员的标志性纯欲妆效，附完整产品清单与平价替代推荐。",
    tag: "美妆教程",
    href: "/korea-trends/beauty",
    emoji: "💄",
    isHot: true,
    date: "2024-12-01",
  },
  {
    title: "2024韩国护肤品排行榜TOP 15：必买精华盘点",
    description: "综合小红书评测、Olive Young销量数据以及韩国美妆博主推荐，精选2024年最值得购买的15款韩国护肤精华。",
    tag: "护肤推荐",
    href: "/korea-trends/beauty",
    emoji: "🧴",
    isHot: false,
    date: "2024-11-28",
  },
  {
    title: "Olive Young与CJ올리브영购买完全攻略",
    description: "实体店与线上购买流程详解，包含会员积分机制、折扣活动时间节点以及最划算的跨境购策略，省钱必看。",
    tag: "购买攻略",
    href: "/korea-trends/beauty",
    emoji: "🛍️",
    isHot: false,
    date: "2024-11-22",
  },
];

const fashionCards = [
  {
    title: "首尔街头时尚实录：2024秋冬最IN韩系穿搭",
    description: "直击首尔东大门、弘大、清潭洞街头，记录韩国年轻人的真实日常穿搭，附带单品拆解与国内替代品推荐。",
    tag: "街头时尚",
    href: "/korea-trends/fashion",
    emoji: "👟",
    isHot: true,
    date: "2024-11-30",
  },
  {
    title: "韩国欧巴穿搭风格解析：5种必学OOTD",
    description: "分析韩国男明星与街头型男最常见的穿搭风格，包括简约休闲、运动机能、复古文青等5种方向，附完整单品建议。",
    tag: "男士穿搭",
    href: "/korea-trends/fashion",
    emoji: "🧥",
    isHot: false,
    date: "2024-11-25",
  },
  {
    title: "韩国时尚品牌榜：10个必关注本地设计师品牌",
    description: "超越耳熟能详的大牌，深入介绍10个在韩国本地拥有超高人气的独立设计师品牌，带你发现更多韩国时尚宝藏。",
    tag: "品牌推荐",
    href: "/ranking/fashion-brands",
    emoji: "✨",
    isHot: false,
    date: "2024-11-18",
  },
];

export default function KoreaTrendsPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "韩国潮流", href: "/korea-trends" }]}
        schema={bcSchema}
      />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #e8315b 100%)",
          minHeight: 280,
        }}
        className="flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1
            className="text-4xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
          >
            🇰🇷 韩国潮流资讯
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            追踪首尔最前沿的美妆护肤与时尚穿搭动态，为中文用户提供最权威的韩国潮流内容。
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              href="/korea-trends/beauty"
              className="bg-white text-[#e8315b] font-bold px-5 py-2.5 rounded-xl hover:bg-pink-50 transition shadow-md text-sm"
            >
              💄 韩国美妆护肤
            </Link>
            <Link
              href="/korea-trends/fashion"
              className="bg-white/20 border-2 border-white/40 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-white/30 transition text-sm"
            >
              👗 韩系时尚穿搭
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* 美妆 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              💄 韩国美妆护肤推荐
            </h2>
            <Link href="/korea-trends/beauty" className="text-sm text-[#e8315b] hover:underline">
              查看全部美妆内容 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {beautyCards.map((c) => <TrendCard key={c.title} {...c} />)}
          </div>
        </section>

        {/* 时尚 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              👗 韩国时尚穿搭指南
            </h2>
            <Link href="/korea-trends/fashion" className="text-sm text-[#e8315b] hover:underline">
              查看全部时尚内容 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {fashionCards.map((c) => <TrendCard key={c.title} {...c} />)}
          </div>
        </section>

        {/* SEO Content */}
        <section
          style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16, boxShadow: "0 2px 12px rgba(232,49,91,0.06)" }}
          className="p-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩国潮流资讯 — 为中文用户量身打造
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩流100的「韩国潮流」板块是专为对韩国文化感兴趣的中文用户打造的内容中心，
              涵盖<Link href="/korea-trends/beauty" className="text-[#e8315b] hover:underline">韩国美妆护肤品推荐</Link>、
              <Link href="/korea-trends/fashion" className="text-[#e8315b] hover:underline">韩系时尚穿搭教程</Link>以及
              <Link href="/ranking/olive-young" className="text-[#e8315b] hover:underline">Olive Young热销榜单</Link>等核心内容。
            </p>
            <p>
              2024年，韩国潮流继续以席卷全球的姿态影响着亚洲时尚版图。从K-beauty护肤理念
              到K-fashion的街头美学，韩国潮流已经成为全球时尚领域不可忽视的重要力量。
              我们的专业团队每天深入首尔各大潮流地标，为您带来最新最鲜活的韩国时尚资讯。
            </p>
            <p>
              无论您是第一次接触韩国文化的新手，还是资深韩流爱好者，韩流100都能为您提供
              从入门到深度的完整内容体系。现在就探索我们的
              <Link href="/community" className="text-[#e8315b] hover:underline">韩流社区</Link>，
              与数十万同好一同讨论韩国潮流文化！
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
