import { React } from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    period: "2022-2026",
    institution: "Jain University, Bengaluru India",
    degree: "B.Tech Computer Science and Engineering"
  },
  {
    id: 2,
    period: "2019-2021",
    institution: "DAV College, Lalitpur Nepal",
    degree: "+2 [PCM]"
  },
  {
    id: 3,
    period: "2010-2019",
    institution: "Shree Saraswati Model Sec. School, Janakpurdham Nepal",
    degree: "1-10"
  },
];

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <div className="timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-date">{edu.period}</div>
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Education;