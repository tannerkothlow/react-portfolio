import React, { useState } from 'react';
import Project from './Project';

function Navigation(props) {
    return (
        <div className='app-navigator'>
            <p>Navigation</p>
            <Project />
        </div>
    )
}

export default Navigation;