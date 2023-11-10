import React from 'react'
import { image } from "../utils/image";

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel-fade carousel slide" data-ride="carousel">
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol> */}
      <div className="carousel-inner">
        <div className="carousel-item revslider active custom-padding" style={{ backgroundImage: `url(${image.slider})`, backgroundSize: "cover" }}>
          <div className='col-md-5'>
            <h1 className='theme-fourthly font-weight-bold font-size-100'>High-Quality Web Design and<br></br> Web development Company</h1>
          </div>
        </div>
        <div className="carousel-item revslider custom-padding" style={{ backgroundImage: `url(${image.slider1})`, backgroundSize: "cover" }}>
          <div className='col-md-5'>
            <h1 className='theme-fourthly font-weight-bold font-size-100'>High-Quality Web Design and<br></br> Web development Company</h1>
          </div>
        </div>
        <div className="carousel-item revslider custom-padding" style={{ backgroundImage: `url(${image.slider2})`, backgroundSize: "cover" }}>
          <div className='col-md-5'>
            <h1 className='theme-fourthly font-weight-bold font-size-100'>High-Quality Web Design and<br></br> Web development Company</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;