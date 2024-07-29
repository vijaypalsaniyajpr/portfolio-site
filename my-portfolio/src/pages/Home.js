import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import profilePic from '../assets/profile-pic.jpg';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <img src={profilePic} alt="Vijay Kumar Palsaniya" className="profile-pic" />
          <div className="intro">
            <h1>Hi, I'm Vijay Kumar Palsaniya</h1>
            <Link to="/about">
              <button>Let's Start</button>
            </Link>
            <a href="/resume.pdf" download>
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
