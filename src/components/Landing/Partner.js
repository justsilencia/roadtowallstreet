import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import barclaysImg from "../../images/partner/barclays.png"
import citiImg from "../../images/partner/citi.png"
import jpImg from "../../images/partner/jpmorgan.png"
import deutchImg from "../../images/partner/deutch.png"
import societeImg from "../../images/partner/societe.png"
import rbcImg from "../../images/partner/rbc.png"
import partnerImg2 from "../../images/partner/partner2.png"
import partnerImg3 from "../../images/partner/partner3.png"
import partnerImg4 from "../../images/partner/partner4.png"
import partnerImg5 from "../../images/partner/partner5.png"
import partnerImg6 from "../../images/partner/partner6.png"
import partnerImg7 from "../../images/partner/partner7.png"
import partnerImg8 from "../../images/partner/partner8.png"

const Partner = () => {
  return (
    <>
      <div className="consulting-partner-area ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="consulting-partner-slider"
          >
            <SwiperSlide>
              <div className="partner-card">
                <img src={barclaysImg} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={citiImg} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={deutchImg} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={jpImg} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={societeImg} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={rbcImg} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={partnerImg7} alt="Image" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <img src={partnerImg8} alt="Image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Partner
