const events = [
  { date: "09.06", type: "新生專區", title: "115 學年度新生茶會", desc: "認識系學會、直屬制度與系上資源，活動資訊將於社群正式公告。", state: "即將開放", poster: "新生茶會" },
  { date: "09.18", type: "系上活動", title: "機電系烤晚會", desc: "全系交流活動，詳細時間、地點與報名方式待公告。", state: "籌備中", poster: "系烤晚會" },
  { date: "10.23", type: "職涯發展", title: "機電人的無限可能", desc: "邀請系友分享精密機械、光機電整合與職涯選擇。", state: "籌備中", poster: "職涯講座" },
];

export default function EventsPage() {
  return (
    <main className="page-main">
      <section className="page-title simple-title">
        <div className="container">
          <p className="overline navy">01 / EVENTS</p>
          <div><h1>活動消息</h1><p>查看本學期活動、報名資訊與歷屆紀錄。</p></div>
        </div>
      </section>

      <section className="photo-preview" aria-label="活動照片預覽">
        <div className="container preview-heading"><span>活動照片預覽</span><small>示意素材・可替換為系學會實際照片</small></div>
        <div className="marquee">
          <div className="marquee-track">
            <img src="/activity-preview-v1.png" alt="校園活動、機電實作、系烤與職涯講座示意照片" />
            <img src="/activity-preview-v1.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="container events-content">
        <div className="section-heading compact-heading">
          <div><p className="overline navy">UPCOMING</p><h2>近期活動</h2></div>
          <p>每個活動皆保留標準直式海報空間，建議尺寸 1080 × 1350 px。</p>
        </div>
        <div className="event-poster-list">
          {events.map((event, index) => (
            <article className="event-poster-row" key={event.title}>
              <div className={`poster-slot poster-${index + 1}`} aria-label={`${event.title}海報預留位置`}>
                <small>POSTER</small>
                <strong>{event.poster}</strong>
                <span>1080 × 1350</span>
              </div>
              <div className="event-info">
                <div className="event-meta"><time>2026.{event.date}</time><span>{event.type}</span></div>
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
                <div className="event-status"><span>{event.state}</span><button type="button" disabled>活動詳情將公告</button></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container archive-line">
        <div><p className="overline navy">ARCHIVE</p><h2>歷屆活動</h2></div>
        <p>迎新宿營、機電週、系運等歷屆活動照片與紀錄將陸續整理上線。</p>
        <span>整理中</span>
      </section>
    </main>
  );
}
