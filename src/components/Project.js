import React, { useState } from 'react';

function Project (props) {
    console.log(props.projects);
    
    function assignBackgroundImage(img) {
        const style = {
            backgroundImage: 'url(' + img + ')',
            backgroundRepeat: 'no-repeat'
        };
        return style;
    }

    return (
        <div className='app-project'>
            {props.projects.map(project => (
                <div className='app-card-holder' key={project.id}>
                <div style={assignBackgroundImage(project.image)} className='app-project-card'>
                    <div className='card-placard'>
                    <a href={project.url}>{project.title}</a>
                    <p>{project.tech}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Project;