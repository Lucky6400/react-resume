import React from 'react'
import ProjectItem from './projects/ProjectItem'
import { projectslist } from './projects/data'

const Projects = () => {
    return (
        <div id="projects" className="w-100 ps-lg-5 pe-lg-5 p-3">
            <h1 className="w-100 border-bottom border-primary border-3">
                Projects
            </h1>
            <div className="w-100 row justify-content-between pt-3">
                {projectslist.map((item)=>(
                    <ProjectItem 
                    name={item.name} 
                    desc={item.desc} 
                    date={item.date} 
                    id={item.id}
                    key={item.id}
                    />
                ))}
                
                

            </div>
        </div>
    )
}

export default Projects
