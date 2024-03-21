import React, { useState } from 'react'
import { SiConsul } from "react-icons/si"
import { AiOutlineGlobal } from "react-icons/ai"
import { BsPhoneVibrateFill } from "react-icons/bs"
import { CgMenuGridO } from "react-icons/cg"
import logo from "../../assests/logo.jpg"

const Navbar = () => {
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }
    const [noBg, addBg] = useState('navBartTwo')
    const addBgColor = () => {
        if (window.scrollY >= 10) {

            addBg('navBartTwo navbar_With_Bg')
        } else {
            addBg('navBartTwo')

        }
    }
    window.addEventListener('scroll', addBgColor)
    return (
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className='none flex'>
                    <li className='flex'> <BsPhoneVibrateFill className='icon' />Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon' />Languages</li>

                </div>
                <div className='atb flex'>
                    <span>Sign In</span>
                    <span>Sign out</span>
                </div>
            </div>
            <div className={noBg} style={{ backgroundColor: "var(--SecondaryColor)", fontSize: "12px" }}>
                <div className="logoDiv">
                    <img src={logo} className='logo' />
                </div>
                <div className={active}>
                    {/* <div className='navBarContainer'> */}
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>

                    </ul>
                    <button className='btn flex btnOne'>
                        Contact
                    </button>
                    {/* </div> */}
                </div>
                {/* <button className='btn flex btnTwo'>
                        Contact
                   </button> */}
                <div onClick={showNavBar} className='toggleIcon'>
                    <CgMenuGridO className='icon' />
                </div>
            </div>

        </div>
    )
}

export default Navbar