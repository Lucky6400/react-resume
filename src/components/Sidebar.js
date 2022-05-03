import React, { useState } from 'react'
import './components.scss'
import profilePic from './images/profile.jpg'
const Sidebar = () => {
    return (
        <div className="sidebar bg-primary">
            <div className="w-100 bg-primary">
                <div className="title">
                        <img src={profilePic} alt="" />
                        <h1>
                            LUCKY JAIN
                        </h1>
                        <h4>
                            SDE 1 intern
                        </h4>
                    </div>
                    <div className="navigation">
                        <h6 className="w-100">
                            <a href="#summary">
                                Summary
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#education">
                                Education
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#workexp">
                                Work Experience
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#certifications">
                                Certifications
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#skills">
                                Skills
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#projects">
                                Projects
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#contact">
                                Contact
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#links">
                                Links
                            </a>
                        </h6>
                    </div>
            </div>
                    

            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>

            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header bg-primary">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body bg-primary">

                    <div className="title">
                        <img src={profilePic} alt="" />
                        <h1>
                            LUCKY JAIN
                        </h1>
                        <h4>
                            SDE 1 intern
                        </h4>
                    </div>
                    <div className="navigation">
                        <h6 className="w-100">
                            <a href="#summary">
                                Summary
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#education">
                                Education
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#workexp">
                                Work Experience
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#certifications">
                                Certifications
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#skills">
                                Skills
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#projects">
                                Projects
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#contact">
                                Contact
                            </a>
                        </h6>
                        <h6 className="w-100">
                            <a href="#links">
                                Links
                            </a>
                        </h6>
                    </div>

                </div>
            </div>

            {/* <div onClick={handleClick} className="w-100 text-end text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div> */}

        </div>
    )
}

export default Sidebar
