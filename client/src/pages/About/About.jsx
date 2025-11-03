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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae neque facilis cupiditate expedita, nihil illo repudiandae voluptatibus maxime nemo enim ut ex suscipit, officia molestias commodi esse similique, quod error.</p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  )
}

export default About