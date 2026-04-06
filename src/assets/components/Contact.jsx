import './contact.css';import './contact.css';

const Contact = () => {
  const contacts = [
    { label: "Facebook", value: "Yuriz Ronell Domingo", link: "https://www.facebook.com/yurizronell.domingo.54/" },
    { label: "Instagram", value: "@YurizLol", link: "https://www.instagram.com/yurizlol/" },
    { label: "Phone", value: "09128408633", link: "tel:09128408633" },
    { label: "Gmail", value: "yurizronelldomingo@gmail.com", link: "mailto:yurizronelldomingo@gmail.com" }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Let's collaborate on your next big project!</p>
        
        <div className="contact-grid">
          {contacts.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-info">
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;