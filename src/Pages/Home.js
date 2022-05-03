import React from 'react'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Links from '../components/Links'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import Summary from '../components/Summary'
import WorkExp from '../components/WorkExp'
import './styles.scss'

const Home = () => {
  return (
    <div className="home-container">
        <Sidebar/>
        <div className="home-main">
            <Summary/>
            <Education/>
            <WorkExp/>
            <Certifications/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Links/>
        </div>
    </div>
  )
}

export default Home