import React, { useEffect } from 'react'
import './about.css'

// images --------------
import videoUrl from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="about section">
        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>
                OUR WORKING METHOD
              </h2>
              <p>
                Ibrahim Al-Naboodah Facility Management Services is the leading Facilities Management company in UAE. 
                Ibrahim Al-Naboodah Facility Management Services develops, manages and executes FM strategies to maximise the performance and lifecycle of client assets.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={videoUrl} autoPlay loop muted type="video/mp4" />
            </div>

          </div>
        </div>
    </section>
  )
}

export default About