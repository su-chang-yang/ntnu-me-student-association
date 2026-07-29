const departments = [
  ["會長團", "統籌系學會方向、對外代表與跨部門協調。"],
  ["活動部", "規劃迎新、系烤、系週與各項交流活動。"],
  ["美宣部", "負責視覺設計、社群內容與活動宣傳。"],
  ["公關部", "經營外部合作、贊助與跨系交流。"],
  ["行政部", "會議紀錄、文書管理與制度傳承。"],
  ["財務部", "預算編列、收支管理與財務公開。"],
];

export default function TeamPage() {
  return (
    <main className="page-main">
      <section className="page-title"><div className="container"><p className="overline">02 / TEAM</p><h1>成員介紹</h1><p>不同職責，同一個目標：讓師大機電的學生生活更完整。</p></div></section>
      <div className="container">
        <div className="term-heading"><span>115 學年度</span><h2>系學會組織</h2><p>正式幹部姓名與照片可於新任名單確認後補上。</p></div>
        <div className="department-grid">
          {departments.map(([name, copy], i) => <article key={name}><small>{String(i + 1).padStart(2, "0")}</small><div className="member-placeholder">{name.slice(0, 1)}</div><h3>{name}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </main>
  );
}
