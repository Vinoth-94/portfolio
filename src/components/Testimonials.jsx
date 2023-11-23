import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import pp1 from "../img/profile1.jpg"
import pp2 from "../img/profile2.jpg"
import pp3 from "../img/profile3.jpg"
import pp4 from "../img/profile4.jpg"

const Testimonials = () => {
    const clients = [
        {
            img: pp1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus aut autem quas aliquam quam sint adipisci, laborum suscipit! Ex molestiae quisquam sapiente ipsam quae, nostrum ullam officiis incidunt aspernatur."
        },
        {
            img: pp2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus aut autem quas aliquam quam sint adipisci, laborum suscipit! Ex molestiae quisquam sapiente ipsam quae, nostrum ullam officiis incidunt aspernatur."
        },
        {
            img: pp3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus aut autem quas aliquam quam sint adipisci, laborum suscipit! Ex molestiae quisquam sapiente ipsam quae, nostrum ullam officiis incidunt aspernatur."
        },
        {
            img: pp4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus aut autem quas aliquam quam sint adipisci, laborum suscipit! Ex molestiae quisquam sapiente ipsam quae, nostrum ullam officiis incidunt aspernatur."
        }
    ]
  return (
      <div className='testi-wrap'>
          <div className="heading">
              <span className='hd1'>Clients always get</span>
              <span className='hd2'>Exceptional work</span>
              <span className='hd1'>from me..</span>

              <div className="blur t-blur1">
                  
              </div>
              <div className="blur t-blur2">
                  
              </div>
              
          </div>

          <Swiper
          modules={[ Pagination]}
      
              spaceBetween={50}
      
              slidesPerView={1}
      
              
      
              pagination={{ clickable: true }}>
              {
                  clients.map((client,index) => {
                      return (
                          <SwiperSlide key={index}>
                              <div className="testi">
                                  <img src={client.img} alt="" />
                                  <span>{client.review}</span>                               
                              </div>             
                          </SwiperSlide> 
                      )
                      
                      
                  })
              }
              
              
          </Swiper>




      
      </div>
  )
}

export default Testimonials