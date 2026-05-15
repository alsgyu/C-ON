import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import { PAGE_META, breadcrumbSchema, SITE_URL_BASE } from "../../lib/metadata";

const meta = PAGE_META["ranking"];
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
  { name: "韩国排行榜", url: SITE_URL_BASE + "/ranking/" },
]);

export default function RankingPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "排行榜" }]} schema={bcSchema} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ background: "linear-gradient(135deg, #e8315b, #ff9500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          🏆 韩国热销排行榜 — 每周实时更新
        </h1>
        <p className="text-gray-500 mb-10 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          汇集Olive Young全品类热销数据与韩国时尚品牌人气排名，购物前必看的最权威韩国榜单。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Olive Young Card */}
          <Link href="/ranking/olive-young"
            style={{ background: "linear-gradient(135deg, #fff8f9, #fdf0f3)", border: "1px solid rgba(232,49,91,0.2)", borderRadius: 20, boxShadow: "0 4px 20px rgba(232,49,91,0.1)" }}
            className="block p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="text-5xl mb-4">🛍️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>Olive Young热销榜</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              护肤、彩妆、身体护理全品类实时销量排行，帮您找到Olive Young最值得购买的韩国美妆产品。
            </p>
            <div className="flex flex-wrap gap-2">
              {["护肤精华", "防晒霜", "彩妆底妆", "身体护理"].map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
            <div className="mt-5 text-sm font-bold text-[#e8315b] flex items-center gap-1">
              查看完整榜单 →
            </div>
          </Link>

          {/* Fashion Brands Card */}
          <Link href="/ranking/fashion-brands"
            style={{ background: "linear-gradient(135deg, #f8f7ff, #f0eeff)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: 20, boxShadow: "0 4px 20px rgba(108,99,255,0.1)" }}
            className="block p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="text-5xl mb-4">👑</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>韩国时尚品牌榜</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              2024年韩国最受欢迎时尚品牌排行榜，涵盖Musinsa、W Concept等主流平台的热销独立设计师品牌。
            </p>
            <div className="flex flex-wrap gap-2">
              {["本土设计师", "Musinsa", "W Concept", "独立品牌"].map(tag => (
                <span key={tag} style={{ background: "#f0eeff", color: "#6c63ff", border: "1px solid rgba(108,99,255,0.2)", display: "inline-block", padding: "2px 10px", borderRadius: 20, fontSize: 12 }}>{tag}</span>
              ))}
            </div>
            <div className="mt-5 text-sm font-bold text-[#6c63ff] flex items-center gap-1">
              查看完整榜单 →
            </div>
          </Link>
        </div>

        {/* SEO text */}
        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            为什么要参考韩国热销排行榜购物？
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              在韩国购物，面对琳琅满目的商品往往容易踩雷。参考<Link href="/ranking/olive-young" className="text-[#e8315b] hover:underline">Olive Young热销榜</Link>
              可以帮助您快速锁定真正热销的高口碑商品，避免被营销噱头误导。
            </p>
            <p>
              同理，<Link href="/ranking/fashion-brands" className="text-[#e8315b] hover:underline">韩国时尚品牌排行榜</Link>
              通过综合多平台销量数据与用户评价，为您筛选出2024年最值得关注的韩国本土时尚品牌。
              结合我们的<Link href="/korea-trends/fashion" className="text-[#e8315b] hover:underline">韩系穿搭风格指南</Link>，
              让您的每一次购物都物超所值。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
