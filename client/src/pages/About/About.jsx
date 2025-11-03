import React from 'react'
import './About.css';
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
    <>
      <Jump>
        <div className='about' id='about'>
          <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
              <img src="../../../photo.jpg" alt="profile_pic" />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
              <h1>About me</h1>
              <p>Aspiring full-stack developer and Computer Science undergraduate skilled in JavaScript, Python, and
                modern web technologies. Quick learner with experience in building responsive web applications,
                integrating APIs, and solving real-world problems through code.</p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  )
}

export default About