import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import './Slider.css'

export default () => {
    return (
        <Swiper
            className="swiper-wrapper"
            spaceBetween={50}
            slidesPerView={3}
            modules={[Thumbs]}
            loop={true}
        >
            <SwiperSlide className="swiper-slide">
                <img src="images\swiper-ocean.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src="images\swiper-nature.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src="images\swiper-cafe.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src="images\swiper-girl.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src="images\swiper-travel.jpg" alt="" />
            </SwiperSlide>
        </Swiper>
    )
}
