import React from 'react'
import financiero from '../assets/financiero.jpg'
import inmobiliario from '../assets/inmobiliario.jpg'
import { finance, estate } from '../utils/services'
import Fade from 'react-reveal/Fade'

const Servicios = () => {
    return (
        <section id='servicios' className='section-services'>
            <div >
                <div className="title">
                    <h3>
                        Servicios y Productos
    </h3>
                    <div className="underline"></div>
                </div>
                <div className="finance-container">

                    <div className="finance-info">
                        <Fade left delay={300}>
                            <div className="finance-logo">

                                <img src={financiero} alt="bulb" />
                                <div className="title finance-title">
                                    <h4>financieros</h4>
                                </div>


                            </div>
                        </Fade>
                        <Fade right delay={400}>

                            <div className="finance-description">

                                {finance.map((item) => {
                                    const { id, title, details, icon } = item
                                    return (
                                        <dl key={id}>
                                            <dt className='service-title-detail'>{icon}{title}</dt>
                                            {details && details.map((detail, index) => {
                                                return <dd className='finance-detail-box' key={index}>{detail}</dd>
                                            })
                                            }
                                        </dl>
                                    )
                                })}

                            </div>
                        </Fade>
                    </div>

                </div>
                <div className="estate-container">
                    <div className="estate-info">
                        <Fade right delay={300}>
                            <div className="estate-logo">
                                <img src={inmobiliario} alt="building" />
                                <div className="title estate-title">
                                    <h4><strong>inmobiliarios</strong> </h4>
                                </div>
                            </div>
                        </Fade>
                        <Fade left delay={400}>
                            <div className="estate-description">
                                <ul>
                                    {estate.map((item) => {
                                        const { id, title, icon } = item
                                        return (
                                            <li className='service-title-detail' key={id}>
                                                <span>{icon}</span>{title}</li>
                                        )

                                    })}
                                </ul>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Servicios