import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import ludicsTeam from '../assets/image/ludics/ludics-team.png';
import gradientRed from "../assets/image/ludics/gradient-red1.png";
import ludicsSquad from "../assets/image/ludics/ludics-squad.png";
import titleDisenadores from "../assets/image/ludics/disenadores-de-exp.png";
import carlosPhoto from "../assets/image/ludics/Carlos_Zamorano.jpg";
import '../css/page/ludics.css'

function Ludics() {
  return (
    <>
    <div id="t_ludics">
            <aside id="ludics" onscroll="ScrollLudics()">

                
                
                <div class="container-ludics">
                    <div class="blank"> </div>
                    <section class="img-team">
                        <img loading="lazy" id="ludics-team" src={ludicsTeam} alt=""/>
                        <img loading="lazy" id="ludics-team-mobile" src="https://res.cloudinary.com/deiavzaxs/image/upload/v1717138461/team-1_xu649z.png" alt=""/>
                    </section>
                    <section class="img-squad">
                        {/* <section id="gradient-container"> */}
                        <img loading="lazy" id="gradient-red" src={gradientRed} alt=""/>
                    {/* </section> */} 
                        <img loading="lazy" id="ludics-squad" src={ludicsSquad} alt=""/>
                    </section>
                    <section id="description-ludics">
                        <p class="description-ludics animation-up">
                            LA PASIÓN POR LO QUE HACEMOS ES LO QUE NOS CARACTERIZA. 
                            <span> ENTUSIASTAS, INQUIETOS, ALEGRES, ESPONTÁNEOS, COMPROMETIDOS
                            Y DETALLISTAS, ALGUNAS VECES DISPERSOS</span>, PERO ES LO QUE NOS 
                            HACE UN EQUIPO DIFERENTE Y ÚNICO.
                        </p>
                    </section>
                    
                    <div class="slider-team">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        initialSlide={2}
                        speed={600}
                        preventClicks={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 80,
                            depth: 350,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        onClick={true}
                        class="swiper1"
                    >
                        <SwiperSlide>
                            <img loading="lazy" src={carlosPhoto} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img loading="lazy" src={carlosPhoto} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img loading="lazy" src={carlosPhoto} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img loading="lazy" src={carlosPhoto} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img loading="lazy" src={carlosPhoto} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img loading="lazy" src={carlosPhoto} alt=""/>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                    

                    <div id="experiencia-title">
                        <img loading="lazy" src={titleDisenadores} alt=""/>
                    </div>

                    <div class="banner-footer">
                        <div class="slide-text">
                            <h1 class="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | </h1>
                            <h1 class="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | </h1>
                            <h1 class="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | </h1>
                            <h1 class="text-slider">EVENTOS | TEAM BUILDING | STREAMING | REALIZADORES DE  JUEGOS | </h1>
                        </div>
                    </div>


                    <footer>
                        <div class="banner-img-video">
                            <video class="logo-video" src="https://res.cloudinary.com/di5yg1rzm/video/upload/v1717441411/home-local/Ldcs-02-comp_1_aeqqux.webm" type="video/webm" loop autoPlay muted playsInline></video>
                            <video class="logo-video-mobile" src="https://res.cloudinary.com/di5yg1rzm/video/upload/v1717445219/home-local/Secuencia_01_1_cek5q0.webm" type="video/webm" loop autoPlay muted playsInline></video>
                        </div>
                    </footer>
                </div>

            </aside>
        </div>
    </>
  )
}

export default Ludics