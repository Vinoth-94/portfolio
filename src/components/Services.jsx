import React from 'react';
import glassemoji from "../img/glasses.png"
import heart from '../img/heartemoji.png'
import humble from '../img/humble.png'
import Card from './Card';
import resume from '../fonts/Vinoth.doc'
import { motion } from "framer-motion"

const Services = () => {
    const trt = {
    duration: 2,
    type: 'spring'
  }
    return (      
      
      <div className="services" id="Service">  
      
          <div className="awesome">
              <span className='hd1'> My Awesome </span>

              <span className='hd2'> Services</span>
              <span className='para'> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                
                
                  
                  At ab reiciendis quisquam,<br /> cupiditate sapiente qui doloribus sequi. Quas
                  
              </span>

              <a href={resume} download>
                  <button className='btn s-btn'> Download CV</button>
              </a>

              
             
              <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
          </div>

          <div className="cards">
              
              <motion.div
                  initial={{top:'-4%',left:'18rem'}} whileInView={{ left: '14rem' }} transition={trt}
                  style={{ left: '14rem' }}>
                  <Card    
                      emoji={heart}
                      heading={'design'}
                      desc={"figma,adobephoto"}                 
                  />           
              </motion.div>
              <motion.div initial={{top:'12rem',left:'-8rem'}} whileInView={{left:'-4rem' }} transition={trt} style={{top:"12rem ",left:'-4rem'}}>
                  <Card    
                      emoji={glassemoji}
                      heading={'Developement'}
                      desc={"Html,Css,React"}                 
                  />           
              </motion.div>
              <motion.div initial={{top:'19rem',left:'18rem'}} whileInView={{left:'12rem' }} transition={trt}  style={{top:"19rem ",left:'12rem'}}>
                  <Card    
                      emoji={humble}
                      heading={'UI'}
                      desc={"figma,adobephoto"}                 
                  />           
              </motion.div>
              
               <div className="blur s-blur2" style={{background:"rgb(238 210 255)"}}></div>

          </div>      
      </div>
  )
}

export default Services