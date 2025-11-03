import { React } from 'react';
import './Education.css';
import { Chrono } from 'react-chrono';

const customContent = [
  <div key="card1">
    <h3>Jain University, Bengaluru India</h3>
    <p>B.Tech Computer Science and Engineering</p>
  </div>,
  <div key="card2">
    <h3>DAV College, Lalitpur Nepal</h3>
    <p>+2 [PCM]</p>
  </div>,
  <div key="card3">
    <h3>Shree Saraswati Model Sec. School, Janakpurdham Nepal</h3>
    <p>LKG-10</p>
  </div>,
];

// Define data for the timeline (can be more than custom content)
const items = [
  {
    title: "2022-2026", // Corresponds to customContent[0]
    // Other props for item 1 can be provided but won't be used for default rendering if custom content is present
  },
  {
    title: "2019-2021", // Corresponds to customContent[1]
  },
  {
    title: "2008-2019", // Corresponds to customContent[1]
  },
];
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <Chrono items={items} mode="vertical" disableToolbar={true}>
          {customContent}
        </Chrono>
      </div>
    </>
  )
}

export default Education;