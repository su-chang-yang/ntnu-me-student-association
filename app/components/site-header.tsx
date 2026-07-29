"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import siteContent from "../../content/site.json";

const nav = [
  ["/", "首頁"],
  ["/events", "活動"],
  ["/team", "成員介紹"],
  ["/resources", "常用連結"],
  ["/about", "關於"],
];

export function SiteHeader() {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="site-brand" href="/">
        <span className="seal">ME</span>
        <span><b>{siteContent.siteName}</b><small>{siteContent.siteNameEn}</small></span>
      </Link>
      <nav aria-label="主要導覽">
        {nav.map(([href, label]) => <Link className={path === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
      </nav>
      <a className="header-social" href={siteContent.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
    </header>
  );
}
