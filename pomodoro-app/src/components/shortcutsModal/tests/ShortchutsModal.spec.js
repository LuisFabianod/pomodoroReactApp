import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ModalContext } from '../../../Context/ModalContext';
import { Header } from '../../Header';
import { ShortcutsModal } from '../../ShortcutsModal'

const mockModalContext = {
    setIsShortcutsOpen: jest.fn(),
};

describe('<Header />', () => {

    const { setIsShortcutsOpen } = mockModalContext;

    it(' should set isShortcutsOpen state to true on shortcutsButton click', () => {
        render(
        <ModalContext.Provider value={{setIsShortcutsOpen}}>
            <Header />
        </ModalContext.Provider>
    )
    
    const shortcutsModalButton = screen.getByRole('button', { name: 'Shortcuts'});  

    act(() => {
        fireEvent.click(shortcutsModalButton);
    })

    expect(setIsShortcutsOpen).toHaveBeenCalled();

    });


    it(' should render settingsModal component', () => {
        
        render(
        <ModalContext.Provider value={{setIsShortcutsOpen}}>
            <ShortcutsModal />
        </ModalContext.Provider>
    )

        const shortcutsModal = document.querySelector('dialog')
        expect(shortcutsModal).toBeInTheDocument();
    });
});