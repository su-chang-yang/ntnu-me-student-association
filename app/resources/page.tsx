const resources = [
  ["系所與課務", [["機電工程學系官網", "https://www.me.ntnu.edu.tw/"], ["Moodle 數位學習", "https://moodle3.ntnu.edu.tw/"], ["教務處", "https://www.aa.ntnu.edu.tw/"]]],
  ["校務系統", [["校務行政入口", "https://iportal.ntnu.edu.tw/"], ["學生請假系統", "https://iportal.ntnu.edu.tw/"], ["圖書館", "https://www.lib.ntnu.edu.tw/"]]],
  ["學生生活", [["學生事務處", "https://www.sa.ntnu.edu.tw/"], ["健康中心", "https://health.sa.ntnu.edu.tw/"], ["學生輔導中心", "https://counseling.sa.ntnu.edu.tw/"]]],
];

export default function ResourcesPage() {
  return (
    <main className="page-main">
      <section className="page-title"><div className="container"><p className="overline">03 / LINKS</p><h1>常用連結</h1><p>整合課務、校務與學生生活常用入口。</p></div></section>
      <div className="container resource-groups">
        {resources.map(([group, links]) => (
          <section key={group as string}><h2>{group as string}</h2><div>{(links as string[][]).map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={name}><span>{name}</span><b>開啟網站 ↗</b></a>)}</div></section>
        ))}
        <aside className="suggest-box"><div><p className="overline navy">SUGGESTION</p><h2>找不到需要的資源？</h2><p>來信告訴我們，希望網站補上哪些資訊。</p></div><a className="button button-navy" href="mailto:ntnume111official@gmail.com">聯絡系學會</a></aside>
      </div>
    </main>
  );
}
