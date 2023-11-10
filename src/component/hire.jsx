import React from 'react'
import { image } from "../utils/image";

const Hire = () => {
    return (
        <div className='container-fluid mt-5 pt-5 self-us'>
            <div className='container'>
                <h2 className="font-weight-bold font-size-100 theme-fourthly text-center mobile-friendly-font">Why Should You Hire Us?</h2>
                <div className='d-md-flex mt-5 align-items-center'>
                    <div className='col-md-6 clip-design'>
                        <img className="w-100" src={image.hire} />
                    </div>
                    <div className='col-md-6 exust-font'>
                        <h5>Swasthik Technology Pvt. Ltd. --------</h5>
                        <p>We have over Three years experience in the web design industry. Designing and Developing more than 300 websites of all different sizes and complexity. During this time we have successfully refined and honed our skills, pinpointing the essence of what makes a great website design. We have identified four key components, and in this article, we explain the significance of each.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hire