import React, { useEffect } from 'react'
import { image } from "../utils/image";
import CntForm from '../template/CntForm';



const Contact = () => {

  useEffect(() => {
    document.title = 'Contact Us | Swasthik Technology';
  }, []);

  return (
    <div className='container-fluid pt-5 contact-us-page'>
      <div className='container'>
        <div className='our-work d-md-flex align-items-center'>
          <div className='col-md-6 border-left'>
            <h1 className='theme-primary-color font-weight-bold mobile-font' style={{ fontSize: "60px", letterSpacing: "8px" }}>Have Any Questions?</h1>
            <p>Please feel free to contact us regarding any website design that you need created. If you’re looking to build a website for your business or even just to chat, than we are here for you. At Swasthik Technology we reply prompt to all messages and calls and help you achieve your goals and needs.</p>
          </div>
          <div className='col-md-6 text-center'>
            <img src={image.contact_banner} />
          </div>
        </div>
        <div className='enquiry-details pt-5 mt-5 pb-5'>
          <div className='d-md-flex some-enquiry-field'>
            <div className='col-md-4 enquiry-block'>
              <div className="contact-detalsbox text-center">
                <img src={image.email} alt="Online Support" title="Online Support" />
                <a href="mailto:swasthiktechnology@outlook.com" target="_blank">swasthiktechnology@outlook.com</a>
                <span style={{ color: "#FFFFFF" }}><strong>Online Support</strong></span>
              </div>
            </div>
            <div className='col-md-4 enquiry-block'>
              <div className="contact-detalsbox2 text-center">
                <img src={image.phone} alt="Call Support" title="Call Support" />
                <a href="tel:7047671849" >+91 7047671849</a>
                <span style={{ color: "#FFFFFF" }}><strong>Call Support</strong></span>
              </div>
            </div>
            <div className='col-md-4 enquiry-block'>
              <div className="contact-detalsbox3 text-center">
                <img src={image.whatsapp} alt="Whatsapp Support" title="Whatsapp Support" />
                <a href="https://wa.me/7047671849" target="_blank" >+91 7047671849</a>
                <span style={{ color: "#FFFFFF" }}><strong>Whatsapp</strong></span>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-form pt-5'>
          <div className='col-md-6 m-auto'>
            <CntForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact