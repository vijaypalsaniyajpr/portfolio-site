import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span><a href="mailto:vijaypalsaniyajaipur@gmail.com">vijaypalsaniyajaipur@gmail.com</a></span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} />
            <span><a href="tel:+919024970125">+91-9024970125</a></span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Pune, India</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faGithub} />
            <span><a href="https://github.com/vijaypalsaniyajpr" target="_blank" rel="noopener noreferrer">github.com/vijaypalsaniyajpr</a></span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <button className="back-button" onClick={() => navigate('/about')}>Back</button>
    </div>
  );
};

export default Contact;
