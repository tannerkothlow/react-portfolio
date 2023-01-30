import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Header(props) {
    const displayStates = ['about-me', 'portfolio', 'contact', 'resume'];

    const display = displayStates[0];

    const changeState = (e) => {
        // const headerElID = this.id;
        e.preventDefault();
        display = e.target.id;
    }

    return (
        <div className='app-header'>
            <div className='header-block'>
            <h1>Portfolio</h1>
            <ul>
                <li id='about-me' onClick={changeState}>About Me</li>
                <li id='portfolio' onClick={changeState}v>Portfolio</li>
                <li id='contact' onClick={changeState}>Contact</li>
                <li id='resume' onClick={changeState}>Resume</li>
            </ul>
            </div>
            <Navigation display={display}/>
            <Footer />
        </div>
    )
}

export default Header;