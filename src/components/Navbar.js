import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context/context'
import logo from '../assets/logo-dorico.svg'
import { links } from '../utils/links'
import * as Scroll from 'react-scroll'

let Link = Scroll.Link
let scroll = Scroll.animateScroll
const Navbar = () => {
    const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext()

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
    const scrollToTop = () => {
        scroll.scrollToTop()
    }
    return (
        <nav id='nav' className={scrolled ? 'scrolled' : null}>
            <div className='nav-center'>
                <div className="nav-header">
                    <div className="logo" onClick={scrollToTop}><img className='logo' src={logo} alt="logo dorico" /></div>

                    <div className="nav-button" onClick={isSidebarOpen ? closeSidebar : openSidebar} >
                        <div className={isSidebarOpen ? "burger lines close" : "burger lines"}>
                            <div className="line top"></div>
                            <div className="line middle"></div>
                            <div className="line bottom"></div>
                        </div>
                    </div>

                </div>

                <ul className='nav-links'>
                    {links.map((oneLink) => {
                        const { id, url, text } = oneLink
                        return (
                            <li key={id}>
                                <Link smooth={true} offset={20} to={url}>{text}</Link>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </nav>
    )
}
export default Navbar