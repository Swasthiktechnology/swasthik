import React from 'react'
import { image } from "../utils/image";

const Services = () => {
    return (
        <div className='container-fluid mt-5 pt-5'>
            <div className='container'>
                <h2 className="font-weight-bold font-size-100 theme-fourthly text-center mobile-friendly-font">Our Services</h2>
                <div className='services d-md-flex text-center mt-5'>
                    <div className='col-md-4 serve-hover'>
                        <div className='serve serve-image'>
                            <img className="w-50" src={image.services1} />
                            <h2 className='theme-fourthly font-weight-bold mt-3'>Wordpress Development</h2>
                        </div>
                    </div>
                    <div className='col-md-4 serve-hover'>
                        <div className='serve serve-image'>
                            <img className="w-50" src={image.services2} />
                            <h2 className='theme-fourthly font-weight-bold mt-3'>Full Stack Development</h2>
                        </div>
                    </div>
                    <div className='col-md-4 serve-hover'>
                        <div className='serve serve-image'>
                            <img className="w-50" src={image.services3} />
                            <h2 className='theme-fourthly font-weight-bold mt-3'>MERN Stack Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services