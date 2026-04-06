import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-text-box">
          <h2>About Me</h2>
          <p>
            Hi! I'm <strong>Yuriz Ronell Domingo</strong>. I'm a developer focused on 
            creating clean, functional, and user-friendly web applications.
          </p>
          <p>
            I believe that great software is built at the intersection of 
            rigorous logic and creative design.
          </p>
        </div>

        <div className="highlight-box">
          <p>
            "I’m a web developer with a love for clean design, smooth animations, and intuitive user interfaces."
          </p>
          <hr />
          <p>
            "I enjoy transforming ideas into interactive digital products that make a difference."
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;