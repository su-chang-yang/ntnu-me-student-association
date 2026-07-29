import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="site-brand footer-brand"><span className="seal">ME</span><span><b>師大機電系學會</b><small>NTNU ME STUDENT ASSOCIATION</small></span></div>
        <div><h3>網站導覽</h3><Link href="/events">活動消息</Link><Link href="/team">成員介紹</Link><Link href="/resources">常用連結</Link></div>
        <div><h3>聯絡資訊</h3><p>106 台北市大安區和平東路一段 162 號<br />國立臺灣師範大學機電工程學系</p><a href="mailto:ntnume111official@gmail.com">ntnume111official@gmail.com</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 NTNU ME Student Association</span><span>本網站部分活動資料為版型示範，正式內容以系學會公告為準。</span></div>
    </footer>
  );
}
