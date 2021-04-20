import React from 'react'
import Fade from 'react-reveal/Fade'
import { principles } from '../utils/principles'
const SectionPrincipios = () => {
    return (
        <section className='section-principios'>
            <div className="section-center section-principios-container">
                <article className='section-principios-title'>
                    <div className="title">
                        <h3>
                            Nuestros principios
    </h3>
                        <div className="underline"></div>
                    </div>
                </article>
                <Fade bottom cascade delay={300}>
                    <div className="principios-center">
                        {principles.map((principle) => {
                            const { id, icon, title, text } = principle
                            return <article key={id} className='principle'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <p> {text}</p>
                            </article>
                        })}
                    </div>
                </Fade>
            </div>
        </section>
    )
}
export default SectionPrincipios