import React from 'react';
import './WorkExp.css';

const workExperiences = [
  {
    id: 1,
    period: "2023-2024",
    company: "Semidigit Technology OPC Pvt Ltd, Bengaluru India",
    position: "Python Developer",
    description: "Working on real-time dashboards using React and Tailwind CSS. Integrated APIs, Python, OpenCV, optimized components, and collaborated with team members."
  },
];

const WorkExp = () => {
  return (
    <>
      <div className="work" id='workexperience'>
        <div className="container work-exp">
          <h2 className="mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <div className="timeline">
            {workExperiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-date">{exp.period}</div>
                  <h3>{exp.company}</h3>
                  <h4>{exp.position}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkExp;