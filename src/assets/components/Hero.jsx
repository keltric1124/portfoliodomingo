import './hero.css';
import profileImg from './profile.jpg';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-shell section-shell">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span className="status-dot" /> Experienced developer &middot; Product-minded &middot; Detail-driven</p>
        <h1>Good ideas deserve <em>great execution.</em></h1>
        <p className="hero-summary">
          I'm Yuriz Ronell Domingo. I build useful digital experiences with a clear point of view,
          thoughtful interaction, and care for the details that make them work.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="hero-primary">Explore selected work <span aria-hidden="true">&darr;</span></a>
          <a href="mailto:yurizronelldomingo@gmail.com" className="hero-secondary">Start a conversation <span aria-hidden="true">{'\u2197'}</span></a>
        </div>
        <div className="hero-note">
          <span className="hero-note-line" />
          <p>From the first question to the final interaction.</p>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-index">PORTFOLIO <span>SELECTED WORK</span></div>
        <div className="portrait-frame">
          <img src={profileImg} alt="Yuriz Ronell Domingo" className="profile-photo" />
        </div>
        <div className="portrait-caption"><span>YURIZ RONELL DOMINGO</span><span>DEVELOPER</span></div>
        <div className="portrait-orbit" aria-hidden="true">DESIGN THINKING&nbsp; &middot; &nbsp;ENGINEERING&nbsp; &middot; &nbsp;CRAFT&nbsp; &middot; &nbsp;</div>
      </div>
    </div>
    <div className="hero-bottom section-shell">
      <span>Digital product development</span>
      <span>Selected work and capabilities</span>
      <a href="#about">Scroll to explore <span aria-hidden="true">&darr;</span></a>
    </div>
  </section>
);

export default Hero;
