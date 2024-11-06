import React, { useState } from 'react';
import './App.css';
import PortfolioMenu from './PortfolioMenu';
import ContactForm from './ContactForm';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactFormOpen, setContactFormOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleContactForm = () => {
        setContactFormOpen(!contactFormOpen);
    };

    return (
        <div className={`App ${contactFormOpen ? 'no-interaction' : ''}`}>
            <div className={`app-content ${menuOpen ? 'shifted' : ''}`}>
                <div className="company-title">
                    <h1>Flite Consulting</h1>
                    <p>Software consulting services and projects</p>
                    <ul>
                        <li>Mobile Apps</li>
                        <li>Software Architecture</li>
                        <li>Help your services scale and be reliable</li>
                    </ul>
                    <p>
                        <a href="#contact-form" onClick={toggleContactForm}>Contact</a> for a free consultation and quote today.
                    </p>
                </div>
                <button className="menu-button" onClick={toggleMenu}>
                    &#9776;
                </button>


            </div>
            <footer className="footer">

                <p>&copy; 2024 Flite Consulting. All rights reserved.</p>
            </footer>

            <PortfolioMenu className={menuOpen ? 'open' : ''} />

            {contactFormOpen && <ContactForm toggleContactForm={toggleContactForm} />}
        </div>
    );
}

export default App;