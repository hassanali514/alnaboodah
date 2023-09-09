import React, { useEffect } from 'react'
import './service.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Service = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="service section">

                <h2 data-aos="fade-left" data-aos-duration="2000" className="title">
                    Our Services
                </h2>

                <div className="videoCard container">

                    <div className="cardContent grid">

                        <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo1"/>

                        <div data-aos="fade-right" data-aos-duration="2000" className="cardText">

                            <h2>
                                WHITE COLLAR JOBS
                            </h2>

                            <p>
                                In this broad category, we also offer local and international hiring for professions like medical staff, corporate staff, travel and tourism, engineering, consumer electronics, general business, and hospitality.
                            </p>

                        </div>

                    </div>
                    <div className="cardContent grid">

                        <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo2"/>
                        

                        <div data-aos="fade-right" data-aos-duration="2000" className="cardText">

                            <h2>
                                BLUE COLLAR JOBS
                            </h2>

                            <p>
                                We have successfully carved out a place for ourselves in a wide range of business ventures, including overseas manpower recruitment projects, as well as local recruitment in the field of security, oil & gas, construction, industrial services, cold storage, FMCG, MEP, Automotive, IT Product Distribution.
                            </p>

                        </div>

                    </div>

                </div>

        </section>
    )
}

export default Service