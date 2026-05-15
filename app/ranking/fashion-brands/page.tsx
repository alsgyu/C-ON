import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import RankingList from "../../../components/RankingList";
import { PAGE_META, breadcrumbSchema, itemListSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["fashion-brands"];
export const metadata: Metadata = {
  title: meta.title, description: meta.description,
  keywords: meta.keywords, alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, locale: "zh_CN", images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }] },
};
const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "排行榜", url: SITE_URL_BASE + "/ranking/" },
  { name: "韩国时尚品牌榜", url: SITE_URL_BASE + "/ranking/fashion-brands/" },
]);

const brandItems = [
  { rank: 1, name: "Musinsa (무신사)", nameKr: "韩国第一时尚电商", description: "韩国最大时尚电商平台，汇集1000+本地品牌，每月用户超700万，是发现韩国潮牌的必备平台。", score: "9.9", badge: "平台榜首", tag: "综合时尚" },
  { rank: 2, name: "Ader Error (아더에러)", nameKr: "首尔先锋设计师品牌", description: "首尔创意工作室背景，以解构主义设计理念著称，BLACKPINK成员多次穿着，全球年轻人追捧。", score: "9.6", tag: "先锋设计" },
  { rank: 3, name: "PUSH BUTTON", nameKr: "韩国优雅女装代表", description: "设计师Park Seung Gun主理，将女性气质与解构美学完美融合，首尔时装周常客。", score: "9.3", tag: "高端女装" },
  { rank: 4, name: "Gentle Monster", nameKr: "韩国顶级眼镜品牌", description: "打破传统眼镜品牌模式，以概念装置艺术为门店设计，BTS及全球明星御用眼镜品牌。", score: "9.2", tag: "配件品牌" },
  { rank: 5, name: "Wooyoungmi", nameKr: "韩国男装大师", description: "在巴黎发展的韩国设计师Woo Young-mi，将东方美学与欧洲剪裁完美结合，男装界的传奇。", score: "9.0", tag: "高端男装" },
  { rank: 6, name: "LMC (Less More Character)", nameKr: "韩国街头品牌", description: "首尔街头文化核心品牌，以图案卫衣与工装裤闻名，价格亲民是入门韩国时尚的首选。", score: "8.8", tag: "街头时尚" },
  { rank: 7, name: "Nike Korea限定款", nameKr: "韩国限定运动鞋", description: "专为韩国市场设计的Nike限定款式，常与韩国本土艺术家或设计师联名，收藏价值极高。", score: "8.7", tag: "运动潮鞋" },
  { rank: 8, name: "W Concept", nameKr: "韩国设计师品牌集合店", description: "专注于韩国本土新锐设计师品牌，选品眼光独到，是发现下一个大牌设计师的最佳平台。", score: "8.5", tag: "设计师集合" },
];

const listSchema = itemListSchema(
  "2024韩国时尚品牌排行榜",
  brandItems.map(i => ({ name: i.name, url: SITE_URL_BASE + "/ranking/fashion-brands/", position: i.rank }))
);

export default function FashionBrandsPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "排行榜", href: "/ranking" }, { label: "韩国时尚品牌榜" }]}
        schema={bcSchema}
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">👑</span>
          <h1 className="text-3xl md:text-4xl font-extrabold"
            style={{ background: "linear-gradient(135deg, #6c63ff, #e8315b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩国时尚品牌排行榜 2024
          </h1>
        </div>
        <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          2024年韩国最受国际市场瞩目的时尚品牌全面排名，从本土设计师品牌到街头潮牌，带您发现下一个爆款韩国品牌。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <span>🏅</span> 2024年度韩国时尚品牌人气排名
          </h2>
          <RankingList items={brandItems} schema={listSchema} />
        </section>

        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            如何选择适合自己的韩国时尚品牌？
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩国时尚品牌的多样性令人眼花缭乱。榜单第1名的Musinsa是寻找韩国潮牌的最佳起点，
              平台聚合了从平价到高端的各类本土品牌，配合我们的<Link href="/korea-trends/fashion" className="text-[#e8315b] hover:underline">韩系穿搭风格指南</Link>，
              能帮您快速找到最适合自己风格的韩国品牌。
            </p>
            <p>
              如果您追求独特的设计感，Ader Error和PUSH BUTTON是两个不会让您失望的选择。
              而对于入门级韩国时尚爱好者，LMC的街头系列是极具性价比的切入点。
              更多韩国购物攻略请访问<Link href="/korea-trends/beauty" className="text-[#e8315b] hover:underline">韩国美妆购买指南</Link>，
              或加入<Link href="/community" className="text-[#e8315b] hover:underline">韩流社区</Link>与同好交流。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>相关推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "韩国穿搭风格指南", href: "/korea-trends/fashion", desc: "5种韩系风格详细解析" },
              { label: "Olive Young热销榜", href: "/ranking/olive-young", desc: "必买美妆护肤品清单" },
              { label: "韩流社区", href: "/community", desc: "与同好分享穿搭心得" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 12 }}
                className="flex items-center justify-between p-4 hover:shadow-md transition-all"
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
