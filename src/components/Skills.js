import React from './skillset/React'
import './components.scss'
import Node from './skillset/Node'
import Bootstrap from './skillset/Bootstrap'
import Javascript from './skillset/Javascript'
import Css from './skillset/Css'
import Php from './skillset/Php'

const Skills = () => {
    return (
        <div id="skills" className="w-100 ps-lg-5 pe-lg-5 p-3">
            <h1 className="w-100 border-bottom border-primary border-3">
                Skills
            </h1>
            <div className="w-100 pt-3">
                <React/>
                <Node/>
                <Bootstrap/>
                <Javascript/>
                <Css/>
                <Php/>
            </div>
        </div>
    )
}

export default Skills
