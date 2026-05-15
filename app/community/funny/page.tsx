import type { Metadata } from "next";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import CommunityPost from "../../../components/CommunityPost";
import Link from "next/link";
import { PAGE_META, breadcrumbSchema, articleSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["funny"];
export const metadata: Metadata = {
  title: meta.title, description: meta.description,
  keywords: meta.keywords, alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, locale: "zh_CN", images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }] },
};
const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "韩流社区", url: SITE_URL_BASE + "/community/" },
  { name: "搞笑帖子", url: SITE_URL_BASE + "/community/funny/" },
]);

const funnyPosts = [
  { id: "f1", title: "Running Man这个名场面笑到我肚子疼🤣", content: "今天重温2021年的Running Man，成员们在「宾果游戏」环节的神反应让我笑到哭。刘在锡和宋智孝的互动绝对是综艺史上的名场面！强烈推荐没看过的同学补课，保证你看一集爱上韩综。", author: "综艺达人小林", date: "2024-12-01", likes: 2341, comments: 187, views: 28500, tag: "韩国综艺", emoji: "😂", isViral: true },
  { id: "f2", title: "韩国路人偶遇明星的神反应合集🎬", content: "整理了一批韩国网友在弘大、明洞偶遇明星的现场视频，路人们的反应真的千奇百怪：有人当场石化、有人假装没看见、有人直接倒地。韩国网友的淡定程度令人叹为观止！", author: "首尔见闻录", date: "2024-11-28", likes: 1876, comments: 145, views: 22000, tag: "街头日常", emoji: "🎭", isViral: false },
  { id: "f3", title: "韩国便利店店员的一天：比综艺还精彩", content: "韩国GS25便利店打工的大学生分享了一个月的奇葩遭遇：有人来买一根香蕉要求开发票、有人深夜在店内睡觉叫不醒、最离谱的是有人把沐浴乳当饮料喝了一口……", author: "편의점이야기", date: "2024-11-25", likes: 1543, comments: 203, views: 19800, tag: "生活趣事", emoji: "🏪", isViral: false },
  { id: "f4", title: "韩国大妈广场舞大战KPOP现场：没想到结局…", content: "首尔汉江公园出现了神奇一幕，大妈广场舞队伍和KPOP同好会争夺场地，最后导演组居然让两组人合体表演！大妈们跳起BLACKPINK的舞蹈画面简直封神。", author: "汉江公园观察者", date: "2024-11-22", likes: 3204, comments: 289, views: 41000, tag: "搞笑现场", emoji: "💃", isViral: true },
  { id: "f5", title: "韩国地铁奇人奇事：见过这种操作吗？", content: "整理了今年在韩国首尔地铁上拍到的100个离奇瞬间，从在地铁里打fondue的商务人士到边洗头边通勤的大叔，首尔地铁绝对是移动的人间喜剧舞台。", author: "지하철사진작가", date: "2024-11-18", likes: 2678, comments: 234, views: 33500, tag: "地铁奇遇", emoji: "🚇", isViral: false },
  { id: "f6", title: "韩国菜市场大妈VS年轻人讨价还价实录", content: "跟着韩国YouTuber深入首尔广藏市场，记录大妈摊主与各路顾客的砍价大战。从流利英语的外国游客到一脸懵逼的韩国大学生，大妈的机智回应每次都让人哑口无言。", author: "市场探险家", date: "2024-11-15", likes: 1987, comments: 178, views: 26700, tag: "市场日常", emoji: "🥬", isViral: false },
];

export default function FunnyPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "韩流社区", href: "/community" }, { label: "搞笑帖子" }]}
        schema={bcSchema}
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ background: "linear-gradient(135deg, #ff9500, #e8315b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          😂 韩国搞笑帖子 — 综艺笑点与趣味日常合集
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          精选韩国综艺搞笑片段、首尔街头奇遇、韩国路人神反应，每日更新让您捧腹大笑的韩国趣味内容。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            🔥 最新搞笑帖子
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {funnyPosts.map((post) => (
              <CommunityPost key={post.id} {...post}
                schema={articleSchema({
                  title: post.title, description: post.content.slice(0, 100),
                  url: SITE_URL_BASE + "/community/funny/", datePublished: post.date, dateModified: post.date,
                  imageUrl: SITE_URL_BASE + "/og-funny.jpg",
                })}
              />
            ))}
          </div>
        </section>

        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            韩国综艺文化解析：为什么韩综如此令人上瘾？
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩国综艺之所以能席卷全球，在于其独特的「游戏化」制作模式。相比国内综艺重视才艺展示，
              韩综更注重通过各种奇葩游戏和任务，挖掘艺人最真实、最搞笑的一面。
            </p>
            <p>
              以Running Man为代表的韩国户外综艺，利用名场面制造与社交媒体传播的飞轮效应，
              形成了强大的内容生态。更多搞笑内容请访问
              <Link href="/community/memes" className="text-[#e8315b] hover:underline">韩国梗图大全</Link>，
              或查看<Link href="/community/viral" className="text-[#e8315b] hover:underline">热门韩流话题</Link>。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>相关社区版块</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "韩国梗图大全", href: "/community/memes", desc: "最新韩国网络流行语与表情包", emoji: "🎭" },
              { label: "韩流热门话题", href: "/community/viral", desc: "实时追踪韩国社交媒体热搜", emoji: "🔥" },
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
