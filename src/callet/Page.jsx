import React from 'react'
import Card from "./Card"
import Hero from "./Hero"
import Vidos from "./Vidos"
import Images from './Images'
import Number from './Number'
import CreateBiznes from './CreateBiznes'

const Page = () => {
    return (
        <>
            <Hero />
            <Vidos />
            <Card />
            <Images/>
            <Number/>
            <CreateBiznes/>
        </>
    )
}

export default Page