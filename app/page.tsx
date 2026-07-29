import Link from "next/link";
import eventContent from "../content/events.json";
import siteContent from "../content/site.json";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-inner">
          <p className="overline">NATIONAL TAIWAN NORMAL UNIVERSITY</p>
          <h1>國立臺灣師範大學<br />機電工程學系學會</h1>
          <p className="hero-en">NTNU MECHATRONIC ENGINEERING<br />STUDENT ASSOCIATION</p>
          <p className="hero-lead">{siteContent.homeLead}</p>
          <div className="hero-buttons">
            <Link className="button button-light" href="/about">認識系學會</Link>
            <Link className="button button-outline" href="/events">瀏覽活動消息</Link>
          </div>
        </div>
        <div className="hero-system" aria-hidden="true">
          <span className="system-no">ME</span>
          <div className="gear gear-large" />
          <div className="gear gear-small" />
          <p>PRECISION MECHANICS<br />OPTO-MECHATRONICS</p>
        </div>
      </section>

      <section className="intro-band">
        <p className="overline">OUR ROLE</p>
        <div>
          <h2>我們是系上同學與系所之間的橋樑。</h2>
          <p>系學會以學生自治為核心，辦理系上活動、協助資訊傳遞、蒐集學生意見，並持續建立可被下一屆沿用的制度與資源。</p>
        </div>
        <Link className="text-arrow" href="/about">了解組織與任務 <span>→</span></Link>
      </section>

      <section className="home-news container">
        <div className="section-heading">
          <div><p className="overline navy">LATEST</p><h2>最新消息</h2></div>
          <Link className="text-arrow" href="/events">查看全部活動 <span>→</span></Link>
        </div>
        <div className="notice-list">
          {eventContent.events.slice(0, 3).map((item) => (
            <Link className="notice-row" href="/events" key={item.title}>
              <time>{item.date}<small>{item.year}</small></time>
              <span className="tag">{item.type}</span>
              <div><h3>{item.title}</h3><p>{item.status}</p></div>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="portal">
        <div className="container">
          <div className="section-heading">
            <div><p className="overline">STUDENT PORTAL</p><h2>學生常用入口</h2></div>
            <Link className="text-arrow light-link" href="/resources">更多學生資源 <span>→</span></Link>
          </div>
          <div className="portal-grid">
            <a href="https://www.me.ntnu.edu.tw/" target="_blank" rel="noreferrer"><small>01</small><h3>機電系官網</h3><span>Department Website ↗</span></a>
            <a href="https://moodle3.ntnu.edu.tw/" target="_blank" rel="noreferrer"><small>02</small><h3>Moodle</h3><span>Digital Learning ↗</span></a>
            <a href="https://iportal.ntnu.edu.tw/" target="_blank" rel="noreferrer"><small>03</small><h3>校務行政</h3><span>NTNU iPortal ↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
