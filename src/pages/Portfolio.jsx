import React, { useEffect } from 'react'
import { image } from "../utils/image";
import { Link } from 'react-router-dom';
const Portfolio = () => {

  useEffect(() => {
    document.title = 'Portfolio | Swasthik Technology';
  }, []);

  var data = [
    {
      "projectname": "BBC Elcadia",
      "projectlink": "http://bbc.elcadia.com/",
      "projectimage": image.portfolioicon,
      "projectbgimage": image.portfoliobg
    },
    {
      "projectname": "Azalea Creations",
      "projectlink": "https://azalea-creations.gr/",
      "projectimage": image.portfolioicon1,
      "projectbgimage": image.portfoliobg1
    },
    {
      "projectname": "Wisely Legal",
      "projectlink": "https://www.wiselylegal.com/",
      "projectimage": image.portfolioicon2,
      "projectbgimage": image.portfoliobg2
    },
    {
      "projectname": "Gaura",
      "projectlink": "https://gaura.app/",
      "projectimage": image.portfolioicon3,
      "projectbgimage": image.portfoliobg
    },
    {
      "projectname": "Ifound",
      "projectlink": "http://ifound.global/",
      "projectimage": image.portfolioicon4,
      "projectbgimage": image.portfoliobg1
    },
    {
      "projectname": "CPHR",
      "projectlink": "https://cphracademy.com/",
      "projectimage": image.portfolioicon5,
      "projectbgimage": image.portfoliobg2
    },
    {
      "projectname": "Exoikonomisi",
      "projectlink": "https://exoikonomisi.gr/",
      "projectimage": image.portfolioicon6,
      "projectbgimage": image.portfoliobg
    },
    {
      "projectname": "Skatersedge",
      "projectlink": "https://skatersedge.co.nz/",
      "projectimage": image.portfolioicon7,
      "projectbgimage": image.portfoliobg1
    },
    {
      "projectname": "Tesco",
      "projectlink": "https://thekitty.club/tesco/",
      "projectimage": image.portfolioicon8,
      "projectbgimage": image.portfoliobg2
    },
    {
      "projectname": "Nuwaveprinting",
      "projectlink": "nuwaveprinting.com",
      "projectimage": image.portfolioicon9,
      "projectbgimage": image.portfoliobg
    },
    {
      "projectname": "Downtown Storage",
      "projectlink": "https://farmington-storage.com/",
      "projectimage": image.portfolioicon10,
      "projectbgimage": image.portfoliobg1
    },
    {
      "projectname": "Impact body",
      "projectlink": "https://impactbodyandmind.online/",
      "projectimage": image.portfolioicon11,
      "projectbgimage": image.portfoliobg2
    },
    {
      "projectname": "Drring",
      "projectlink": "/",
      "projectimage": image.portfolioicon14,
      "projectbgimage": image.portfoliobg
    },
    {
      "projectname": "Itlawyers",
      "projectlink": "https://itlawyers.legal/",
      "projectimage": image.portfolioicon12,
      "projectbgimage": image.portfoliobg1
    },
    {
      "projectname": "Heatherwokusch",
      "projectlink": "https://heatherwokusch.com/",
      "projectimage": image.portfolioicon13,
      "projectbgimage": image.portfoliobg2
    },
  ];
  return (
    <>
      <div className='container-fluid mt-5 pt-5 portfolio-loop'>
        <div className='container p-0'>
          <div className='our-work d-md-flex align-items-center'>
            <div className='col-md-6 border-left'>
              <h1 className='theme-primary-color font-weight-bold mobile-fonts' style={{ fontSize: "60px", letterSpacing: "8px" }}>WEB DEVELOPMENT<br />DESIGNS</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
            </div>
            <div className='col-md-6 text-center'>
              <img src={image.aboutbanner} />
            </div>
          </div>
          <h2 className="font-weight-bold font-size-100 theme-fourthly text-center mt-5 pt-5" style={{ fontSize: "60px", letterSpacing: "8px" }}>Portfolio</h2>
          <div className='protfolio d-md-flex text-center mt-5 flex-wrap'>
            {
              data.map((item, key) => {
                const { projectname, projectimage, projectlink, projectbgimage } = item;
                return (
                  <div key={key} className='col-md-4 box-portfolio mt-3 mb-3'>
                    <div className='curve-design' style={{ backgroundImage: `url(${projectbgimage})`, backgroundSize: "cover", height: "400px", borderRadius: "0px 35px" }}>
                      <img className="curve-width" src={projectimage} />
                      <div className='portfolio-button default-color'>
                        <Link to={projectlink} target="_blank">Project URL <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></Link>
                      </div>
                      <p>{projectname}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio