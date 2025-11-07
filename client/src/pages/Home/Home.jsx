import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Bishwajeet_Resume.pdf'
import { FaMoon } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import './home.css';

const Home = () => {
  const [theme, setTheme] = useTheme()
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className='container-fluid home-container ' id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaMoon size={30} /> : <FiSun size={30} />}
        </div>
        <div className='container home-content'>
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter options={{
              strings: ["FullStack Developer!", "Mern Stack Developer!", "Python Developer!"],
              autoStart: true,
              loop: true,
            }}
            />
          </h1>
          <div className='home-buttons'>
            <a className='btn btn-hire'
              href="https://whatsapp.com/send?phone=9279667475"
              rel="noreferrer"
              target='blank'
            >Hire Me</a>
            <a className='btn btn-cv' href={Resume} download='Bishwajeet.pdf'>Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home