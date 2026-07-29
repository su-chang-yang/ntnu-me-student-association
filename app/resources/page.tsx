import resourceContent from "../../content/resources.json";
import siteContent from "../../content/site.json";

export default function ResourcesPage() {
  return (
    <main className="page-main">
      <section className="page-title"><div className="container"><p className="overline navy">03 / LINKS</p><h1>常用連結</h1><p>整合課務、校務與學生生活常用入口。</p></div></section>
      <div className="container resource-groups">
        {resourceContent.groups.map(group => (
          <section key={group.title}><h2>{group.title}</h2><div>{group.links.map(link => <a href={link.url} target="_blank" rel="noreferrer" key={link.name}><span>{link.name}</span><b>開啟網站 ↗</b></a>)}</div></section>
        ))}
        <aside className="suggest-box"><div><p className="overline navy">SUGGESTION</p><h2>找不到需要的資源？</h2><p>來信告訴我們，希望網站補上哪些資訊。</p></div><a className="button button-navy" href={`mailto:${siteContent.email}`}>聯絡系學會</a></aside>
      </div>
    </main>
  );
}
