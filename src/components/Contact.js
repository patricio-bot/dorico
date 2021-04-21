import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import logo from '../assets/logo-dorico.svg'
const Contact = () => {
    return (
        <section className='contact-wrapper'>
            <div id='contact-container' className="section-center ">
                <div id='contacto' className="contact-text">
                    <div className="title contact-text-title">
                        <h3>Contacto</h3>
                        <div id='contact-text-underline' className="underline "></div>
                    </div>
                    <div className="contact-info">
                        <h4>Simón Perretta</h4>
                        <h5>Gerente Comercial</h5>
                        <a href="mailto:s.perretta@dorico.cl">s.perretta@dorico.cl</a>

                        <div className="contact-phone">
                            <h4>Dórico Asesorías Financieras</h4>
                            <p> <FaPhoneSquareAlt />+56 9 5194888</p>
                        </div>
                    </div>
                </div>
                <div className="contact-logo text-center">
                    <img src={logo} alt="logo" />

                </div>
            </div>
        </section>
    )
}
export default Contact