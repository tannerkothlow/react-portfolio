import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Header(props) {
    const [displayState, setDisplayState] = useState('about-me');

    const changeState = (e) => {
        e.preventDefault();
        // Changes the activated tab
        document.getElementById(displayState).style.color = "black";
        setDisplayState(e.target.id);
        // document.getElementById(displayState).style.color = "blue";
    }

    return (
        <div className='app-header'>
            <div className='header-block'>
            <h1>Portfolio</h1>
            <ul>
                <li id='about-me' onClick={changeState}>About Me</li>
                <li id='portfolio' onClick={changeState}>Portfolio</li>
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