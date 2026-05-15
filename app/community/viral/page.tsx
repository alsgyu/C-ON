import type { Metadata } from "next";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import CommunityPost from "../../../components/CommunityPost";
import Link from "next/link";
import { PAGE_META, breadcrumbSchema, articleSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["viral"];
export const metadata: Metadata = {
  title: meta.title, description: meta.description,
  keywords: meta.keywords, alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, locale: "zh_CN", images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }] },
};
const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "韩流社区", url: SITE_URL_BASE + "/community/" },
  { name: "热门话题", url: SITE_URL_BASE + "/community/viral/" },
]);

const viralPosts = [
  { id: "v1", title: "NewJeans解约闹剧：韩国音乐产业格局正在改变", content: "NewJeans与HYBE的合约纠纷震惊韩国娱乐圈，引发了关于韩国偶像公司权力结构的深层讨论。从粉丝到业界人士，所有人都在讨论这场纠纷背后韩国音乐产业体制的深层问题。", author: "韩娱深度分析", date: "2024-12-01", likes: 8234, comments: 678, views: 112000, tag: "韩娱话题", emoji: "🎤", isViral: true },
  { id: "v2", title: "韩国政治动荡对K-pop产业的实际影响分析", content: "2024年韩国政治局势的波动引发外界对韩国软实力的关注。分析师指出，K-pop产业受政治影响有限，韩流文化的国际传播已形成独立于政治的自主生态系统。", author: "韩流经济观察", date: "2024-11-29", likes: 5678, comments: 489, views: 78000, tag: "时事分析", emoji: "🇰🇷", isViral: true },
  { id: "v3", title: "BTS防弹少年团回归倒计时：ARMY全球沸腾！", content: "随着BTS成员陆续完成兵役，2025年团体回归已进入倒计时阶段。韩国各大娱乐媒体与粉丝论坛的讨论热度持续攀升，回归专辑相关话题多次冲上Twitter全球热搜Top 3。", author: "ARMY情报站", date: "2024-11-27", likes: 15678, comments: 1234, views: 245000, tag: "KPOP热点", emoji: "💜", isViral: true },
  { id: "v4", title: "韩国「워라밸」世代：年轻人为什么不想加班了", content: "2024年韩国职场文化正在经历代际更迭。「워라밸」（工作与生活的平衡）成为韩国Z世代求职时最看重的因素，超过薪资待遇。这一趋势正在重塑韩国企业的用人策略。", author: "韩国社会观察报告", date: "2024-11-24", likes: 6789, comments: 534, views: 89000, tag: "社会话题", emoji: "⚖️", isViral: false },
  { id: "v5", title: "首尔江南区Cafe热潮：每平方公里最多咖啡馆的地方", content: "首尔江南区以每平方公里拥有超过300家咖啡馆创下世界纪录。韩国「咖啡国家」的称号由来已久，详细分析这一现象背后的文化、经济与社会因素。", author: "首尔城市文化研究", date: "2024-11-20", likes: 4321, comments: 267, views: 56000, tag: "生活方式", emoji: "☕", isViral: false },
  { id: "v6", title: "2024韩国最热流行词汇盘点：你知道几个？", content: "盘点2024年在韩国网络与日常生活中最高频出现的新词与流行语，包括「킬링파트」（最精彩的部分）、「갓생」（神级自律的生活）、「핵인싸」（超级社牛）等，附带使用语境详解。", author: "한국어트렌드연구소", date: "2024-11-16", likes: 7890, comments: 623, views: 98000, tag: "语言文化", emoji: "📖", isViral: true },
];

export default function ViralPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "韩流社区", href: "/community" }, { label: "热门话题" }]}
        schema={bcSchema}
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
          <span className="text-xs text-red-500 font-medium">实时更新</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ background: "linear-gradient(135deg, #e8315b, #ff6b8a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          🔥 韩国热门话题 — 今日韩流爆款内容
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          实时追踪韩国社交媒体热门话题，第一时间提供中文深度解析，让您不错过任何韩流重要动态。
        </p>

        {/* Trending tags */}
        <section className="mb-8">
          <h2 className="text-base font-bold text-gray-700 mb-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            🏷️ 今日热门标签
          </h2>
          <div className="flex flex-wrap gap-2">
            {["#BTS回归", "#NewJeans", "#韩国美妆", "#首尔咖啡", "#워라밸", "#KPOP", "#韩流话题", "#韩国时尚", "#Olive Young"].map(tag => (
              <span
                key={tag}
                style={{ background: "linear-gradient(135deg, #e8315b, #ff9500)", color: "white", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 500 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-5" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            🔥 今日最热韩流话题
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {viralPosts.map((post) => (
              <CommunityPost key={post.id} {...post}
                schema={articleSchema({
                  title: post.title, description: post.content.slice(0, 100),
                  url: SITE_URL_BASE + "/community/viral/", datePublished: post.date, dateModified: post.date,
                  imageUrl: SITE_URL_BASE + "/og-viral.jpg",
                })}
              />
            ))}
          </div>
        </section>

        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩流热门话题的影响力为什么这么强？
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩国拥有极高的社交媒体渗透率与高度活跃的在线讨论文化。一个话题一旦在韩国国内引发热议，
              往往会在数小时内扩散至全球韩流社区。韩流100社区第一时间提供中文翻译与深度解析，
              确保中文用户不会在信息差中落后。
            </p>
            <p>
              想了解更多韩国文化趣味内容，欢迎访问<Link href="/community/funny" className="text-[#e8315b] hover:underline">韩国搞笑帖子</Link>、
              <Link href="/community/memes" className="text-[#e8315b] hover:underline">韩国梗图大全</Link>，
              以及最新的<Link href="/korea-trends" className="text-[#e8315b] hover:underline">韩国潮流资讯</Link>。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
