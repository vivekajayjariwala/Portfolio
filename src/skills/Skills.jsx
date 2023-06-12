import React from 'react'
import "./skills.css"
import Languages from "./Languages"
import Tools from "./Tools"
import Technologies from "./Technologies";
import Libraries from "./Libraries";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Languages, Technologies, Libraries, and Developer Tools</span>

        <div className="skills__container container grid">
            <Languages />
            <Technologies/>
            <Libraries />
            <Tools/>

        </div>

        </section>
    )
}

export default Skills