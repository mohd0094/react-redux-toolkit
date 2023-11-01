import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import FeatureProduct from './FeatureProduct';




const Home = () => {


  return (
    <>
              <div className='swiper-slider-wrap'>
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}>
            <SwiperSlide>
              <img src="./img/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./img/2.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="./img/3.jpg" alt="" />
            </SwiperSlide>

          </Swiper>


          <FeatureProduct/>

        </div>
    </>
  )
}

export default Home
