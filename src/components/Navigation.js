import React, { useState } from 'react';
import Project from './Project';

const displayAboutMe = (
    <div className='app-about-me'>
        <h2>About Me</h2>
        <p>Icon</p>
        <p>
            Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text 
            filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text 
        </p>
        <p>
            filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text 
            filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text 
            filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text 
        </p>
    </div>
)

const displayPortfolio = (
    <div className='app-portfolio'>
        <h2>Portfolio</h2>
        <Project />
    </div>
)

// const displayContact = (
//     <div className='app-contact'>
//         <h2>Contact Me</h2>
//         {/* name, email, message */}
//         <form className="form">
//             <input
//             value={contactName}
//             name="contactName"
//             type="text"
//             placeholder="Name"
//             />
//             <input
//             value={contactEmail}
//             name="contactEmail"
//             type="text"
//             placeholder="Email"
//             />
//             <input
//             value={contactMessage}
//             name="conactMessage"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="First Name"
//             />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
// )

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

    // Checks for any static asset state
    switch(props.display) {
        case 'about-me':
            display = displayAboutMe;
            break;
        case 'portfolio':
            display = displayPortfolio;
            break;
        // case 'contact':
        //     display = displayContact;
        //     break;
        case 'resume':
            display = displayResume;
            break;
    };
    // If contact form state, attach JS logic to displayContact before sending it higher up.
    if (props.display = 'contact') {
        const [contactName, setContactName] = useState('');
        const [contactEmail, setContactEmail] = useState('');
        const [contactMessage, setContactMessage] = useState('');

        const handleInputChange = (e) => {
            const { name, value } = e.target;
        
            return name === 
            'contactName' ? setContactName(value) 
            : 'contactEmail' ? setContactEmail(value)
            : setContactMessage(value);
          };

        const handleFormSubmit = (e) => {
            e.preventDefault();
        
            console.log(contactName, contactEmail, contactMessage);
            setContactName('');
            setContactEmail('');
            setContactMessage('');
        };

        const displayContact = (
            <div className='app-contact'>
                <h2>Contact Me</h2>
                {/* name, email, message */}
                <form className="form">
                    <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    />
                    <input
                    value={contactEmail}
                    name="contactEmail"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                    />
                    <input
                    value={contactMessage}
                    name="conactMessage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                    />
                <button type="button" onClick={handleFormSubmit}>
                  Submit
                </button>
              </form>
            </div>
        )

        display = displayContact;
    }

    return (
        <div className='app-navigator'>
            <div className='app-nav-box'>
            {display}
            </div>
        </div>
    )
}

export default Navigation;