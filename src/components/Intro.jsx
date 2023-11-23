import React from 'react'
import github from '../img/github.png'
import linkimg from '../img/linkedin.png'
import instaimg from '../img/instagram.png'
import vector1 from "../img/Vector1.png"
import vector2 from "../img/Vector2.png"
import boy from "../img/boy.png"
import thumbup from "../img/thumbup.png"
import crown from "../img/crown.png"
import glassemoji from "../img/glassesimoji.png"
import Floatingdiv from './Floatingdiv'
import { motion } from "framer-motion"



const Intro = () => { 

  const trt = {
    duration: 2,
    type: 'spring'
  }
  return ( 
    <div className='intro'>          
      <div className="intro-left">
        <div className="intro-name">
          <span className='hd1'>
            Hy! I Am
          </span>
          <span className='hd2'> Vinoth</span>
          <span >      
            Frontend Developer with experience in web desiging and developement , producting the Quality work
          </span>
        </div>
        <button className='intro-btn btn'>
          Hire me       
        </button>

        <div className="intro-icons">          
          <a href="#">          
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={linkimg} alt="" />
          </a>      
          <a href="#">          
            <img src={instaimg} alt="" />              
          </a>
        </div>       
      </div>      
      <div className="intro-right">                            
        <img src={vector1} alt="" />                 
        <img src={vector2} alt="" />            
        <img src={boy} alt="" />      
        <motion.img
          initial={{ left: '-36%' }} whileInView={{ left: '-24%' }} transition={trt}
          src={glassemoji} alt=""
        />
        
        <motion.div
          initial={{top:'-4%',left:'74%'}} whileInView={{ left: '68%' }} transition={trt}
          style={{ top: '-4%', left: '68%' }}>
          <Floatingdiv img={crown} txt1='Web' txt2="Developer" />       
        </motion.div>           
        
        <motion.div
          initial={{ left: '9rem', top:'18rem'}} whileInView={{ left: '0rem' }} transition={trt}
          style={{ top: '18rem', left: '0' }}>
          <Floatingdiv img={thumbup} txt1='design' txt2="best" />         
        </motion.div>  
        
        <div className='blur'>

        </div>
        
        <div className='blur' style={{        
          top: '17rem',          
          width: '21rem',
          height: '11rem',
          left: '-9rem',
          background:'#c1f5ff'
        }}>
          
        
        </div>
      </div>



    </div>
  )
}

export default Intro