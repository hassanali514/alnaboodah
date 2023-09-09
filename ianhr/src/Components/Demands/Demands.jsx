import React, { useEffect } from 'react'
import './demand.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { demandData } from '../../Data/data';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Demand = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="demand section">
            <div className="videoCard container">
                <div className="cardContent">
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
                            demandData.map((item) => {
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

export default Demand