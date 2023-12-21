// src/components/Contact.js
import React from 'react';
import '../App.css';
import { FaEnvelope } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook, AiFillGithub, AiFillLinkedin   } from "react-icons/ai";

const Contact = () => {
  const iconSize = 80;
  return (
    <section id="contact">
      <div className='container'>
        <a href="javascript:void(0)" className="black-link">
          <h2 className="black-text">Contact</h2>
          </a> 
      
      </div>
      <div className="icon-container">

        <p>
          <a href="https://www.linkedin.com/in/faisalpj/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="black-icon" size={iconSize}  />
          </a>
        </p>
        <p>
          <a href="https://github.com/faisalirulam/" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="black-icon" size={iconSize} />
          </a>
        </p>
        <p>
          <a href="mailto:faisalirulam@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope  className="black-icon" size={iconSize} />
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/fy_ziii?utm_source=qr&igsh=MXd6ZW1oYjFzaW04Ng==" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="black-icon" size={iconSize} />
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/muhammed.faisal.16100921?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className="black-icon" size={iconSize} />
          </a>
        </p>

    </div>
        
    </section>
  );
};


export default Contact;
