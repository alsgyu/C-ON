import type { Metadata } from "next";
import BreadcrumbNav from "../../../components/BreadcrumbNav";
import CommunityPost from "../../../components/CommunityPost";
import Link from "next/link";
import { PAGE_META, breadcrumbSchema, articleSchema, SITE_URL_BASE } from "../../../lib/metadata";

const meta = PAGE_META["memes"];
export const metadata: Metadata = {
  title: meta.title, description: meta.description,
  keywords: meta.keywords, alternates: { canonical: meta.canonical },
  openGraph: { title: meta.title, description: meta.description, url: meta.canonical, locale: "zh_CN", images: [{ url: meta.ogImage || "/og-default.jpg", width: 1200, height: 630 }] },
};
const bcSchema = breadcrumbSchema([
  { name: "首页", url: SITE_URL_BASE + "/" },
  { name: "韩流社区", url: SITE_URL_BASE + "/community/" },
  { name: "韩国梗图", url: SITE_URL_BASE + "/community/memes/" },
]);

const memePosts = [
  { id: "m1", title: "「괜찮아요」这个词在韩国的一万种用法😂", content: "「괜찮아요」直译是「没关系/好的」，但韩国人用这个词的场景非常魔幻：明明很迟到说「괜찮아요」、明明很难吃也说「괜찮아요」、甚至在医院X光片出来不太好的时候医生也说「괜찮아요」……这个词已经成为2024年最流行的韩国梗之一。", author: "韩语梗图研究所", date: "2024-12-01", likes: 3456, comments: 234, views: 45000, tag: "语言梗", emoji: "🗣️", isViral: true },
  { id: "m2", title: "韩国「눈치」文化梗图合集：不会看眼色怎么行", content: "「눈치」是韩国文化中最难翻译的词，大致是「察言观色的能力」。这个词衍生出了无数梗图场景：公司聚餐不走最晚的那个、电梯里默默站着等老板先进、会议室里大家互相看谁先发言……", author: "韩国职场生存手册", date: "2024-11-28", likes: 2987, comments: 198, views: 38500, tag: "文化梗", emoji: "👀", isViral: true },
  { id: "m3", title: "韩国「빨리빨리」文化魔幻现实：快到飞起", content: "韩国的빨리빨리（快快快）文化已经成为国际梗。外卖平均11分钟送达、ATM机24秒完成转账、去政府机构办事当天取件……最神奇的是韩国人自己吐槽：「我们这么快干嘛，又没地方去」。", author: "首尔速度观察", date: "2024-11-25", likes: 4123, comments: 312, views: 52000, tag: "文化梗", emoji: "⚡", isViral: true },
  { id: "m4", title: "「K-drama手机」梗：为什么主角永远被call到", content: "韩剧里永远存在的神奇设定：男主在最关键时刻手机信号满格来电话、女主在最浪漫场景被前男友exact time打扰。整理了2024年最新韩剧里的戏剧性「被call」名场面梗图合集。", author: "韩剧名场面博物馆", date: "2024-11-22", likes: 1876, comments: 156, views: 24500, tag: "韩剧梗", emoji: "📱", isViral: false },
  { id: "m5", title: "韩国炸鸡梗图：治愈一切的神奇食物", content: "在韩国，炸鸡（치킨）早已超越食物本身，成为一种文化符号和精神图腾。失恋？叫炸鸡。加班到很晚？叫炸鸡。天气不好？叫炸鸡。韩国人甚至专门为此创造了「치맥」（炸鸡+啤酒）这个专有词汇。", author: "炸鸡信徒공식계정", date: "2024-11-18", likes: 5234, comments: 423, views: 67000, tag: "美食梗", emoji: "🍗", isViral: true },
  { id: "m6", title: "2024年韩国网络最流行的「존맛탱」用法指南", content: "「존맛탱」是「존나 맛있어」的缩略强化版，意思是「超级超级好吃」，但2024年韩国年轻人把这个词的使用场景扩展到了所有让人爽的事情上：包括追到好剧、考试发挥超常、甚至是冬天暖气终于开了……", author: "한국어신조어연구", date: "2024-11-15", likes: 2341, comments: 187, views: 31000, tag: "网络新词", emoji: "💬", isViral: false },
];

export default function MemesPage() {
  return (
    <>
      <BreadcrumbNav
        items={[{ label: "韩流社区", href: "/community" }, { label: "韩国梗图" }]}
        schema={bcSchema}
      />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3"
          style={{ background: "linear-gradient(135deg, #6c63ff, #e8315b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          🎭 韩国梗图大全 — 2024最新韩国网络流行语
        </h1>
        <p className="text-gray-500 mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
          收录2024年韩国各大社交平台最热梗图、网络流行语与表情包，附中文解析，带你玩转韩国网络文化。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-5" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            🔥 2024年度最火韩国梗图
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {memePosts.map((post) => (
              <CommunityPost key={post.id} {...post}
                schema={articleSchema({
                  title: post.title, description: post.content.slice(0, 100),
                  url: SITE_URL_BASE + "/community/memes/", datePublished: post.date, dateModified: post.date,
                  imageUrl: SITE_URL_BASE + "/og-memes.jpg",
                })}
              />
            ))}
          </div>
        </section>

        <section style={{ background: "white", border: "1px solid #f0e4e8", borderRadius: 16 }} className="p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            理解韩国梗图文化：为什么韩国网络梗这么好笑？
          </h2>
          <div className="text-gray-600 text-sm leading-loose space-y-3" style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}>
            <p>
              韩国网络梗文化的繁荣，根植于韩国高度发达的互联网基础设施与年轻人极高的网络参与度。
              韩国拥有全球最快的平均网速，90%以上的年轻人活跃于Twitter、Instagram和Kakao Talk等平台。
              这一土壤催生了独特的韩国网络幽默生态。
            </p>
            <p>
              想了解更多韩国文化趣味内容，请访问<Link href="/community/funny" className="text-[#e8315b] hover:underline">韩国搞笑帖子</Link>
              或<Link href="/community/viral" className="text-[#e8315b] hover:underline">热门韩流话题</Link>，
              同时别忘了查看<Link href="/korea-trends" className="text-[#e8315b] hover:underline">韩国潮流资讯</Link>掌握最新动态。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
