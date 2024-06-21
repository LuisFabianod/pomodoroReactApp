import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalContext } from '../../../Context/ModalContext';
import { SettingsContext } from '../../../Context/SettingsContext';
import { Header } from '../../Header';
import { SettingsModal } from '..';

const mockModalContext = {
    setIsSettingsOpen: jest.fn(),
};

const mockSettingsContext ={
    setSettingsDidModified: jest.fn(),
};

describe('<Header />', () => {

    const { setSettingsDidModified } = mockSettingsContext;
    const { setIsSettingsOpen } = mockModalContext;

    it(' should set isSettingsOpen state to true on settingsButton click', () => {
        render(
        <ModalContext.Provider value={{setIsSettingsOpen}}>
            <Header />
        </ModalContext.Provider>
    )
    
    const settingsModalButton = screen.getByRole('button', { name: 'menu-button'});  

    act(() => {
        fireEvent.click(settingsModalButton);
    })

    expect(setIsSettingsOpen).toHaveBeenCalledWith(true);

    });


    it(' should render settingsModal component', () => {
        render(
        <SettingsContext.Provider value={{setSettingsDidModified}}>
        <ModalContext.Provider value={{setIsSettingsOpen}}>
            <SettingsModal />
        </ModalContext.Provider>
        </SettingsContext.Provider >
    )

        const settingsModal = document.querySelector('dialog')
        expect(settingsModal).toBeInTheDocument();

        const submitButton = document.querySelector('.button');
        expect(submitButton).toBeInTheDocument();
    });

    it(' should call setCounter on submitButton click', () => {
        render(
        <SettingsContext.Provider value={{setSettingsDidModified}}>
        <ModalContext.Provider value={{setIsSettingsOpen}}>
            <SettingsModal />
        </ModalContext.Provider>
        </SettingsContext.Provider >
    )

    const submitButton = document.querySelector('.button');

    act(() => {
        fireEvent.click(submitButton);
    });

    expect(setSettingsDidModified).toHaveBeenCalledWith(true);

    });
});