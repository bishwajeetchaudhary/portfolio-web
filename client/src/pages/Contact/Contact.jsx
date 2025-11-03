import React from 'react'
import './Contact.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className=" contact" id='contacts'>
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row">
                  <img src="https://cdn-icons-png.flaticon.com/512/8643/8643765.png" alt="Contact" className='image' />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <div className="row">
                    <h6>Contact With
                      <FaLinkedin color='blue' size={30} className='ms-2' />
                      <FaGithub color='black' size={30} className='ms-2' />
                      <FaFacebook color='blue' size={30} className='ms-2' />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className='or text-center'>OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input type="text" name="name" placeholder='Enter your Name' className='mb-3' />
                  </div>
                  <div className="row px-3">
                    <input type="email" name="email" placeholder='Enter your Email Address' className='mb-3' />
                  </div>
                  <div className="row px-3">
                    <textarea type="text" name="msg" placeholder='Write your message' className='mb-3' />
                  </div>
                  <div className="row px-3">
                    <button className='button' type='submit'>SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact