import React, { useEffect, useState } from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { logoData } from '../../Data/data'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="home">

      <div className="secContainer container">

        <div className="homeText">

          <h1 data-aos="fade-up" className="title">
            Visualize The Future That Lies Ahead
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            The sole solution for you and every job seeker
          </p>

        </div>

        <div className="homeCard">
          <h1>OUR CLIENTS</h1>
          <Carousel
            axis='horizontal'
            autoPlay={true}
            infiniteLoop={true}
            emulateTouch={true}
            autoFocus={true}
            dynamicHeight={true}
            interval={3000}
            showStatus={false}
            showThumbs={false}
            stopOnHover={true}
            transitionTime={2000}
            useKeyboardArrows={false}
            showIndicators={false}
          >
            {
              logoData.map((item) => {
                return (
                  <div>
                    <img src={item.image} />
                  </div>
                )
              })
            }
          </Carousel>
        </div>

      </div>

    </section>
  )
}

export default Home