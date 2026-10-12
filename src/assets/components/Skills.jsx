import './skills.css';

const toolkit = [
  { number: '01', title: 'Interface development', description: 'Building responsive, interactive experiences for the web.', skills: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { number: '02', title: 'Application foundations', description: 'Working across the application layer and data stack.', skills: ['Node.js', 'Express', 'MongoDB', 'Java', 'Python'] },
  { number: '03', title: 'Workflow & delivery', description: 'Version control and platforms for shipping web projects.', skills: ['GitHub', 'Vercel', 'Render'] },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-container section-shell">
      <div className="skills-heading">
        <div>
          <p className="section-kicker">Tools I work with</p>
          <h2 className="display-heading">A practical toolkit. A thoughtful point of view.</h2>
        </div>
        <p className="section-intro">Technology is a means to a better experience. Here are the tools I use to take digital ideas from interface to implementation.</p>
      </div>
      <div className="skills-grid">
        {toolkit.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top"><span>{group.number}</span><span className="skill-arrow" aria-hidden="true">{'\u2197'}</span></div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-list">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
