import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from "../img/sidebar.png"
import ecomers from "../img/ecommerce.png"
import hoc from "../img/hoc.png"
import musicapp from "../img/musicapp.png"
import 'swiper/css'


const Portfolio = () => {

    
  return (
      
      <div className='portfolio-wraper' id='Portfolio'>
          
      
          <div className="header">
      
              <span className='hd1'>Reacent Project</span>
      
              <span className='hd2'> Portfolio</span>
      
          </div>

          <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className='portfolio-slider'
              scrollbar={{ draggable: true }}
          >
              
              <SwiperSlide>
                  <img src={sidebar} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={ecomers} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={hoc} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={musicapp} alt="" />
              </SwiperSlide>
          </Swiper>

    
      </div>
  
  )
}

export default Portfolio