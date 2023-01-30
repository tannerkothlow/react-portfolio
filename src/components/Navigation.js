import React, { useState } from 'react';
import Project from './Project';

const displayAboutMe = (
    <div className='app-about-me'>
        <h2>About Me</h2>
        <p>Icon</p>
        <p>About me content.</p>
    </div>
)

const displayPortfolio = (
    <div className='app-portfolio'>
        <h2>Portfolio</h2>
        <Project />
    </div>
)

const displayContact = (
    <div className='app-contact'>
        <h2>Contact Me</h2>
    </div>
)

const displayResume = (
    <div className='app-resume'>
        <h2>Resume</h2>
        <p>Download my resume</p>
        <h3>Front End Proficiencies</h3>
        <h3>Back End Proficiencies</h3>
    </div>
)

function Navigation(props) {

    let display;

    switch(props.display) {
        case 'about-me':
            display = displayAboutMe;
            break;
        case 'portfolio':
            display = displayPortfolio;
            break;
        case 'contact':
            display = displayContact;
            break;
        case 'resume':
            display = displayResume;
            break;
    };

    return (
        <div className='app-navigator'>
            {display}
        </div>
    )
}

export default Navigation;