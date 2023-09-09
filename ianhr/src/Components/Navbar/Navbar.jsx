import React, { useState } from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  // code to toggle/show navbar
  const [active, setActive] = useState('navBar');
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

  // code to remove navbar
  const removeNav = () => {
    setActive('navBar')
  }

  // code to add background color to the header
  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader')
    } else {
      setTransparent('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>

      <div className={transparent}>

        <div className='logoDiv'>
          <a href="#" className="logo">
            <h1 className='flex logoDesign'>
              <img src={logo} alt="" className='icon' />
              <div className="headerTtile">
                  IBRAHIM AL NABOODAH
                  <div className="headerSubtitle">
                     FACILITY MANAGEMENT SERVICES
                  </div>
                </div>
            </h1>
          </a>
        </div>

        <div className={active}>

          <ul className="navLists flex">

            <li className="navItem">
              <Link className="navLInk" to="/">HOME</Link>
            </li>

            <li className="navItem">
              <Link className="navLInk"  to="/about">ABOUT</Link>
            </li>

            <li className="navItem">
              <Link className="navLInk"  to="/service">SERVICES</Link>
            </li>

            <li className="navItem">
              <Link className="navLInk" to="/team">TEAM</Link>
            </li>

            <li className="navItem">
              <Link className="navLInk"  to="/demands">COLLABORATION</Link>
            </li>

            <li className="navItem">
              <Link className="navLInk"  to="/contact">CONTACT</Link>
            </li>

            <div className="headerBtns">
              <button className="btn applyNow">
              <Link  className="navLInk" to="/register">JOB SEEKER</Link>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className='icon' />
          </div>

        </div>

        <div onClick={showNav} className="toggleNavBar">
          <TbGridDots className='icon' />
        </div>

      </div>

    </section>
  )
}

export default Navbar