import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import { PAGE_META, breadcrumbSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["beauty"];
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
  { name: "美妆护肤", url: SITE_URL_BASE + "/korea-trends/beauty/" },
]);

const beautyBrands = [
  { name: "COSRX", desc: "韩国蜗牛护肤第一品牌，AHA/BHA精华全球热销", tag: "护肤精华", stars: "⭐⭐⭐⭐⭐" },
  { name: "Laneige", desc: "雪花秀旗下水光品牌，保湿水面膜是全球销量冠军", tag: "水光保湿", stars: "⭐⭐⭐⭐⭐" },
  { name: "Innisfree", desc: "济州岛天然成分护肤，绿茶面膜经典不衰", tag: "天然护肤", stars: "⭐⭐⭐⭐" },
  { name: "Etude House", desc: "韩系甜美彩妆品牌，平价眼影唇釉备受欢迎", tag: "平价彩妆", stars: "⭐⭐⭐⭐" },
  { name: "Sulwhasoo", desc: "高端韩方护肤品牌，人参精华抗老效果卓越", tag: "高端护肤", stars: "⭐⭐⭐⭐⭐" },
  { name: "ROMAND", desc: "韩国网红彩妆新贵，果冻唇釉风靡全亚洲", tag: "网红彩妆", stars: "⭐⭐⭐⭐⭐" },
];

export default function BeautyPage() {
  return (
    <>
      <BreadcrumbNav
        items={[
          { label: "韩国潮流", href: "/korea-trends" },
          { label: "美妆护肤" },
        ]}
        schema={bcSchema}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* H1 */}
        <h1
          className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{
            background: "linear-gradient(135deg, #e8315b, #ff9500)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif",
          }}
        >
          💄 韩国美妆推荐 — Olive Young购买攻略完全指南
        </h1>
        <p className="text-gray-500 mb-10 text-base leading-relaxed max-w-2xl" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          2024年最全韩国美妆推荐，从护肤品排行榜到彩妆平价攻略，助您在Olive Young精准选购，打造韩国女团同款完美妆容。
        </p>

        {/* H2 - 护肤趋势 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 border-l-4 border-[#e8315b] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            2024韩国护肤品排行榜 TOP 6
          </h2>
          <p className="text-gray-500 text-sm mb-6 ml-5">综合Olive Young销量、美妆博主评测与用户口碑排名</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beautyBrands.map((brand, i) => (
              <div
                key={brand.name}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 14, boxShadow: "0 2px 10px rgba(232,49,91,0.06)" }}
                className="p-5 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    style={{ background: "linear-gradient(135deg, #e8315b, #ff9500)", color: "white", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: "bold", flexShrink: 0 }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-bold text-gray-800 text-base">{brand.name}</span>
                </div>
                <span className="tag mb-2 block w-fit">{brand.tag}</span>
                <p className="text-gray-500 text-sm leading-relaxed">{brand.desc}</p>
                <div className="mt-2 text-sm">{brand.stars}</div>
              </div>
            ))}
          </div>
        </section>

        {/* H2 - 购买攻略 */}
        <section className="mb-12" style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16, boxShadow: "0 2px 12px rgba(232,49,91,0.06)" }} >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-[#e8315b] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              Olive Young购买攻略：中国人必看的省钱秘籍
            </h2>
            <div className="text-gray-600 text-sm leading-loose space-y-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              <p>
                <strong>Olive Young（올리브영）</strong>是韩国最大的美妆护肤连锁零售商，全国拥有超过1,000家门店，也是游韩必打卡的购物天堂。
                对于中国用户来说，合理利用Olive Young的优惠活动可以节省30%-50%的购物费用。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  { title: "🎯 1+1活动", desc: "Olive Young定期举办买一送一活动，通常在换季时期力度最大，护肤精华和防晒产品最常参与活动。" },
                  { title: "💳 会员积分", desc: "注册Olive Young会员可积累积分，集满一定分数可兑换折扣券。建议在正式购物前先下载官方APP完成注册。" },
                  { title: "🛒 跨境购建议", desc: "2024年Olive Young支持部分商品直邮中国，运费按重量计算。建议拼单购买以分摊运费，节省更多成本。" },
                  { title: "📅 最佳购物时机", desc: "双十一前后、圣诞节期间、以及韩国春节（每年2月）前后，Olive Young通常会推出全场大促活动。" },
                ].map((tip) => (
                  <div key={tip.title} style={{ background: "#fdf0f3", borderRadius: 10, padding: "14px 16px" }}>
                    <strong className="text-gray-800 block mb-1">{tip.title}</strong>
                    <p className="text-gray-600 text-xs leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* H2 - 彩妆推荐 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-[#e8315b] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩国彩妆平价好用推荐：10款必买单品
          </h2>
          <div className="space-y-3">
            {[
              { name: "ROMAND 果冻唇釉", price: "约¥80", desc: "韩国最火唇釉无需多言，显色度高、持久度强，有超过40种色号可选" },
              { name: "Etude House 眼影盘", price: "约¥120", desc: "日常大地色系完全够用，粉质细腻显色，适合初学者" },
              { name: "CLIO 持久眼线液", price: "约¥90", desc: "防水不晕染，笔触纤细，韩国眼妆必备利器" },
              { name: "Peripera 气垫BB霜", price: "约¥150", desc: "轻薄服帖，自然哑光效果，中等覆盖度日常使用非常舒适" },
              { name: "3CE 哑光口红", price: "约¥110", desc: "质地丝滑不拔干，韩系复古暗红色号极为热销" },
            ].map((product, i) => (
              <div
                key={product.name}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 12 }}
                className="flex items-center gap-4 p-4 hover:shadow-md transition-all"
              >
                <span className="text-lg font-bold text-gray-300 w-6 flex-shrink-0">{i + 1}</span>
                <div className="flex-1">
                  <span className="font-bold text-gray-800">{product.name}</span>
                  <span className="ml-2 text-xs text-[#e8315b] font-medium">{product.price}</span>
                  <p className="text-gray-500 text-xs mt-0.5">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2 - 护肤步骤 */}
        <section className="mb-12" style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 border-l-4 border-[#e8315b] pl-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              韩国护肤步骤详解：打造玻璃肌的7步法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {["卸妆油", "洁面乳", "化妆水", "精华液", "乳液", "面膜", "防晒"].map((step, i) => (
                <div key={step} className="text-center">
                  <div
                    style={{
                      background: `linear-gradient(135deg, rgba(232,49,91,${0.4 + i * 0.08}), rgba(255,149,0,${0.4 + i * 0.08}))`,
                      borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center",
                      justifyContent: "center", margin: "0 auto 8px", color: "white", fontWeight: "bold", fontSize: 18,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-xs font-medium text-gray-700">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6 leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
              韩国护肤法以「多步骤、薄层叠加」为核心理念，每一步使用少量产品，让肌肤循序渐进吸收。
              与中国传统护肤的「三件套」相比，韩式7步法更注重肌肤屏障修复与深层补水，
              这也是韩国女生拥有「玻璃肌」的终极秘密。
              探索更多护肤内容，查看我们的<Link href="/ranking/olive-young" className="text-[#e8315b] hover:underline">Olive Young热销榜</Link>。
            </p>
          </div>
        </section>

        {/* H2 - 内链CTA */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            更多韩国美妆相关内容
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Olive Young热销榜", href: "/ranking/olive-young", desc: "实时榜单，购物首选" },
              { label: "韩国时尚穿搭", href: "/korea-trends/fashion", desc: "妆发穿搭一体化" },
              { label: "韩国品牌榜", href: "/ranking/fashion-brands", desc: "发现更多韩国好物" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 12 }}
                className="flex items-center justify-between p-4 hover:shadow-md hover:border-[#e8315b]/30 transition-all"
              >
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{link.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{link.desc}</div>
                </div>
                <span className="text-[#e8315b] text-sm">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
