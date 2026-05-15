const SITE_URL = process.env.SITE_URL || "https://www.hanliu100.com";

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  schema?: object;
}

// ===== 品牌名 =====
export const SITE_NAME = "韩流100 | 韩国潮流美妆时尚第一站";
export const SITE_SHORT_NAME = "韩流100";
export const SITE_URL_BASE = SITE_URL;
export const OG_DEFAULT_IMAGE = `${SITE_URL}/og-default.jpg`;
export const BAIDU_SITE_VERIFICATION = "YOUR_BAIDU_CODE_HERE";

// ===== 页面元数据 =====
export const PAGE_META: Record<string, PageSEO> = {
  home: {
    title: "韩国潮流美妆时尚资讯",
    description:
      "韩流100 — 中国最权威的韩国潮流资讯平台。每日更新韩国美妆排行榜、时尚穿搭推荐、Olive Young必买攻略，助您掌握2024最新韩国潮流动态。",
    keywords:
      "韩国潮流,韩国美妆,韩国时尚,2024韩国最新潮流,韩国网红同款推荐,韩流资讯,Olive Young,韩国护肤",
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/og-home.jpg`,
  },
  "korea-trends": {
    title: "韩国潮流资讯 — 美妆与时尚",
    description:
      "探索最新韩国潮流动态，涵盖K-beauty美妆护肤、韩系时尚穿搭、韩国网红同款。每周更新，紧跟首尔时尚最前线。",
    keywords:
      "韩国潮流,韩流资讯,K-beauty,韩系穿搭,韩国网红,首尔时尚,韩国最新潮流",
    canonical: `${SITE_URL}/korea-trends/`,
    ogImage: `${SITE_URL}/og-trends.jpg`,
  },
  beauty: {
    title: "韩国美妆推荐 — Olive Young购买攻略",
    description:
      "2024韩国美妆护肤品排行榜，包含Olive Young热销榜单、平价彩妆推荐、韩国护肤精华排名。专业导购，帮您省钱买好货。",
    keywords:
      "韩国美妆推荐,Olive Young购买攻略,韩国护肤品排行榜,韩国彩妆平价好用,韩国护肤精华,韩系美妆",
    canonical: `${SITE_URL}/korea-trends/beauty/`,
    ogImage: `${SITE_URL}/og-beauty.jpg`,
  },
  fashion: {
    title: "韩国时尚品牌 — 韩系穿搭风格指南",
    description:
      "韩国时尚品牌大全，韩系穿搭教程2024，韩国欧巴穿搭风格解析。从首尔街头到日常穿搭，帮您打造完美韩系造型。",
    keywords:
      "韩国时尚品牌,韩国穿搭风格,韩国欧巴穿搭,韩系穿搭教程2024,韩国街头时尚,首尔穿搭",
    canonical: `${SITE_URL}/korea-trends/fashion/`,
    ogImage: `${SITE_URL}/og-fashion.jpg`,
  },
  ranking: {
    title: "韩国热销排行榜 — Olive Young & 时尚品牌",
    description:
      "实时更新的韩国商品排行榜，包含Olive Young全品类热销榜、韩国时尚品牌人气排名。每周数据更新，购物必看榜单。",
    keywords:
      "Olive Young热销榜,韩国品牌排行,韩国护肤排名,韩国时尚品牌榜,韩国必买清单",
    canonical: `${SITE_URL}/ranking/`,
    ogImage: `${SITE_URL}/og-ranking.jpg`,
  },
  "olive-young": {
    title: "Olive Young 2024热销榜 — 必买清单",
    description:
      "Olive Young 2024年度热销商品排行榜，护肤、彩妆、身体护理全品类必买清单。实时销量数据，购物前必看攻略。",
    keywords:
      "Olive Young热销榜,Olive Young必买清单,韩国护肤排名第一,Olive Young购买攻略,韩国药妆店",
    canonical: `${SITE_URL}/ranking/olive-young/`,
    ogImage: `${SITE_URL}/og-oliveyoung.jpg`,
  },
  "fashion-brands": {
    title: "韩国时尚品牌排行榜 2024",
    description:
      "2024韩国时尚品牌人气排行榜，包含Musinsa、W Concept等主流韩国时装品牌评测与推荐，帮您找到最潮韩国时尚。",
    keywords:
      "韩国时尚品牌榜,韩国时装品牌,Musinsa,韩国服装品牌推荐,韩国潮牌排行",
    canonical: `${SITE_URL}/ranking/fashion-brands/`,
    ogImage: `${SITE_URL}/og-fashionbrands.jpg`,
  },
  community: {
    title: "韩流社区 — 搞笑视频、梗图与热门话题",
    description:
      "韩流粉丝社区，汇聚韩国搞笑视频、韩国梗图、热门韩流话题讨论。与万名韩流爱好者一起互动，分享韩国文化乐趣。",
    keywords:
      "韩国搞笑视频,韩国梗图,韩流社区,韩流话题,韩国综艺,韩国文化,韩流粉丝",
    canonical: `${SITE_URL}/community/`,
    ogImage: `${SITE_URL}/og-community.jpg`,
  },
  funny: {
    title: "韩国搞笑帖子 — 综艺笑点合集",
    description:
      "精选韩国综艺搞笑片段、韩国艺人搞笑瞬间、韩国路人神反应。每日更新最新韩国搞笑内容，让您忍俊不禁。",
    keywords:
      "韩国搞笑视频,韩国综艺搞笑片段,韩国搞笑帖子,韩国艺人搞笑,韩国娱乐",
    canonical: `${SITE_URL}/community/funny/`,
    ogImage: `${SITE_URL}/og-funny.jpg`,
  },
  memes: {
    title: "韩国梗图大全 — 最新韩国网络流行语",
    description:
      "收录2024最热韩国梗图、韩国网络流行语、韩国表情包。了解韩国网络文化，玩转韩国梗，与韩流社区共同欢笑。",
    keywords:
      "韩国梗图,韩国网络流行语,韩国表情包,韩国网红梗,韩国流行文化,韩国搞笑图",
    canonical: `${SITE_URL}/community/memes/`,
    ogImage: `${SITE_URL}/og-memes.jpg`,
  },
  viral: {
    title: "韩国热门话题 — 今日韩流爆款内容",
    description:
      "实时追踪韩国社交媒体热门话题，韩国网红爆款推荐，韩流最新动态解析。第一时间掌握韩国最热流行内容。",
    keywords:
      "韩流热门话题,韩国网络爆款,韩国社交媒体,韩国热搜,韩国流行趋势,韩国最新动态",
    canonical: `${SITE_URL}/community/viral/`,
    ogImage: `${SITE_URL}/og-viral.jpg`,
  },
};

// ===== JSON-LD Schema 生成器 =====
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_SHORT_NAME,
    alternateName: "韩流潮流网",
    url: SITE_URL,
    description: "中国最权威的韩国潮流美妆时尚资讯平台",
    inLanguage: "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url: string; position: number }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  imageUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    inLanguage: "zh-CN",
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: opts.imageUrl,
    author: {
      "@type": "Organization",
      name: SITE_SHORT_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_SHORT_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}
