import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '..'; 

describe('<Button />', () => {
    it('should render button component with text: hello', () => {
        render(<Button >Hello</Button>);
        const buttonElement = screen.getByRole('button', {name: /hello/i});
        expect(buttonElement).toBeInTheDocument();
      });
      
    it('should render button component with class: button', () => {
        render(<Button/>);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveClass('button');
        
    });

    it('should call function on button click', () => {
        const fn = jest.fn();

        render(<Button handleFunction={fn}/>);
        const buttonElement = screen.getByRole('button');

        act(() => {
            fireEvent.click(buttonElement);
        })

        expect(fn).toHaveBeenCalledTimes(1);
    })
});
