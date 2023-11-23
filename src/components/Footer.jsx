import React from 'react'
import wave from "../img/wave.png"
import { FiInstagram ,FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    
      <div className="footer">                  
          
          <img src={wave} alt="" />
          <div className="f-content">
              <p>abc@gmail.com</p>
              <div className="f-icons">
                  <FiInstagram color='#fff' size='3rem' />
                  <FiGithub  color='#fff' size='3rem'/>
                  <FiLinkedin  color='#fff' size='3rem'/>
                   
              </div>
          </div>


      </div>
  )
}

export default Footer