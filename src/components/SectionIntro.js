import React from 'react'
import Typical from 'react-typical'
const SectionIntro = () => {
    return (
        <section className='section-intro section'>
            <div className="section-intro-bg"></div>
            <div className='section-center-small'>

                <div className="title-intro">

                    <Typical
                        steps={["Somos una empresa de asesoría financiera en intermediación en levantamiento de deuda y en reestructuración de pasivos.", 1000]} loop={1} wrapper="h2" />

                </div>

            </div>



        </section>
    )
}
export default SectionIntro