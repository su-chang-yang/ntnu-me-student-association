import eventContent from "../../content/events.json";
import { publicAsset } from "../content-utils";

export default function EventsPage() {
  const gallery = eventContent.gallery.length ? eventContent.gallery : [{ image: "/activity-preview-v1.png", alt: "活動照片預覽" }];
  const loopGallery = [...gallery, ...gallery];

  return (
    <main className="page-main">
      <section className="page-title simple-title">
        <div className="container"><p className="overline navy">01 / EVENTS</p><div><h1>活動消息</h1><p>查看本學期活動、報名資訊與歷屆紀錄。</p></div></div>
      </section>
      <section className="photo-preview" aria-label="活動照片預覽">
        <div className="container preview-heading"><span>活動照片預覽</span><small>後台可新增、排序或替換照片</small></div>
        <div className="marquee"><div className="marquee-track">
          {loopGallery.map((photo, index) => <img src={publicAsset(photo.image)} alt={index < gallery.length ? photo.alt : ""} aria-hidden={index >= gallery.length} key={`${photo.image}-${index}`} />)}
        </div></div>
      </section>
      <section className="container events-content">
        <div className="section-heading compact-heading"><div><p className="overline navy">UPCOMING</p><h2>近期活動</h2></div><p>活動內容、海報與照片皆可從管理後台更新。</p></div>
        <div className="event-poster-list">
          {eventContent.events.map((event, index) => (
            <article className="event-poster-row" key={`${event.date}-${event.title}`}>
              {event.poster ? <div className="poster-slot poster-image"><img src={publicAsset(event.poster)} alt={`${event.title}活動海報`} /></div> : <div className={`poster-slot poster-${index + 1}`}><small>POSTER</small><strong>{event.posterTitle}</strong><span>1080 × 1350</span></div>}
              <div className="event-info"><div className="event-meta"><time>{event.year}.{event.date}</time><span>{event.type}</span></div><h2>{event.title}</h2><p>{event.description}</p><div className="event-status"><span>{event.status}</span><button type="button" disabled>活動詳情將公告</button></div></div>
            </article>
          ))}
        </div>
      </section>
      <section className="container archive-line"><div><p className="overline navy">ARCHIVE</p><h2>歷屆活動</h2></div><p>迎新宿營、機電週、系運等歷屆活動照片與紀錄將陸續整理上線。</p><span>整理中</span></section>
    </main>
  );
}
