const events = [
  { date: "09.06", tag: "新生限定", title: "機電新生茶會", copy: "認識系學會、直屬與你的第一群大學夥伴。", tone: "orange" },
  { date: "09.18", tag: "全系活動", title: "系烤晚會", copy: "開學後第一場大型聚會，學長姐帶你玩遍機電。", tone: "blue" },
  { date: "10.23", tag: "職涯講座", title: "機電人的無限可能", copy: "從精密機械到光機電整合，聽業界學長姐分享。", tone: "green" },
];

const services = [
  ["01", "活動企劃", "從迎新、系烤、制服日到機電週，讓系上的每個日常都有值得記住的瞬間。"],
  ["02", "學生權益", "蒐集同學意見、出席系務會議，讓你的聲音被聽見，也讓資訊更透明。"],
  ["03", "學習支援", "整理課程心得、考古資源與升學經驗，陪你把大學每一關走得更穩。"],
  ["04", "跨系交流", "串連校內外系學會與工程領域夥伴，創造更多合作、競賽與交朋友的機會。"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="回到首頁">
          <span className="brand-mark">ME</span>
          <span><b>師大機電系學會</b><small>NTNU ME Student Association</small></span>
        </a>
        <nav aria-label="主要導覽">
          <a href="#about">關於我們</a>
          <a href="#events">活動消息</a>
          <a href="#resources">學生資源</a>
          <a href="#contact">聯絡我們</a>
        </nav>
        <a className="nav-cta" href="#contact">加入我們 ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="grid-lines" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> NATIONAL TAIWAN NORMAL UNIVERSITY</p>
          <h1>機電，不只是<br />齒輪與電路。</h1>
          <p className="lead">我們連結每一位師大機電人。一起學習、一起實作，也一起把四年的大學生活，做成最棒的作品。</p>
          <div className="hero-actions">
            <a className="primary" href="#events">看看最近活動 <b>→</b></a>
            <a className="text-link" href="#about">認識系學會 <b>↘</b></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-a"><i /></div>
          <div className="orbit orbit-b"><i /></div>
          <div className="core"><span>ME</span><small>NTNU</small></div>
          <div className="art-label label-a">PRECISION<br />MECHANICS</div>
          <div className="art-label label-b">OPTO-MECHATRONICS<br />INTEGRATION</div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="ticker" aria-label="核心價值">
        <span>CONNECT 連結</span><i>✦</i><span>CREATE 創造</span><i>✦</i><span>MOVE 前進</span><i>✦</i><span>TOGETHER 一起</span>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker">01 / ABOUT US</div>
        <div className="about-grid">
          <h2>這裡，是每個<br />機電人的<span>共同基地。</span></h2>
          <div>
            <p className="big-copy">系學會不只是一群辦活動的人。我們是同學與系所之間的橋樑，也是讓想法發生、讓彼此靠近的平台。</p>
            <p>不論你是剛踏進校園的新鮮人，還是正在實驗室與專題間衝刺，我們都希望在你需要的時候，提供資訊、資源與一群可靠的夥伴。</p>
          </div>
        </div>
        <div className="stats">
          <div><strong>4</strong><span>大工作部門</span></div>
          <div><strong>10+</strong><span>年度活動</span></div>
          <div><strong>∞</strong><span>機電人的可能</span></div>
        </div>
      </section>

      <section className="events section" id="events">
        <div className="section-head">
          <div><div className="section-kicker">02 / WHAT'S ON</div><h2>近期活動</h2></div>
          <a href="#contact">追蹤最新消息 ↗</a>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className={`event-card ${event.tone}`} key={event.title}>
              <div className="event-date">{event.date}<small>2026</small></div>
              <div className="event-body"><span>{event.tag}</span><h3>{event.title}</h3><p>{event.copy}</p></div>
              <div className="event-arrow">↗</div>
            </article>
          ))}
        </div>
        <p className="demo-note">＊目前活動為網站示範內容，正式上線前可替換為本學期資訊。</p>
      </section>

      <section className="services section" id="resources">
        <div className="section-kicker light">03 / WHAT WE DO</div>
        <div className="section-head service-title"><h2>我們為你做的事</h2><p>讓資訊更容易找到，讓大學生活更有參與感，也讓每一個想法都有開始的機會。</p></div>
        <div className="service-list">
          {services.map(([num, title, copy]) => (
            <article key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p><b>＋</b></article>
          ))}
        </div>
        <div className="quick-links">
          <h3>常用資源 <span>QUICK LINKS</span></h3>
          <div>
            <a href="https://www.me.ntnu.edu.tw/" target="_blank" rel="noreferrer">機電系官網 <b>↗</b></a>
            <a href="https://moodle3.ntnu.edu.tw/" target="_blank" rel="noreferrer">Moodle 數位學習 <b>↗</b></a>
            <a href="https://iportal.ntnu.edu.tw/" target="_blank" rel="noreferrer">校務行政入口 <b>↗</b></a>
            <a href="#contact">系學會意見箱 <b>↗</b></a>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div>
          <div className="section-kicker">04 / STAY CONNECTED</div>
          <h2>有想法？<br /><span>一起把它做出來。</span></h2>
        </div>
        <div className="contact-card">
          <p>想合作、提案，或只是有問題想問？歡迎透過社群聯絡我們。</p>
          <a href="mailto:me@ntnu.edu.tw">聯絡系學會 <b>→</b></a>
          <small>社群與信箱目前為示範連結，可隨時換成正式帳號。</small>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">ME</span><span><b>師大機電系學會</b><small>NTNU ME Student Association</small></span></div>
        <p>106 台北市大安區和平東路一段 162 號<br />國立臺灣師範大學 機電工程學系</p>
        <p className="copyright">© 2026 NTNU ME SA<br />BUILD. CONNECT. MOVE.</p>
      </footer>
    </main>
  );
}
