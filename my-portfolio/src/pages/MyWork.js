import React from 'react';
import './MyWork.css';
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Elegance Engine: AI based virtual fashion stylist",
      duration: "08/2023 - 06/2024",
      skills: "AI modeling, Python, E-commerce APIs, Front-End Web Development, PyTorch, Machine Learning",
      description: "Offering virtual try-on using SMPL and SMPLX models."
    },
    {
      title: "Real Time Fire Detection System",
      duration: "01/2024 - 05/2024",
      skills: "Altralytics, YoloV8, Python, Computer Vision, NumPy",
      description: "Swiftly identify flames and smoke in video streams."
    },
    {
      title: "Collaborative Classroom Using Google Docs API",
      duration: "07/2023 - 12/2023",
      skills: "Google Docs API, Front-End Web Development",
      description: "Enhances traditional teaching by enabling real-time collaboration between students and educators."
    },
    {
      title: "Live Object Detection System",
      duration: "04/2023 - 09/2023",
      skills: "Altralytics, YoloV5, NumPy, Python, Computer Vision",
      description: "Utilizes a single neural network to swiftly and accurately identify objects in images and video streams. Suitable for surveillance, autonomous driving, and augmented reality applications."
    }
  ];

  return (
    <div className="my-work-container">
      <div className="my-work-content">
        <h2>My Work</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Key Skills:</strong> {project.skills}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="back-button" onClick={() => navigate('/about')}>Back</button>
    </div>
  );
};

export default MyWork;
