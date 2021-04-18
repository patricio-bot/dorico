import React, { useState, useEffect } from 'react'
import Particles from 'react-particles-js'
import configParticles from '../config/configParticles'
import Pattern from '../assets/bg-pattern-alt.png'
import { title } from '../utils/title'
import styled from 'styled-components'
import Navbar from './Navbar'


const Header = () => {

    const [index, setIndex] = useState(0)
    useEffect(() => {
        const lastIndex = title.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index])
    useEffect(() => {
        let autoSlide = setInterval(() => {
            setIndex(index + 1)
        }, 5000)
        return () => {
            clearInterval(autoSlide)
        }
    }, [index])

    return (
        <>

            <header className='header'>

                <div className='particles'>
                    <Particles height='100vh' width='100vw' params={configParticles} />
                </div>

                <Wrapper>
                    {title.map((item, itemIndex) => {
                        const { description, id } = item
                        let position = 'nextSlide'
                        if (itemIndex === index) position = 'activeSlide'
                        if (itemIndex === index - 1 || (index === 0 && itemIndex === title.length - 1)) { position = 'lastSlide' }
                        return (
                            <article key={id} className={position}>
                                <h3>{description}</h3>
                            </article>
                        )
                    })}

                </Wrapper>
                <div className='container'>
                    <img src={Pattern} alt="" />
                </div>

            </header>
        </>
    )
}
const Wrapper = styled.div`
height:350px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content:center;
  align-items: center;
  position: relative;
bottom:-10rem;
 overflow:hidden;
h3 {
  line-height: 1.8;
  margin:0;
}
article {
  position: absolute;
  top: 0;
  left: 0;
  opacity:0;
  transition:var(--transition);

}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
    opacity:0;
    transform: translateX(-100%);
}
article.nextSlide {
    opacity:0;
    transform: translateX(100%);
}
`
export default Header
