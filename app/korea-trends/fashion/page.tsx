import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import TrendCard from "../../../components/TrendCard";
import { PAGE_META, breadcrumbSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["fashion"];
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title, description: meta.description,
    url: meta.canonical, locale: "zh_CN",
    images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }],
  },
};

const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "韩国潮流", url: SITE_URL_BASE + "/korea-trends/" },
  { name: "时尚穿搭", url: SITE_URL_BASE + "/korea-trends/fashion/" },
]);

const fashionStyles = [
  { name: "简约数码感", emoji: "🤍", desc: "以白色、米色、浅灰为主色调，极简剪裁 + 高级面料，是首尔办公室女性最爱的日常风格。" },
  { name: "运动机能风", emoji: "⚡", desc: "结合运动元素与日常穿搭，字母卫衣、宽松长裤、厚底战靴，舒适又时髦的街头必备。" },
  { name: "复古Y2K", emoji: "💜", desc: "以2000年代流行元素为灵感，低腰裤、格子图案、蝴蝶结配件，韩国年轻世代最爱的nostalgic风格。" },
  { name: "学院文青风", emoji: "📚", desc: "格子西装、百褶裙、牛津鞋，知性与时尚并存，深受韩国大学生喜爱的校园穿搭风格。" },
  { name: "韩系男友风", emoji: "🧥", desc: "超大码西装外套叠穿基础款内搭，帅气中透出慵懒感，是近年最受中国女孩追捧的韩国穿搭。" },
];

const fashionCards = [
  {
    title: "Musinsa 2024秋冬必买：韩国本土设计师品牌精选",
    description: "从Musinsa年度报告中精选10套秋冬穿搭lookbook，包含完整单品信息与价格参考，助您轻松复刻韩国时尚达人造型。",
    tag: "穿搭指南",
    href: "/ranking/fashion-brands",
    emoji: "🛒",
    isHot: true,
    date: "2024-11-30",
  },
  {
    title: "韩系穿搭教程2024：5步打造完美OOTD",
    description: "从选色系、定风格、找主角单品、搭配细节配件到整体造型协调，5个步骤手把手教你打造属于自己的韩系日常穿搭。",
    tag: "穿搭教程",
    href: "/korea-trends/fashion",
    emoji: "✨",
    isHot: false,
    date: "2024-11-22",
  },
  {
    title: "韩国欧巴穿搭风格：5种造型解析与复刻指南",
    description: "分析韩国男明星IU男友、BTS成员等人气欧巴的日常穿搭，提取可复刻的核心单品，附带中国平替品牌推荐。",
    tag: "男士穿搭",
    href: "/korea-trends/fashion",
    emoji: "👨‍🦱",
    isHot: false,
    date: "2024-11-15",
  },
];

export default function FashionPage() {
  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "韩国潮流", href: "/korea-trends" },
          { label: "时尚穿搭" },
        ]}
        schema={bcSchema}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{
            background: "linear-gradient(135deg, #6c63ff, #e8315b)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif",
          }}
        >
          👗 韩国时尚品牌 — 韩系穿搭风格完全指南2024
        </h1>
        <p className="text-gray-500 mb-10 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          从首尔街头实录到韩国明星同款解析，带你深入了解2024年最火韩系穿搭风格与时尚品牌，打造专属你的韩国风格。
        </p>

        {/* H2 - 5大风格 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-[#6c63ff] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            2024年韩国5大主流穿搭风格解析
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fashionStyles.map((s) => (
              <div
                key={s.name}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 14, boxShadow: "0 2px 10px rgba(232,49,91,0.05)" }}
                className="p-5 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{s.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-2">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2 - 穿搭文章 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-[#6c63ff] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            最新韩系穿搭教程与OOTD推荐
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {fashionCards.map((c) => <TrendCard key={c.title} {...c} />)}
          </div>
        </section>

        {/* H2 - 按季节 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-[#6c63ff] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩国穿搭风格按季节指南
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { season: "春季穿搭", emoji: "🌸", tips: "薄外套+基础内搭，粉彩色系为主，首尔春天多风注意保暖" },
              { season: "夏季穿搭", emoji: "☀️", tips: "轻薄棉麻、防晒外套、短裤+凉鞋，注意韩国夏天湿热" },
              { season: "秋季穿搭", emoji: "🍂", tips: "毛呢大衣、格纹围巾、靴子，最适合打造文艺复古层叠造型" },
              { season: "冬季穿搭", emoji: "❄️", tips: "大廓形羽绒服、针织套装、厚底鞋，简约中透出高级感" },
            ].map((s) => (
              <div
                key={s.season}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 14 }}
                className="p-4 text-center hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{s.emoji}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{s.season}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.tips}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2 - SEO content */}
        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            为什么韩国时尚如此受中国年轻人青睐？
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩国时尚之所以持续风靡中国，源于其独特的「亲民高级感」——韩系穿搭善于用平价单品搭出大牌质感，
              这与中国消费者注重性价比的消费观念高度契合。
            </p>
            <p>
              此外，K-pop与韩剧长期对中国市场的渗透，让数以百万计的中国年轻人通过偶像的穿搭认识并爱上了韩国时尚。
              BTS、BLACKPINK等K-pop组合成员的每次亮相，都能引发追款热潮。
            </p>
            <p>
              想要一步到位找到最适合你的韩国时尚品牌？快来查看我们的
              <Link href="/ranking/fashion-brands" className="text-[#e8315b] hover:underline">韩国时尚品牌排行榜</Link>，
              或者前往<Link href="/community" className="text-[#e8315b] hover:underline">韩流社区</Link>与同好交流穿搭心得！
            </p>
          </div>
        </section>

        {/* H2 - Internal links */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            探索更多韩国时尚内容
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "韩国美妆护肤", href: "/korea-trends/beauty", desc: "妆发穿搭一体化造型" },
              { label: "韩国时尚品牌榜", href: "/ranking/fashion-brands", desc: "必关注本地设计师品牌" },
              { label: "韩流热门话题", href: "/community/viral", desc: "韩国时尚圈最新动态" },
            ].map((l) => (
              <Link
                key={l.href} href={l.href}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 12 }}
                className="flex items-center justify-between p-4 hover:shadow-md hover:border-[#6c63ff]/30 transition-all"
              >
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{l.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{l.desc}</div>
                </div>
                <span className="text-[#6c63ff] text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
