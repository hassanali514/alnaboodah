import React, { useEffect } from 'react'
import './contact.css'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactWhatsapp from 'react-whatsapp';
import { Link } from 'react-router-dom'
import {BsPhoneFill} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import {HiMail} from 'react-icons/hi'
import {MdLocationOn} from 'react-icons/md'
import { contactData } from '../../Data/data'

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="footer">

      <div className="secContainer container grid">

        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">

          <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
            <span className="linkTitle">
              Social Links
            </span>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
            <ReactWhatsapp number="+971 569496908"><RiWhatsappFill className='icon' /></ReactWhatsapp>
            <a href="https://www.facebook.com/people/Ibrahim-Al-Naboodah-HR-Consultancy/100092696838175/" target="_blank"><ImFacebook className='icon' /></a>
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>

        </div>

        <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <Link to='/'>Support</Link>
          </li>
          <li>
            <Link to='/'>Terms & Condition</Link>
          </li>
          <li>
            <Link to='/'>Privacy</Link>
          </li>
        </div>

        <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone"><AiFillPhone/>{contactData.phone}</span>
          <span className="phone"><BsPhoneFill/>{contactData.mobile}</span>
          <span className="email"><HiMail/>{contactData.email}</span>
          <span className="email"><MdLocationOn/>{contactData.address}</span>
        </div>

      </div>

    </div>
  )
}

export default Contact