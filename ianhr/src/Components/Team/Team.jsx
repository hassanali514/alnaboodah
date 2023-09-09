import React, { useEffect } from 'react'
import './team.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {teamData} from '../../Data/data'

const Team = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">
              MEET OUR TEAM
            </h2>
            <p>
              Our Highly Qualified Team Is Skilled At Expanding The Company And Elevating It To New Heights
            </p>
          </div>
        </div>

        <div className="mainContent grid">

          {
          teamData.map(({imgSrc,name, designation }) => {
              return (
                <div data-aos="fade-up" className="singleItem">

                  <div className="singleImage">

                    <img src={imgSrc} alt="Image title" className='imgStyle'/>

                    <div className="overLayInfo">

                      <h3>{designation}</h3>

                    </div>

                  </div>

                  <div className="destFooter">

                    <div className="destText flex">

                      <h6>{name}</h6>

                    </div>

                  </div>

                </div>
              )
            })
          }

        </div>

      </div>
    </section>
  )
}

export default Team