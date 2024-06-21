import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "..";

describe('<Input />', () => {
    it('should render Input component with all elements', () => {
        render(<Input labelText={'Time'} classNameMinutes="minutes" classNameSeconds="seconds"/>);

        const label = screen.getByText(/time/i);
        expect(label).toBeInTheDocument();

        const Inputs = screen.getAllByPlaceholderText('00');
        Inputs.forEach(input =>  expect(input).toBeInTheDocument());

        
        const colons = screen.getAllByText(':');
        colons.forEach(colon => expect(colon).toBeInTheDocument());

        const inputWrapper = document.querySelector('.input-wrapper');
        expect(inputWrapper).toBeInTheDocument();
    });
});
