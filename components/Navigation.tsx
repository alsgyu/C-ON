"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "首页",
    href: "/",
  },
  {
    label: "韩国潮流",
    href: "/korea-trends",
    children: [
      { label: "美妆护肤", href: "/korea-trends/beauty" },
      { label: "时尚穿搭", href: "/korea-trends/fashion" },
    ],
  },
  {
    label: "排行榜",
    href: "/ranking",
    children: [
      { label: "Olive Young热销榜", href: "/ranking/olive-young" },
      { label: "韩国时尚品牌榜", href: "/ranking/fashion-brands" },
    ],
  },
  {
    label: "韩流社区",
    href: "/community",
    children: [
      { label: "搞笑帖子", href: "/community/funny" },
      { label: "韩国梗图", href: "/community/memes" },
      { label: "热门话题", href: "/community/viral" },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header
      style={{ background: "white", boxShadow: "0 2px 12px rgba(232,49,91,0.08)" }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              style={{
                background: "linear-gradient(135deg, #e8315b, #ff9500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="text-2xl font-bold tracking-tight"
            >
              韩流100
            </span>
            <span className="text-xs text-gray-400 leading-none mt-1">
              한국 트렌드
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#e8315b] hover:bg-[#fdf0f3] transition-all duration-200 flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
                {/* Dropdown */}
                {item.children && activeDropdown === item.href && (
                  <div
                    style={{
                      background: "white",
                      boxShadow: "0 8px 32px rgba(232,49,91,0.12)",
                      border: "1px solid #f0e4e8",
                    }}
                    className="absolute top-full left-0 mt-1 rounded-xl py-2 min-w-[160px] z-50"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#e8315b] hover:bg-[#fdf0f3] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              每日更新
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#fdf0f3] transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="打开菜单"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#f0e4e8] py-3">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#e8315b] hover:bg-[#fdf0f3] rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-8 py-2 text-sm text-gray-500 hover:text-[#e8315b] hover:bg-[#fdf0f3] rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    · {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
