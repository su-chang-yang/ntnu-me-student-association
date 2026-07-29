import Link from "next/link";
import siteContent from "../../content/site.json";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="site-brand footer-brand"><span className="seal">ME</span><span><b>{siteContent.siteName}</b><small>{siteContent.siteNameEn}</small></span></div>
        <div><h3>網站導覽</h3><Link href="/events">活動消息</Link><Link href="/team">成員介紹</Link><Link href="/resources">常用連結</Link><Link href="/admin/">內容管理後台</Link></div>
        <div><h3>聯絡資訊</h3><p>{siteContent.address}</p><a href={`mailto:${siteContent.email}`}>{siteContent.email}</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 NTNU ME Student Association</span><span>網站內容可透過管理後台更新。</span></div>
    </footer>
  );
}
