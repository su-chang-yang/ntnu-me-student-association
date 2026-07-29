const eventGroups = [
  { title: "活動報名中", items: [{ date: "09.06", title: "115 學年度新生茶會", desc: "認識系學會、直屬制度與系上資源，活動資訊將於社群正式公告。", state: "即將開放" }] },
  { title: "即將舉辦", items: [{ date: "09.18", title: "機電系烤晚會", desc: "全系交流活動，詳細時間、地點與報名方式待公告。", state: "籌備中" }, { date: "10.23", title: "機電人的無限可能", desc: "邀請系友分享精密機械、光機電整合與職涯選擇。", state: "籌備中" }] },
  { title: "歷屆活動", items: [{ date: "ARCHIVE", title: "迎新宿營・機電週・系運", desc: "歷屆活動照片與紀錄將陸續整理上線。", state: "整理中" }] },
];

export default function EventsPage() {
  return (
    <main className="page-main">
      <PageTitle no="01" en="EVENTS" title="活動消息" copy="集中查看本學期活動、報名資訊與歷屆紀錄。" />
      <div className="container content-stack">
        {eventGroups.map(group => (
          <section className="event-group" key={group.title}>
            <h2>{group.title}</h2>
            <div>
              {group.items.map(item => <article className="event-line" key={item.title}><time>{item.date}</time><div><h3>{item.title}</h3><p>{item.desc}</p></div><span>{item.state}</span></article>)}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function PageTitle({ no, en, title, copy }: { no: string; en: string; title: string; copy: string }) {
  return <section className="page-title"><div className="container"><p className="overline">{no} / {en}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}
