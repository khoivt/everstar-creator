"use client";

import { Locale } from "@/config/localeConfig";
import { getDictionary, Layout, Module } from "@/utils/getDictionaries";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Breadcrumb() {
  const lang = useParams().lang as Locale;
  const { navbar } = getDictionary(lang, Module.LAYOUT) as Layout;
  const pathname = usePathname();

  const LABEL: Record<string, string> = {
    home: navbar.home,
    policy: navbar.policy,
    about: navbar.about,
    contact: navbar.contactUs,
    service: navbar.services,
  };
  // Split URL into segments, ignore empty parts
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean);
  // Remove lang if it's the first segment
  const filteredSegments = segments[0] === lang ? segments.slice(1) : segments;

  // Create breadcrumb list from segments
  const breadcrumbs = filteredSegments.map((segment, index) => {
    const href = `/${lang}/` + filteredSegments.slice(0, index + 1).join("/");
    const label = LABEL[segment] || decodeURIComponent(segment.replace(/-/g, " "));
    return { label, href };
  });

  return (
    <nav className="section   mt-8 !mb-0 !py-0 text-lg leading-[1] font-normal text-[#333333] md:mt-12 md:text-2xl">
      <Link
        href={`/${lang}`}
        className="hover:text-primary1"
      >
        {navbar.home}
      </Link>
      {breadcrumbs.map((item, index) => (
        <span key={item.href}>
          <span className="mx-2">&gt;</span>
          {index === breadcrumbs.length - 1 ? (
            <span className="font-semibold">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-primary1"
            >
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
