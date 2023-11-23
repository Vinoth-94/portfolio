import React from 'react'
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.webp';
import jq from '../img/jquery.png';
import react from '../img/react.png';
import { motion } from "framer-motion"



const Work = () => {
  return (
      <div className="works">
           <div className="awesome">
              <span className='hd1'> Work for all </span>

              <span className='hd2'> Brand & Clients</span>
              <span className='para'> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                
                
                  
                  At ab reiciendis quisquam,<br /> cupiditate sapiente qui doloribus sequi. Quas
                  
              </span>

                  
              <button className='btn s-btn'> Hire me</button>
            

              
             
              <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
          </div>

          <div className="w-right">
              <motion.div className="w-maincircle"
                  initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} transition={{ duration: 3.5, type: 'spring' }} Viewport={{margin:'-40px'}}
              >
                  <div className="w-seccircle">
                      <img src={css} alt="" />
                  </div>
                  <div className="w-seccircle">
                      <img src={js} alt="" />
                  </div>
                  <div className="w-seccircle">
                      <img src={html} alt="" />
                  </div>
                  <div className="w-seccircle">
                      <img src={jq} alt="" />
                  </div>
                  <div className="w-seccircle">
                      <img src={react} alt="" />
                  </div>
              </motion.div>
              <div className="w-back-circle bluecircle">
                  
              </div>
              <div className="w-back-circle yellowcircle">
                  
              </div>
          </div>
    </div>
  )
}

export default Work