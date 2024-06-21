import React from 'react';
import { render, screen } from '@testing-library/react';
import { ModalContext } from '../../../Context/ModalContext';
import { Header } from '..';

const mockSettingsContext = {
    setIsSettingsOpen: jest.fn(),
};

describe('<Header />', () => {
    it(' should render Header component', () => {
        render(
        <ModalContext.Provider value={{mockSettingsContext}}>
            <Header />
        </ModalContext.Provider>
    )
        const headerComponent = screen.getByRole('banner');
        expect(headerComponent).toBeInTheDocument();
    });
});