import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import logo from '../assets/logo-dorico.svg'

const Navbar = () => {
    //const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext()

    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 100) {
            setScrolled(true)

        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <nav className={scrolled ? 'nav scrolled' : 'nav'}>
            <div className='nav-center'>
                <div className="nav-header">
                    <img className='logo' src={logo} alt="logo dorico" />
                    <div className="nav-button" >
                        <div className="burger lines">
                            <div className="line top"></div>
                            <div className="line middle"></div>
                            <div className="line bottom"></div>
                        </div>
                    </div>
                </div>

                <ul className='nav-links'>
                    <li><a href="#">propuesta de valor</a></li>
                    <li><a href="#">servicios</a></li>
                    <li><a href="#">contacto</a></li>

                </ul>
            </div>
        </nav>
    )
}
export default Navbar