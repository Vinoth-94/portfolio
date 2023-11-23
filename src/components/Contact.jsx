import React from 'react'

const Contact = () => {
  return (
    
      
      <div className="contact-wraper">

          <div className="c-left">
              <div className="heading">
                  <h3 className='hd1'>Get in touch</h3>
                  <h3 className="hd2">Contact me</h3>
              </div>
               <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
          
          </div> 
          <div className="c-right">
              
              <form action="">
                  
                  
                  <input type="text" name="User_name" className='user' placeholder="Name" />
                  <input type="email" name="User_email" className='user' placeholder="Email" />
                  <textarea name="message" className='user' placeholder="Message" />
                  <input type="submit" value="Send" className='btn' />
                  
                  <div className="blur c-blur2" style={{background:"rgb(238 210 255)"}}></div>
              </form>
              

          </div>
      
      </div>
  )
}

export default Contact