import React, { useEffect } from 'react'
import { image } from "../utils/image";
const Services = () => {

  useEffect(() => {
    document.title = 'Services | Swasthik Technology';
  }, []);

  var services = [
    {
      "servicename": "Wordpress Development",
      "serviceimage": image.services1,
    },
    {
      "servicename": "Full Stack Development",
      "serviceimage": image.services2,
    },
    {
      "servicename": "MERN Stack Development",
      "serviceimage": image.services3,
    },
    {
      "servicename": "HTML/CSS/JS Development",
      "serviceimage": image.services4,
    },
    {
      "servicename": "Tech Coaching Class",
      "serviceimage": image.services5,
    },
  ];
  return (
    <div className='container-fluid mt-5 pt-5 services-sections'>
      <div className='container'>
        <div className='our-work d-md-flex align-items-center'>
          <div className='col-md-6 border-left'>
            <h1 className='theme-primary-color font-weight-bold mobile-font ' style={{ fontSize: "60px", letterSpacing: "8px" }}>Customer Services</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
          </div>
          <div className='col-md-6 text-center'>
            <img src={image.servicebanner} />
          </div>
        </div>
        <h2 className="font-weight-bold font-size-100 theme-fourthly text-center mt-5 pt-5 mobile-friendly-font">Our Services</h2>
        <div className='services d-md-flex text-center mt-5 flex-wrap'>
          {
            services.map((item, key) => {
              const { servicename, serviceimage } = item;
              return (
                <div className='col-md-4 serve-hover mt-3 mb-3 custom-font-setup'>
                  <div className='serve serve-image'>
                    <img className="w-50" src={serviceimage} />
                    <h2 className='theme-fourthly font-weight-bold mt-3 custom-fonts mobile-friendly-font'>{servicename}</h2>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>

  )
}

export default Services