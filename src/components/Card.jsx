import React from 'react'

const Card = ({emoji,heading,desc}) => {
  return (
      <div className="card">
          
          <img src={emoji} alt="" />
          <span>{heading}</span>
          <span className='para-sm'>{desc}</span>
          <button className='c-btn'>Learn more</button>
    </div>
  )
}

export default Card