import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  schema?: object;
}

export default function BreadcrumbNav({ items, schema }: BreadcrumbNavProps) {
  return (
    <>
      {/* JSON-LD BreadcrumbList */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <nav
        aria-label="面包屑导航"
        className="bg-white border-b border-[#f0e4e8]"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-[#e8315b] transition-colors font-medium"
              >
                首页
              </Link>
            </li>
            {items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1">
                <span className="text-gray-300">›</span>
                {item.href && idx < items.length - 1 ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#e8315b] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#e8315b] font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
