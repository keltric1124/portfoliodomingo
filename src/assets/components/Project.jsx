import './project.css';

import pixelitesImg from './pixelites.jpg';
import trashtalkImg from './trashtalk.jpg';
import notionImg from './notion.jpg';
const Project = () => {
  const projectData = [
    {
      id: 1,
      title: "Pixelites",
      description: "A platform that helps students learn and have fun!",
      image: pixelitesImg,
      url: "https://www.figma.com/proto/YOUR_PIXELITES_LINK" 
    },
    {
      id: 2,
      title: "TrashTalk",
      description: "An app that helps janitors with their jobs and boosts morale",
      image: trashtalkImg,
      url: "https://www.figma.com/proto/YOUR_TRASHTALK_LINK" 
    },
    {
      id: 3,
      title: "Notion",
      description: "A website for sorting to do lists!",
      image: notionImg,
      url: "https://your-notion-website.com" 
    }
  ];

  return (
    <section id="projects" className="project-section">
      <div className="project-container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          {projectData.map((project) => (
            <a 
              key={project.id} 
              href={project.url} 
              target="_blank" 
              rel="noreferrer" 
              className="project-card-link"
            >
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="view-project">View Project →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;