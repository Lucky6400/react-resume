import React from 'react'

const ProjectItem = ({name, desc, date}) => {

    return (
        <div style={{height: "180px"}} className="col-lg-5">
            <h4 className="w-100 fw-bold">
                {name}
            </h4>
            <p style={{height: "80px", overflow: "hidden"}}>
               {desc}
            </p>
            <small className="text-secondary">
                {date}
            </small>
        </div>
    )
}

export default ProjectItem
