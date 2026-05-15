import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  SITE_NAME,
  SITE_URL_BASE,
  BAIDU_SITE_VERIFICATION,
} from "../lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL_BASE),
  title: {
    default: SITE_NAME,
    template: `%s | 韩流100`,
  },
  description: "韩流100 — 中国最权威的韩国潮流资讯平台",
  keywords: ["韩国潮流", "韩国美妆", "韩国时尚", "Olive Young", "韩流资讯"],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "韩流100",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  other: {
    "baidu-site-verification": BAIDU_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="baidu-site-verification"
          content={BAIDU_SITE_VERIFICATION}
        />
        {/* 百度统计代码 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_TONGJI_ID";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fff8f9]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
