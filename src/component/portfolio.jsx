import React from 'react'
import { image } from "../utils/image";
import { Link } from 'react-router-dom';
import Button from '../template/button';

const Portfolio = () => {
    return (
        <div className='container-fluid mt-5 pt-5'>
            <div className='container'>
                <h2 className="font-weight-bold font-size-100 theme-fourthly text-center mobile-friendly-font">Portfolio</h2>
                <div className='protfolio d-md-flex text-center mt-5'>
                    <div className='col-md-4 box-portfolio'>
                        <div className='curve-design' style={{ backgroundImage: `url(${image.portfoliobg})`, backgroundSize: "cover", height: "400px", borderRadius: "0px 35px" }}>
                            <img className="curve-width" src={image.portfolioicon} />
                            <div className='portfolio-button'>
                                <Link to="http://bbc.elcadia.com/" target="_blank">Project URL <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></Link>
                            </div>
                            <p>BBC Elcadia</p>
                        </div>
                    </div>
                    <div className='col-md-4 box-portfolio'>
                        <div className='curve-design' style={{ backgroundImage: `url(${image.portfoliobg1})`, backgroundSize: "cover", height: "400px", borderRadius: "0px 35px" }}>
                            <img className="curve-width" src={image.portfolioicon1} />
                            <div className='portfolio-button change-btn-color'>
                            <Link to="https://azalea-creations.gr/" target="_blank">Project URL <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></Link>                            </div>
                            <p>Azalea Creations</p>
                        </div>
                    </div>
                    <div className='col-md-4 box-portfolio'>
                        <div className='curve-design' style={{ backgroundImage: `url(${image.portfoliobg2})`, backgroundSize: "cover", height: "400px", borderRadius: "0px 35px" }}>
                            <img className="curve-width" src={image.portfolioicon2} />
                            <div className='portfolio-button change-btn-color1'>
                            <Link to="https://www.wiselylegal.com/" target="_blank">Project URL <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg></Link>                            </div>
                            <p>Wisely Legal</p>
                        </div>
                    </div>
                </div>
               <Button />
            </div>
        </div>
    )
}

export default Portfolio