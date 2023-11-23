import React from 'react'
import { FiSun ,FiMoon   } from "react-icons/fi";

const Togglein = ({drk,click}) => {
    return (
        <div className="toggle" onClick={click}>            
            <FiMoon />            
            <FiSun />

            <div className="t-btn" style={{ right: drk? '2px':''}}>
                
            </div>
            
      </div>
      
  )
}

export default Togglein