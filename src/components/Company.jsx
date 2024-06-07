import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import santander from "../assets/image/ymas/company/Santander.svg" ;
import afpModelo from "../assets/image/ymas/company/Afp Modelo.svg" ;
import corpgroup from "../assets/image/ymas/company/Corpgroup.svg" ;
import abastible from "../assets/image/ymas/company/Abastible.svg" ;
import duocUc from "../assets/image/ymas/company/Duoc UC.svg" ;
import iplacex from "../assets/image/ymas/company/iplacex.svg" ;
import larrainVial from "../assets/image/ymas/company/LarrainVial.svg" ;
import adidas from "../assets/image/ymas/company/Adidas.svg" ;
import notCo from "../assets/image/ymas/company/NotCo.svg" ;
import entel from "../assets/image/ymas/company/Entel.svg" ;
import wom from "../assets/image/ymas/company/WOM.svg" ;
import movistar from "../assets/image/ymas/company/Movistar.svg" ;
import afc from "../assets/image/ymas/company/AFC.svg" ;
import bcoEstado from "../assets/image/ymas/company/Bco-estado.svg" ;
import bcoRipley from "../assets/image/ymas/company/bco-ripley.svg" ;
import bcoSecurity from "../assets/image/ymas/company/Bco-Security.svg" ;
import mega from "../assets/image/ymas/company/Mega.svg" ;
import chv from "../assets/image/ymas/company/Chv.svg" ;
import t13 from "../assets/image/ymas/company/T13.svg" ;
import tvn from "../assets/image/ymas/company/TVN.svg" ;
import copec from "../assets/image/ymas/company/Copec.svg" ;
import fundacionChile from "../assets/image/ymas/company/Fundacion-chile.svg" ;
import chinquinta from "../assets/image/ymas/company/Chilquinta.svg" ;
import natura from "../assets/image/ymas/company/Natura.svg" ;
import pyg from "../assets/image/ymas/company/P&G.svg" ;
import google from "../assets/image/ymas/company/Google.svg" ;
import smartFit from "../assets/image/ymas/company/Smart-fit.svg" ;
import soprole from "../assets/image/ymas/company/Soprole.svg" ;
import streetBurger from "../assets/image/ymas/company/Streat-burger.svg" ;
import weber from "../assets/image/ymas/company/WEBER.svg" ;



const fadeInAnimations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  }
}

function Company() {
  return (
    <>
      <motion.section  id="company-and-more"
        variants={fadeInAnimations}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <img loading="lazy" src={santander} class="company animation-up" alt=""/>
        <img loading="lazy" src={afpModelo} class="company animation-up" alt=""/>
        <img loading="lazy" src={corpgroup} class="company animation-up" alt=""/>
        <img loading="lazy" src={abastible} class="company animation-up" alt=""/>
        <img loading="lazy" src={duocUc} class="company animation-up" alt=""/>
        <img loading="lazy" src={iplacex} class="company animation-up" alt=""/>
        <img loading="lazy" src={larrainVial} class="company animation-up" alt=""/>
        <img loading="lazy" src={adidas} class="company animation-up" alt=""/>
        <img loading="lazy" src={notCo} class="company animation-up" alt=""/>
        <img loading="lazy" src={entel} class="company animation-up" alt=""/>
        <img loading="lazy" src={wom} class="company animation-up" alt=""/>
        <img loading="lazy" src={movistar} class="company animation-up" alt=""/>
        <img loading="lazy" src={afc} class="company animation-up" alt=""/>
        <img loading="lazy" src={bcoEstado} class="company animation-up" alt=""/>
        <img loading="lazy" src={bcoRipley} class="company animation-up" alt=""/>
        <img loading="lazy" src={bcoSecurity} class="company animation-up" alt=""/>
        <img loading="lazy" src={mega} class="company animation-up" alt=""/>
        <img loading="lazy" src={chv} class="company animation-up" alt=""/>
        <img loading="lazy" src={t13} class="company animation-up" alt=""/>
        <img loading="lazy" src={tvn} class="company animation-up" alt=""/>
        <img loading="lazy" src={copec} class="company animation-up" alt=""/>
        <img loading="lazy" src={fundacionChile} class="company animation-up" alt=""/>
        <img loading="lazy" src={chinquinta} class="company animation-up" alt=""/>
        <img loading="lazy" src={natura} class="company animation-up" alt=""/>
        <img loading="lazy" src={pyg} class="company animation-up" alt=""/>
        <img loading="lazy" src={google} class="company animation-up" alt=""/>
        <img loading="lazy" src={smartFit} class="company animation-up" alt=""/>
        <img loading="lazy" src={soprole} class="company animation-up" alt=""/>
        <img loading="lazy" src={streetBurger} class="company animation-up" alt=""/>
        <img loading="lazy" src={weber} class="company animation-up" alt=""/>
      </motion.section>
    </>
  )
}

export default Company