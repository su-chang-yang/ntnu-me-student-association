import aboutContent from "../../content/about.json";
import siteContent from "../../content/site.json";

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-title"><div className="container"><p className="overline navy">04 / ABOUT</p><h1>關於系學會</h1><p>為師生、學長姊與學弟妹之間建立長期而可靠的連結。</p></div></section>
      <div className="container about-page">
        <section className="mission"><p className="overline navy">OUR MISSION</p><h2>{aboutContent.headline}</h2><div>{aboutContent.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
        <section className="principles">{aboutContent.principles.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</section>
        <section className="contact-panel"><div><p className="overline navy">CONTACT</p><h2>聯絡我們</h2><p>合作邀請、意見反映或網站內容更新，歡迎來信。</p></div><div><b>電子信箱</b><a href={`mailto:${siteContent.email}`}>{siteContent.email}</a><b>通訊地址</b><p>{siteContent.address}</p></div></section>
      </div>
    </main>
  );
}
