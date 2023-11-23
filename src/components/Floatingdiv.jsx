import React from 'react'

const Floatingdiv = ({img,txt1,txt2}) => {
  return (
      <div className="floatingdiv">
          <img src={img } alt="" />
          
          <span>
              {txt1}
              <br />
              {txt2}
              
          </span>
    </div>
  )
}

export default Floatingdiv