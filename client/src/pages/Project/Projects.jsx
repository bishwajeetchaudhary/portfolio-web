import React from 'react'
import './Projects.css';
import Spin from 'react-reveal/Spin';
const Projects = () => {
  return (
    <>
      <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          Top Recent projects
        </h2>
        <hr />
        <p className='pb-3 text-center'>
          👉 Here are my recent Projects with source code
        </p>
        {/* card design */}
        <div className='row' id='ads'>
          <Spin>
            <div className='col-md-4'>
              <div className='card rounded'>
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack airbnb</span>
                  <img src="../../../airbnb.png" alt="Project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      airbnb
                    </h5>
                  </div>
                  <a className='ad-btn' href="https://github.com/bishwajeetchaudhary/airbnb">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card rounded'>
                <div className="card-image">
                  <span className="card-notify-badge">Shopping Web App</span>
                  <img src="../../../shopping-web.png" alt="Project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React </span>
                  <span className='card-detail-badge'>CSS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Sleepkart
                    </h5>
                  </div>
                  <a className='ad-btn' href="https://github.com/bishwajeetchaudhary/shopping-cart-app">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card rounded'>
                <div className="card-image">
                  <span className="card-notify-badge">Food Recipe</span>
                  <img src="../../../food_app.png" alt="Project3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">HTML</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Gomato
                    </h6>
                  </div>
                  <a className='ad-btn' href="https://github.com/bishwajeetchaudhary/food-Recipe">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;