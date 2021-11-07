import React from 'react'
import Header from './Header'
import Main from './Main'

const Home = ({ search }) => {

    return (
        <>
            <Header />
            <Main search={search} />
        </>
    )
}

export default Home
