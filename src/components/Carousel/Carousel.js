import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./carousel.css";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1529522560205-b5aef3f46189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='slide'></img></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1587052755556-89808205c097?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='slide'></img></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1571506534699-c76894c03ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80" className='slide'></img></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1624585131213-a1b2dd18343d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80" className='slide'></img></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='slide'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Carousel