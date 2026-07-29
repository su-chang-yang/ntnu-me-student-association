import eventContent from "../../content/events.json";
import { publicAsset } from "../content-utils";

type AlbumPhoto = {
  image: string;
  alt: string;
};

type ActivityAlbum = {
  title: string;
  description?: string;
  cover?: string;
  url?: string;
  photos?: AlbumPhoto[];
};

export default function EventsPage() {
  const gallery = eventContent.gallery ?? [];
  const albums = eventContent.albums as ActivityAlbum[];
  const loopGallery = gallery.length > 1 ? [...gallery, ...gallery] : gallery;

  return (
    <main className="page-main">
      <section className="page-title simple-title">
        <div className="container">
          <p className="overline navy">01 / EVENTS</p>
          <div>
            <h1>活動消息</h1>
            <p>查看本學期活動、報名資訊與活動紀錄。</p>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="photo-preview" aria-label="活動照片">
          <div className="container preview-heading">
            <span>活動照片</span>
            <small>系學會活動紀錄</small>
          </div>
          <div className={`marquee ${gallery.length === 1 ? "marquee-static" : ""}`}>
            <div className="marquee-track">
              {loopGallery.map((photo, index) => (
                <figure className="marquee-photo" key={`${photo.image}-${index}`}>
                  <img
                    src={publicAsset(photo.image)}
                    alt={index < gallery.length ? photo.alt : ""}
                    aria-hidden={index >= gallery.length}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {albums.length > 0 && (
        <section className="container album-section">
          <div className="section-heading compact-heading">
            <div>
              <p className="overline navy">ALBUMS</p>
              <h2>活動相簿</h2>
            </div>
            <p>收錄系學會各項活動的照片與回憶。</p>
          </div>
          <div className="album-grid">
            {albums.map((album) => {
              const albumPhotos = album.photos ?? [];
              const cover = album.cover || albumPhotos[0]?.image;

              return (
                <article className="album-card" key={album.title}>
                  {cover && (
                    <div className="album-cover">
                      <img src={publicAsset(cover)} alt={`${album.title}相簿封面`} />
                    </div>
                  )}
                  <div className="album-copy">
                    <h3>{album.title}</h3>
                    {album.description && <p>{album.description}</p>}
                    {albumPhotos.length > 0 && (
                      <div className="album-thumbnails" aria-label={`${album.title}照片`}>
                        {albumPhotos.slice(0, 4).map((photo) => (
                          <img src={publicAsset(photo.image)} alt={photo.alt} key={photo.image} />
                        ))}
                      </div>
                    )}
                    {album.url && (
                      <a href={album.url} target="_blank" rel="noreferrer">
                        查看完整相簿 ↗
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="container events-content">
        <div className="section-heading compact-heading">
          <div>
            <p className="overline navy">UPCOMING</p>
            <h2>近期活動</h2>
          </div>
          <p>掌握活動日期、最新狀態與報名資訊。</p>
        </div>
        <div className="event-poster-list">
          {eventContent.events.map((event, index) => (
            <article className="event-poster-row" key={`${event.date}-${event.title}`}>
              {event.poster ? (
                <div className="poster-slot poster-image">
                  <img src={publicAsset(event.poster)} alt={`${event.title}活動海報`} />
                </div>
              ) : (
                <div className={`poster-slot poster-${index + 1}`}>
                  <small>ACTIVITY</small>
                  <strong>{event.posterTitle}</strong>
                  <span>海報尚待公告</span>
                </div>
              )}
              <div className="event-info">
                <div className="event-meta">
                  <time>{event.year}.{event.date}</time>
                  <span>{event.type}</span>
                </div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <div className="event-status">
                  <span>{event.status}</span>
                  <span className="event-note">活動詳情將另行公告</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container archive-line">
        <div>
          <p className="overline navy">ARCHIVE</p>
          <h2>歷屆活動</h2>
        </div>
        <p>迎新宿營、機電週、系運等歷屆活動照片與紀錄將陸續整理上線。</p>
        <span>整理中</span>
      </section>
    </main>
  );
}
