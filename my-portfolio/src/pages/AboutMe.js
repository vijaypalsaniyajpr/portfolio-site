import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1>About Me</h1>
        <p>Hello! I'm Vijay Kumar Palsaniya, a dedicated and motivated computer engineer with proficiency in various programming languages. I'm eager to gain practical experience and make a meaningful impact in a dynamic environment.</p>
        <div className="boxes-container">
          <Link to="/my-work" className="box">
            My Work
          </Link>
          <Link to="/contact" className="box">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
