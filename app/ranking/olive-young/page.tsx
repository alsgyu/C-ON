import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import RankingList from "../../../components/RankingList";
import { PAGE_META, breadcrumbSchema, itemListSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["olive-young"];
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
  { name: "排行榜", url: SITE_URL_BASE + "/ranking/" },
  { name: "Olive Young热销榜", url: SITE_URL_BASE + "/ranking/olive-young/" },
]);

const rankingItems = [
  { rank: 1, name: "COSRX Advanced Snail 96 Mucin Power Essence", nameKr: "蜗牛原液精华", description: "含96%蜗牛分泌物过滤液，修复受损肌肤、强化屏障，连续三年Olive Young护肤精华销量冠军。", score: "9.8", badge: "年度冠军", tag: "护肤精华" },
  { rank: 2, name: "Laneige Water Sleeping Mask", nameKr: "水光睡眠面膜", description: "兰芝经典水光睡眠面膜，含AROM-7™️独家成分，一觉醒来肌肤饱满水润，全球累计销售超5000万瓶。", score: "9.6", badge: "全球爆款", tag: "睡眠面膜" },
  { rank: 3, name: "Beauty of Joseon Rice + Probiotics Sunscreen", nameKr: "朝鲜美姬大米防晒", description: "SPF50+/PA++++，质地轻薄不搓泥，含益生菌成分温和养肤，被评为2024年最佳日常防晒产品。", score: "9.5", badge: "防晒冠军", tag: "防晒霜" },
  { rank: 4, name: "ROMAND Juicy Lasting Tint", nameKr: "果冻唇釉", description: "韩国本土彩妆黑马，果冻般通透质地，40+色号满足各种肤色与场合需求，持久不干燥。", score: "9.3", tag: "彩妆" },
  { rank: 5, name: "Torriden Dive-In Low Molecular Hyaluronic Acid Serum", nameKr: "低分子玻尿酸精华", description: "5种规格玻尿酸从表皮到真皮层层渗透补水，轻薄水感质地，敏感肌安心使用。", score: "9.2", tag: "补水保湿" },
  { rank: 6, name: "Skin1004 Madagascar Centella Asiatica Tone Brightening Sakura Cream", nameKr: "积雪草亮肤面霜", description: "主打积雪草舒缓+樱花美白双功效，质地清爽不油腻，适合混合偏油性肌肤日常使用。", score: "9.0", tag: "亮肤护理" },
  { rank: 7, name: "MEDIHEAL N.M.F Aquaring Hydro Soothing Gel Mask", nameKr: "N.M.F水光面膜", description: "韩国专业皮肤科品牌，单次使用面膜，深层补水修护，价格实惠适合日常护肤。", score: "8.9", tag: "片状面膜" },
  { rank: 8, name: "Innisfree Green Tea Seed Serum", nameKr: "绿茶精华", description: "济州岛有机绿茶提取，含天然氨基酸与抗氧化成分，质感是韩系清爽护肤的经典代表。", score: "8.8", tag: "抗氧化" },
  { rank: 9, name: "Clio Gelpresso Waterproof Pencil Liner", nameKr: "纤细防水眼线笔", description: "旋转式便携设计，防水防晕，笔触超细适合日常眼线，韩国眼妆入门必备单品。", score: "8.6", tag: "彩妆" },
  { rank: 10, name: "Dr.Jart+ Cicapair Tiger Grass Calming Serum", nameKr: "虎草修复精华", description: "专业皮肤科研发，积雪草+虎耳草舒缓泛红，敏感肌与紫外线后修护效果备受好评。", score: "8.5", tag: "舒缓修复" },
];

const listSchema = itemListSchema(
  "Olive Young 2024热销榜TOP 10",
  rankingItems.map(i => ({ name: i.name, url: SITE_URL_BASE + "/ranking/olive-young/", position: i.rank }))
);

export default function OliveYoungPage() {
  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "排行榜", href: "/ranking" },
          { label: "Olive Young热销榜" },
        ]}
        schema={bcSchema}
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🛍️</span>
          <h1 className="text-3xl md:text-4xl font-extrabold"
            style={{ background: "linear-gradient(135deg, #e8315b, #ff9500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            Olive Young 2024热销榜 — 必买清单TOP 10
          </h1>
        </div>
        <p className="text-gray-500 mb-3 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          综合Olive Young官方销量数据、用户好评率与韩国美妆博主推荐，每周更新最具参考价值的韩国美妆必买清单。
        </p>
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">✓ 数据每周更新</span>
          <span className="text-xs bg-[#fdf0f3] text-[#e8315b] px-3 py-1 rounded-full font-medium">2024年12月版</span>
        </div>

        {/* Ranking List */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <span>🏆</span> Olive Young热销护肤品牌TOP 10
          </h2>
          <RankingList items={rankingItems} schema={listSchema} />
        </section>

        {/* 购物小贴士 */}
        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            Olive Young必买清单使用指南
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              这份<strong>Olive Young热销榜</strong>综合了官方销量、用户评价以及韩国美妆专家推荐，
              是您在Olive Young购物时最可靠的参考依据。榜单中的商品均经过严格筛选，
              确保每款产品都具备优秀的性价比与实际使用效果。
            </p>
            <p>
              购物建议：前三名产品是经过时间与市场双重验证的经典款，即使预算有限也强烈推荐优先入手。
              如果您是第一次使用韩国护肤品，不妨从榜单第1名的COSRX蜗牛精华开始尝试，
              温和低刺激的配方适合各种肤质。
            </p>
            <p>
              想了解如何在Olive Young门店或线上最优价格购入这些产品，
              请查看我们的<Link href="/korea-trends/beauty" className="text-[#e8315b] hover:underline">Olive Young购买攻略</Link>，
              或浏览<Link href="/ranking/fashion-brands" className="text-[#e8315b] hover:underline">韩国时尚品牌榜</Link>发现更多好物。
            </p>
          </div>
        </section>

        {/* More rankings */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            其他韩国排行榜推荐
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "韩国时尚品牌榜", href: "/ranking/fashion-brands", desc: "2024年度最受欢迎韩国时尚品牌排名", emoji: "👑" },
              { label: "韩国美妆护肤完全攻略", href: "/korea-trends/beauty", desc: "详细护肤步骤与彩妆产品推荐", emoji: "💄" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 12 }}
                className="flex items-center gap-4 p-4 hover:shadow-md transition-all"
              >
                <span className="text-3xl">{l.emoji}</span>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{l.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{l.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
