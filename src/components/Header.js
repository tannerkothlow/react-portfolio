import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Header(props) {
    const [displayState, setDisplayState] = useState('about-me');

    const changeState = (e) => {
        e.preventDefault();

        setDisplayState(e.target.id);
        console.log(displayState);
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
            <Navigation display={displayState}/>
            <Footer />
        </div>
    )
}

export default Header;