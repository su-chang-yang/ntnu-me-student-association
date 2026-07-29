import teamContent from "../../content/team.json";
import { publicAsset } from "../content-utils";

export default function TeamPage() {
  return (
    <main className="page-main">
      <section className="page-title"><div className="container"><p className="overline navy">02 / TEAM</p><h1>成員介紹</h1><p>不同職責，同一個目標：讓師大機電的學生生活更完整。</p></div></section>
      <div className="container">
        <div className="term-heading"><span>{teamContent.term}</span><h2>系學會組織</h2><p>幹部資料與照片可由管理後台更新。</p></div>
        <div className="department-grid">
          {teamContent.departments.map((department, i) => (
            <article key={department.name}><small>{String(i + 1).padStart(2, "0")}</small>{department.photo ? <img className="member-photo" src={publicAsset(department.photo)} alt={`${department.name}成員`} /> : <div className="member-placeholder">{department.name.slice(0, 1)}</div>}<h3>{department.name}</h3><p>{department.description}</p></article>
          ))}
        </div>
      </div>
    </main>
  );
}
