import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import titleDesafio from "../assets/image/ymas/title/desafio-en-las-alturas.png";
import titleHablemos from "../assets/image/ymas/title/hablemos.png";
import iconMail from "../assets/image/ymas/title/mail.svg";
import iconPhone from "../assets/image/ymas/title/phone.svg";
import titleCompany from "../assets/image/ymas/title/title-empresas.png";

import Company from '../components/Company.jsx';


import '../css/page/andMore.css'
import { Autoplay } from 'swiper/modules';



function AndMore() {
  return (
    <>
    <div id="t_and_more">
      <aside id="and-more" onscroll="ScrollAndMore()">
                
        <div id="container-resume">
            <section class="description-resume">

            </section>
            <section class="video-resume">
                <video id="preview" src="https://res.cloudinary.com/di5yg1rzm/video/upload/v1717441411/home-local/Ldcs-02-comp_1_aeqqux.webm" type="video/webm" loop autoPlay muted playsInline></video>
            </section>
            <div class="gradient-resume">
                <img loading="lazy" src={titleDesafio} alt=""/>
                <h4><span>2021</span>ENTEL</h4>
                <p>LLEVAMOS NUESTROS CIRCUITOS A LO MAS ALTO.
                    <br/>NUESTROS AMIGOS DE ENTEL VIVERON UNA EXPERIENCIA DE OTRO LEVEL.
                </p>
            </div>
        </div>
        <div class="slider-portafolio">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            
            modules={[Autoplay]}
            class="swiper2 mySwiper2"
          >
            <SwiperSlide>
              <a type="button" id="portfolio1" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959593/ludics/santander_vrvwk7.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio2" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959590/ludics/reality-shows_vyg8zz.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio3" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959597/ludics/the-ludics-squad_gnpgje.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio4" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959595/ludics/THE-BIG-RACE_mqalgx.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio5" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959580/ludics/game-show_pjhhw5.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio6" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959577/ludics/beachgamr_iobkg8.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio7" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959600/ludics/team-challenge_prup6j.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio8" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959578/ludics/desafio-en-las-alturas_rggfvt.webp" alt=""/>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a type="button" id="portfolio9" class="ver">
                <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959577/ludics/basic-outdoor_xu0we9.webp" alt=""/>
              </a>
            </SwiperSlide>
            
            
            
          </Swiper>
          
          <Swiper
          slidesPerView={2}
          spaceBetween={20}
          dir="rtl"
          loop={true}
          speed={1500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          
          modules={[Autoplay]}
          class="swiper3 mySwiper3"
        >
          <SwiperSlide>
            <a type="button" id="portfolio10" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959586/ludics/laser-fx_zrlkna.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio11" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959579/ludics/poster_gsvri4.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio12" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959591/ludics/performance-show_e3pk5i.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio13" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959594/ludics/ludics-plau_w7l5yd.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio14" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959589/ludics/panna-futbol_cjw2k2.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio15" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959581/ludics/BUMPER-BALLS_qw6ppi.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio16" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959582/ludics/corpgroup_foyqaf.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio17" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959584/ludics/outdoor_qgdlfb.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio18" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959588/ludics/music-studio_qmfc0i.webp" alt=""/>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a type="button" id="portfolio19" class="ver">
              <img src="https://res.cloudinary.com/deiavzaxs/image/upload/v1710959585/ludics/imaginA-1_st56tm.webp" alt=""/>
            </a>
          </SwiperSlide>
          
        </Swiper> 

        </div>

        

        

        <div id="hablemos-title">
          <img loading="lazy" src={titleHablemos} alt=""/>
        </div>
          <div id="contact-ludics">
            <ul>
              <li>
                <img loading="lazy" src={iconMail} alt="" height="92px" />
                <h2>INFO@LUDICS.CL</h2>
              </li>
              <li>
                <img loading="lazy" src={iconPhone} alt="" height="92px" />
                <h2>+56 9 8804 3665</h2>
              </li>
            </ul>                        
          </div>
          <div id="title-company-and-more">
            <img loading="lazy" src={titleCompany} alt="" />
          </div>
            <Company />
        
      </aside>
    </div>
    </>
  )
}

export default AndMore