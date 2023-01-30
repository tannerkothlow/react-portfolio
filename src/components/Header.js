import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Header(props) {
    return (
        <div className='app-header'>
            <h1>Portfolio</h1>
            <Navigation />
        </div>
    )
}

export default Header;