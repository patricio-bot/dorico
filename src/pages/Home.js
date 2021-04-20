import React from 'react'
import { Header, SectionIntro, SectionValor, SectionPrincipios } from '../components'

export const Home = () => {
    return (
        <>
            <Header />
            <main>
                <SectionIntro />
                <SectionValor />
                <SectionPrincipios />
            </main>

        </>

    )
}
