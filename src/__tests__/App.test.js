import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

jest.mock('../PortfolioMenu', () => () => <div>Portfolio Menu</div>);
jest.mock('../ContactForm', () => ({ toggleContactForm }) => (
    <div>
        Contact Form
        <button onClick={toggleContactForm}>Close</button>
    </div>
));

describe('App Component', () => {
    test('renders company title and description', () => {
        render(<App />);
        expect(screen.getByText('Flite Consulting')).toBeInTheDocument();
        expect(screen.getByText('Software consulting services and projects')).toBeInTheDocument();
    });

    test('toggles the menu when the menu button is clicked', () => {
        render(<App />);
        const menuButton = screen.getByText('☰');
        fireEvent.click(menuButton);
        expect(screen.getByText('Portfolio Menu')).toBeInTheDocument();
        fireEvent.click(menuButton);
        expect(screen.queryByText('Portfolio Menu')).not.toBeInTheDocument();
    });

    test('toggles the contact form when the contact link is clicked', () => {
        render(<App />);
        const contactLink = screen.getByText('Contact');
        fireEvent.click(contactLink);
        expect(screen.getByText('Contact Form')).toBeInTheDocument();
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
        expect(screen.queryByText('Contact Form')).not.toBeInTheDocument();
    });

    test('adds no-interaction class when contact form is open', () => {
        render(<App />);
        const contactLink = screen.getByText('Contact');
        fireEvent.click(contactLink);
        expect(screen.getByText('Contact Form')).toBeInTheDocument();
        expect(document.querySelector('.App')).toHaveClass('no-interaction');
    });

    test('removes no-interaction class when contact form is closed', () => {
        render(<App />);
        const contactLink = screen.getByText('Contact');
        fireEvent.click(contactLink);
        expect(screen.getByText('Contact Form')).toBeInTheDocument();
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
        expect(screen.queryByText('Contact Form')).not.toBeInTheDocument();
        expect(document.querySelector('.App')).not.toHaveClass('no-interaction');
    });
});