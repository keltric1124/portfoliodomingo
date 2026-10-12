import './contact.css';

const Contact = () => (
  <>
    <section id="contact" className="contact-section">
      <div className="contact-container section-shell">
        <p className="section-kicker">Have a meaningful challenge?</p>
        <div className="contact-layout">
          <h2>Let's make it <em>matter.</em></h2>
          <div className="contact-action">
            <p>Have a thoughtful challenge, a promising idea, or a team that cares about craft? I would be glad to hear about it.</p>
            <a className="contact-email" href="mailto:yurizronelldomingo@gmail.com">yurizronelldomingo@gmail.com <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div className="contact-links">
          <a href="https://www.facebook.com/yurizronell.domingo.54/" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">{'\u2197'}</span></a>
          <a href="https://www.instagram.com/yurizlol/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">{'\u2197'}</span></a>
          <a href="tel:09128408633">09128408633 <span aria-hidden="true">{'\u2197'}</span></a>
        </div>
      </div>
    </section>
    <footer className="site-footer">
      <div className="footer-inner section-shell">
        <a className="footer-brand" href="#hero">Yuriz Ronell Domingo</a>
        <span>Thoughtful work, built with care.</span>
        <a href="#hero">Back to top <span aria-hidden="true">&uarr;</span></a>
      </div>
    </footer>
  </>
);

export default Contact;
