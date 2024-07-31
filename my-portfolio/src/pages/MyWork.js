import React, { useState } from 'react';
import './MyWork.css';
import { useNavigate } from 'react-router-dom';

const MyWork = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

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

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setExpandedIndex(null); // Collapse expanded item when navigating
  };

  const nextSlide = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setExpandedIndex(null); // Collapse expanded item when navigating
  };

  const handleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if the same item is clicked again
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="my-work-container">
      <h2>My Work</h2>
      <div className="carousel">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index === expandedIndex ? 'expanded' : ''} ${expandedIndex !== null && index !== expandedIndex ? 'blurred' : ''}`}
              onClick={() => handleExpand(index)}
            >
              <h3>{project.title}</h3>
              {index === expandedIndex && (
                <>
                  <p><strong>Duration:</strong> {project.duration}</p>
                  <p><strong>Key Skills:</strong> {project.skills}</p>
                  <p>{project.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
        {expandedIndex !== null && (
          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-button prev-slide">‹</button>
            <button onClick={nextSlide} className="carousel-button next-slide">›</button>
          </div>
        )}
      </div>
      <button className="back-button" onClick={() => navigate('/about')}>Back</button>
    </div>
  );
};

export default MyWork;
