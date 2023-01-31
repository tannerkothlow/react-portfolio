import React, { useState } from 'react';

// const placeholderProject = {
//     title: `Placeholder Project`,
//     url: ``,
//     tech: `MERN Stack`
// }

function Project (props) {
    console.log(props.projects);
    

    return (
        <div className='app-project'>
            {props.projects.map(project => (
                <div className='app-project-card' key={project.id}>
                    <a href={project.url}>{project.title}</a>
                    <p>{project.tech}</p>
                    <img src={project.image}></img>
                </div>
            ))}
        </div>
    )
}

export default Project;