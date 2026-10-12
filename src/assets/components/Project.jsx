import './project.css';
import pixelitesImg from './pixelites.jpg';
import trashtalkImg from './trashtalk.jpg';
import notionImg from './notion.jpg';

const projects = [
  {
    number: '01',
    title: 'Pixelites',
    category: 'Learning experience',
    description: 'A student-focused platform designed to make learning feel more engaging and enjoyable.',
    image: pixelitesImg,
    alt: 'Pixelites learning platform concept preview',
    tone: 'project-lime',
  },
  {
    number: '02',
    title: 'TrashTalk',
    category: 'Workplace support',
    description: 'An app concept to support janitors in their day-to-day work and help build team morale.',
    image: trashtalkImg,
    alt: 'TrashTalk workplace support app concept preview',
    tone: 'project-blue',
  },
  {
    number: '03',
    title: 'Notion',
    category: 'Personal productivity',
    description: 'A task-list experience focused on bringing everyday to-dos into a clearer, more manageable flow.',
    image: notionImg,
    alt: 'Task management website concept preview',
    tone: 'project-orange',
  },
];

const Project = () => (
  <section id="projects" className="project-section">
    <div className="project-container section-shell">
      <div className="project-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="display-heading">Ideas made tangible.</h2>
        </div>
        <p className="section-intro">A selection of digital product explorations, each shaped around a practical need and a more thoughtful way to meet it.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={`project-row ${project.tone}`} key={project.number}>
            <div className="project-visual">
              <img src={project.image} alt={project.alt} loading="lazy" />
              <span className="project-visual-number">{project.number}</span>
            </div>
            <div className="project-copy">
              <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-rule" />
              <span className="project-caption">Product exploration &middot; Experience direction</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Project;
