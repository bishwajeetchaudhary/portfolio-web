import React from 'react';
import './WorkExp.css';
import { Chrono } from 'react-chrono';

const customContent = [
  <div key="card1">
    <h3>Semidigit Technology OPC Pvt Ltd, Bengaluru India</h3>
    <h4>Python Developer</h4>
    <p>Working on real-time dashboards using React and Tailwind CSS. Integrated APIs, Python, OpenCV, optimized components, and collaborated with team members.</p>
  </div>,
];

// Define data for the timeline (can be more than custom content)
const items = [
  {
    title: "2023-2024"
  },
];

const WorkExp = () => {
  return (
    <>
      <div className=" work" id='workexperience'>
        <div className="container work-exp">
          <h2 className="col-2 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <Chrono items={items} mode="vertical" disableToolbar={true}>
            {customContent}
          </Chrono>
        </div>
      </div>
    </>
  )
}

export default WorkExp