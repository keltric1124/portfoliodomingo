import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Java", "Python"]
    },
    {
      title: "Tools & Deployment",
      skills: ["GitHub", "Vercel", "Render"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;