import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { PAGE_META, breadcrumbSchema, SITE_URL_BASE } from "../../lib/metadata";

const meta = PAGE_META["community"];
export const metadata: Metadata = {
  title: meta.title, description: meta.description,
  keywords: meta.keywords, alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, locale: "zh_CN", images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }] },
};
const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "韩流社区", url: SITE_URL_BASE + "/community/" },
]);

const categories = [
  { label: "韩国搞笑帖子", href: "/community/funny", emoji: "😂", desc: "综艺笑点·艺人神反应·搞笑日常", count: "1,248篇" },
  { label: "韩国梗图大全", href: "/community/memes", emoji: "🎭", desc: "最新梗图·网络流行语·表情包", count: "856篇" },
  { label: "热门韩流话题", href: "/community/viral", emoji: "🔥", desc: "实时热搜·爆款推荐·社区讨论", count: "2,341篇" },
];

export default function CommunityPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "韩流社区" }]} schema={bcSchema} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ background: "linear-gradient(135deg, #ff9500, #e8315b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          🎉 韩流社区 — 搞笑视频、梗图与热门话题
        </h1>
        <p className="text-gray-500 mb-10 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          韩流粉丝的专属聚集地，分享韩国搞笑视频、梗图、热门话题，与万名同好一同探索韩国文化的趣味面。
        </p>

        {/* Category Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            社区分类
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href} href={cat.href}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 20, boxShadow: "0 4px 16px rgba(232,49,91,0.07)" }}
                className="block p-8 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
              >
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>{cat.label}</h3>
                <p className="text-gray-500 text-sm mb-3">{cat.desc}</p>
                <span className="text-xs bg-[#fdf0f3] text-[#e8315b] px-3 py-1 rounded-full font-medium">{cat.count}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section style={{ background: "linear-gradient(135deg, #1a1a2e, #2d1a3e)", borderRadius: 20 }} className="p-8 mb-10">
          <h2 className="text-xl font-bold text-white mb-6 text-center" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩流社区数据
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "80万+", label: "注册用户" },
              { value: "4,445", label: "帖子总数" },
              { value: "每天", label: "内容更新" },
              { value: "98%", label: "好评率" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ background: "linear-gradient(135deg, #e8315b, #ff9500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} className="text-2xl font-bold">{s.value}</div>
                <div className="text-gray-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO content */}
        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            关于韩流100社区
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩流100社区是专为中文用户打造的韩国文化交流圈，汇聚了对<Link href="/community/funny" className="text-[#e8315b] hover:underline">韩国搞笑内容</Link>、
              <Link href="/community/memes" className="text-[#e8315b] hover:underline">韩国梗图文化</Link>以及
              <Link href="/community/viral" className="text-[#e8315b] hover:underline">韩流热门话题</Link>感兴趣的数十万活跃用户。
            </p>
            <p>
              在这里，您可以第一时间了解韩国网络上的最新流行内容，参与中文韩流圈的讨论互动。
              无论是Running Man最新一集的神笑点，还是韩国Twitter上疯传的梗图，
              韩流100社区都会在第一时间为您带来最全面的中文解说。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
