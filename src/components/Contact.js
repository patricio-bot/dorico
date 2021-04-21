import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import logo from '../assets/logo-dorico.svg'
const Contact = () => {
    return (
        <section className='contact-wrapper'>
            <div className="section-center contact-container">
                <div id='contacto' className="contact-text">
                    <div className="title contact-text-title">
                        <h3>Contacto</h3>
                        <div id='contact-text-underline' className="underline "></div>
                    </div>
                    <div className="contact-info">
                        <h4>Simón Perretta</h4>
                        <h4>Gerente Comercial</h4>
                        <a href="mailto:s.perretta@dorico.cl">s.perretta@dorico.cl</a>
                    </div>
                </div>
                <div className="contact-logo">
                    <img src={logo} alt="logo" />
                    <h4>Dórico Asesorías Financieras</h4>
                    <div className="contact-phone">
                        <FaPhoneSquareAlt />
                        <p>+56 9 5194888</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact