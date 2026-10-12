import './about.css';

const principles = [
  { number: '01', title: 'Clarify the problem', text: 'Make the real need visible before deciding what to build.' },
  { number: '02', title: 'Shape the experience', text: 'Give the idea structure, direction, and a clear path through.' },
  { number: '03', title: 'Build with care', text: 'Sweat the details that make a product feel coherent and dependable.' },
];

const About = () => (
  <section id="about" className="about-section">
    <div className="about-layout section-shell">
      <div className="about-heading">
        <p className="section-kicker">How I work</p>
        <h2 className="display-heading">Strong work starts before the first line of code.</h2>
      </div>
      <div className="about-detail">
        <p className="about-lede">
          My practice connects product thinking, interface craft, and front-end development.
          I care about making digital experiences feel clear to use and considered in every detail.
        </p>
        <p className="about-supporting">
          That means asking better questions, staying close to the people using the product, and
          treating implementation as part of the experience, not the final handoff.
        </p>
        <div className="principle-list">
          {principles.map((item) => (
            <article className="principle-row" key={item.number}>
              <span className="principle-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
