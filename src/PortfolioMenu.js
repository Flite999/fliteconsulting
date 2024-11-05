import React from 'react';
import './PortfolioMenu.css'; // Separate CSS for styling

function PortfolioMenu({ className }) {
    return (
        <div className={`portfolio-sidebar ${className}`}>
            <div>
                <h2>Portfolio</h2>
                <p><a href="https://www.markkleinhaus.com" target="_blank" rel="noopener noreferrer">Current & Past Projects</a></p>
            </div>
            <a href="https://www.linkedin.com/in/markkleinhaus/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-xl"></i>
            </a>
        </div>
    );
}

export default PortfolioMenu;