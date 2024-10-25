import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

describe('ContactForm Component', () => {
    test('renders contact form', () => {
        render(<ContactForm toggleContactForm={jest.fn()} />);
        expect(screen.getByText('Name:')).toBeInTheDocument();
        expect(screen.getByText('Email:')).toBeInTheDocument();
        expect(screen.getByText('Message:')).toBeInTheDocument();
    });

    test('calls toggleContactForm when close button is clicked', () => {
        const toggleContactFormMock = jest.fn();
        render(<ContactForm toggleContactForm={toggleContactFormMock} />);
        const closeButton = screen.getByText('×');
        fireEvent.click(closeButton);
        expect(toggleContactFormMock).toHaveBeenCalledTimes(1);
    });
});