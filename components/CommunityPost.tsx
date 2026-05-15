interface CommunityPostProps {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  views: number;
  tag: string;
  emoji?: string;
  isViral?: boolean;
  schema?: object;
}

export default function CommunityPost({
  title,
  content,
  author,
  date,
  likes,
  comments,
  views,
  tag,
  emoji = "💬",
  isViral = false,
  schema,
}: CommunityPostProps) {
  return (
    <article
      style={{
        background: "white",
        border: "1px solid #f0e4e8",
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(232,49,91,0.05)",
        transition: "all 0.2s ease",
      }}
      className="p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="tag">{tag}</span>
          {isViral && (
            <span className="text-xs bg-gradient-to-r from-[#e8315b] to-[#ff9500] text-white px-2 py-0.5 rounded-full font-medium">
              🔥 爆款
            </span>
          )}
        </div>
        <span className="text-xs text-gray-400 flex-shrink-0">{date}</span>
      </div>

      {/* Title */}
      <h3
        className="font-bold text-gray-800 text-base mb-2 leading-snug"
        style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
      >
        <span className="mr-1.5">{emoji}</span>
        {title}
      </h3>

      {/* Content */}
      <p
        className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4"
        style={{ fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif" }}
      >
        {content}
      </p>

      {/* Footer stats */}
      <div
        style={{ borderTop: "1px solid #f0e4e8" }}
        className="flex items-center justify-between pt-3"
      >
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <span
            style={{
              width: 24,
              height: 24,
              background: "linear-gradient(135deg, #e8315b, #ff9500)",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 10,
              fontWeight: "bold",
              flexShrink: 0,
            }}
          >
            {author[0]}
          </span>
          <span className="ml-1 font-medium text-gray-600">{author}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            {likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 000 2h3a1 1 0 000-2H6z" clipRule="evenodd" />
            </svg>
            {comments}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {views.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  );
}
