import React, { useEffect } from 'react';
import { image } from "../utils/image";
import Hire from '../component/hire';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Swasthik Technology';
  }, []);

  return (
    <div className='company-description pb-5 mb-5'>
      <div className='container-fluid'>
        <div className='container p-0'>
          <div className='our-work d-md-flex align-items-center'>
            <div className='col-md-6 border-left'>
              <h1 className='font-weight-bold theme-primary-color mobile-font' style={{ fontSize: "60px", letterSpacing: "8px" }}>The Swasthik Technology Experience</h1>
              <h2 className="mobile-second-font" style={{ letterSpacing: "4px", fontWeight: "bold" }}>We love what we do. And are inspired to give you the best experience we can.</h2>
            </div>
            <div className='col-md-6 text-center'>
              <img src={image.aboutimages} />
            </div>
          </div>
          <div className='container-fluid mt-5 pt-5 agency-description'>
            <div className='container p-0'>
              <div className='d-md-flex mt-5 align-items-center'>
                <div className='col-md-6 clip-design'>
                  <img className="w-100" src={image.hire} />
                </div>
                <div className='col-md-6 exust-font p-0 mobile-margin'>
                  <h5>About Our Agency</h5>
                  <p>We have over Three years experience in the web design industry. Designing and Developing more than 300 websites of all different sizes and complexity. During this time we have successfully refined and honed our skills, pinpointing the essence of what makes a great website design. We have identified four key components, and in this article, we explain the significance of each.</p>
                  <div className='about-counter d-md-flex flex-wrap align-items-center'>
                    <div className='col-md-6 s-box'>
                      <h6 className='counter-curve'>100%</h6>
                      <span>CLIENT RETENTION</span>
                    </div>
                    <div className='col-md-6 s-box'>
                      <h6 className='counter-curve'>10</h6>
                      <span>YEARS OF SERVICE</span>
                    </div>
                    <div className='col-md-6 s-box'>
                      <h6 className='counter-curve'>12+</h6>
                      <span>PROFESSIONALS</span>
                    </div>
                    <div className='col-md-6 s-box'>
                      <h6 className='counter-curve'>200+</h6>
                      <span>SATISFIED CLIENTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='swasthik-ceo'>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
