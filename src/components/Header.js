import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

function Header(props) {
    return (
        <div className='app-header'>
            <div className='header-block'>
            <h1>Portfolio</h1>
            </div>
            <Navigation />
            <Footer />
        </div>
    )
}

export default Header;