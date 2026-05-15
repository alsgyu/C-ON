import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a2e",
        borderTop: "3px solid #e8315b",
      }}
      className="text-white mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              style={{
                background: "linear-gradient(135deg, #e8315b, #ff9500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-2xl font-bold mb-3"
            >
              韩流100
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              中国最权威的韩国潮流资讯平台。每日更新韩国美妆、时尚、文化热点内容。
            </p>
          </div>

          {/* 韩国潮流 */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ff9500]">韩国潮流</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/korea-trends" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国时尚资讯
                </Link>
              </li>
              <li>
                <Link href="/korea-trends/beauty" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国美妆推荐
                </Link>
              </li>
              <li>
                <Link href="/korea-trends/fashion" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国穿搭风格
                </Link>
              </li>
            </ul>
          </div>

          {/* 排行榜 */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ff9500]">热销排行</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ranking" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国品牌排行榜
                </Link>
              </li>
              <li>
                <Link href="/ranking/olive-young" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Olive Young热销榜
                </Link>
              </li>
              <li>
                <Link href="/ranking/fashion-brands" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国时尚品牌榜
                </Link>
              </li>
            </ul>
          </div>

          {/* 社区 */}
          <div>
            <h4 className="font-semibold mb-4 text-[#ff9500]">韩流社区</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/community" className="text-gray-400 text-sm hover:text-white transition-colors">
                  社区首页
                </Link>
              </li>
              <li>
                <Link href="/community/funny" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国搞笑帖子
                </Link>
              </li>
              <li>
                <Link href="/community/memes" className="text-gray-400 text-sm hover:text-white transition-colors">
                  韩国梗图大全
                </Link>
              </li>
              <li>
                <Link href="/community/viral" className="text-gray-400 text-sm hover:text-white transition-colors">
                  热门韩流话题
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-xs">
            © 2024 韩流100 版权所有。内容仅供参考，不构成购买建议。
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>百度SEO优化</span>
            <span>·</span>
            <span>谷歌SEO优化</span>
            <span>·</span>
            <span>每日更新</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
