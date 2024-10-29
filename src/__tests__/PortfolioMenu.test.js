import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioMenu from '../PortfolioMenu';

describe('PortfolioMenu Component', () => {
    test('renders portfolio menu', () => {
        render(<PortfolioMenu />);
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
        expect(screen.getByText('(under construction)')).toBeInTheDocument();
    });

});