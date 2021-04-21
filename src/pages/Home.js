import React from 'react'
import { Header, SectionIntro, SectionValor, SectionPrincipios, Servicios, Contact } from '../components'

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <SectionIntro />
                <SectionValor />
                <SectionPrincipios />
                <Servicios />
                <Contact />
            </main>

        </>

    )
}
