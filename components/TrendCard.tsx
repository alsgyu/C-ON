import Link from "next/link";

interface TrendCardProps {
  title: string;
  description: string;
  tag: string;
  href: string;
  emoji?: string;
  isHot?: boolean;
  date?: string;
}

export default function TrendCard({
  title,
  description,
  tag,
  href,
  emoji = "✨",
  isHot = false,
  date,
}: TrendCardProps) {
  return (
    <Link href={href} className="group block">
      <article
        style={{
          background: "white",
          border: "1px solid #f0e4e8",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(232,49,91,0.06)",
          transition: "all 0.25s ease",
        }}
        className="p-5 h-full hover:shadow-lg hover:-translate-y-1 hover:border-[#e8315b]/30 transition-all duration-300"
      >
        {/* Card Header */}
        <div className="flex items-start justify-between mb-3">
          <span
            style={{ background: "#fdf0f3", color: "#e8315b", border: "1px solid rgba(232,49,91,0.2)" }}
            className="tag text-xs"
          >
            {tag}
          </span>
          <div className="flex items-center gap-1">
            {isHot && (
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-medium animate-pulse">
                🔥 热门
              </span>
            )}
          </div>
        </div>

        {/* Emoji Icon */}
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
          {emoji}
        </div>

        {/* Content */}
        <h3
          className="font-bold text-base text-gray-800 mb-2 leading-snug group-hover:text-[#e8315b] transition-colors line-clamp-2"
          style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-gray-500 leading-relaxed line-clamp-3"
          style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
        >
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f0e4e8]">
          {date && <span className="text-xs text-gray-400">{date}</span>}
          <span
            style={{ color: "#e8315b" }}
            className="text-xs font-medium group-hover:underline ml-auto flex items-center gap-0.5"
          >
            查看详情
            <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
