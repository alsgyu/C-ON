interface RankingItem {
  rank: number;
  name: string;
  nameKr?: string;
  description: string;
  score?: string;
  badge?: string;
  tag?: string;
  url?: string;
}

interface RankingListProps {
  items: RankingItem[];
  schema?: object;
}

function RankBadge({ rank }: { rank: number }) {
  const style =
    rank === 1
      ? "rank-gold"
      : rank === 2
      ? "rank-silver"
      : rank === 3
      ? "rank-bronze"
      : null;

  if (style) {
    return (
      <span
        className={`${style} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0`}
      >
        {rank}
      </span>
    );
  }
  return (
    <span className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 text-gray-500 font-bold text-base flex-shrink-0">
      {rank}
    </span>
  );
}

export default function RankingList({ items, schema }: RankingListProps) {
  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <ol className="space-y-3">
        {items.map((item) => (
          <li
            key={item.rank}
            style={{
              background: item.rank <= 3 ? "linear-gradient(135deg, #fff8f9, #fdf0f3)" : "white",
              border: item.rank <= 3 ? "1px solid rgba(232,49,91,0.2)" : "1px solid #f0e4e8",
              borderRadius: "14px",
              boxShadow: item.rank <= 3 ? "0 2px 12px rgba(232,49,91,0.08)" : "0 1px 6px rgba(0,0,0,0.04)",
              transition: "all 0.2s ease",
            }}
            className="flex items-center gap-4 p-4 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer"
          >
            <RankBadge rank={item.rank} />

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-800 text-base leading-tight">
                  {item.name}
                </span>
                {item.nameKr && (
                  <span className="text-xs text-gray-400">{item.nameKr}</span>
                )}
                {item.badge && (
                  <span className="text-xs bg-[#e8315b] text-white px-2 py-0.5 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
                {item.tag && (
                  <span className="tag">{item.tag}</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            {item.score && (
              <div className="text-right flex-shrink-0">
                <span
                  style={{
                    background: "linear-gradient(135deg, #e8315b, #ff9500)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  className="font-bold text-lg"
                >
                  {item.score}
                </span>
                <p className="text-xs text-gray-400">综合评分</p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
