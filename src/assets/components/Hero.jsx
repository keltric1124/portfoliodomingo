import './hero.css';
import profileImg from './profile.jpg'; 

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
     
        <div className="hero-text-box">
          <h1>Hi, I'm Yuriz Ronell Domingo</h1>
          <p>
            I am a passionate Developer building clean, modern, and user-friendly 
            web applications. Welcome to my personal space on the web.
          </p>
          <a href="#projects" className="btn">View My Projects</a>
        </div>

        <div className="hero-image-box">
          <img src={profileImg} alt="My Profile" className="profile-photo" />
        </div>

      </div>
    </section>
  );
};
<div className="hero-image-box">
  <div className="image-wrapper">
    <img src={profileImg} alt="My Profile" className="profile-photo" />
  </div>
</div>
export default Hero;