import React from 'react'
import "./work.css"
import Works from './Works'

const Work = () => {
    return(
        <section className="work__section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Personal Projects</span>
            <Works />
        </section>
    )
}

export default Work