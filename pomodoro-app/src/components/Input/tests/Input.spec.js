import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "..";

describe('<Input />', () => {
    it(' should render Input component', () => {
        render(<Input />)
        
        const inputWrapper = document.querySelector('.input-wrapper');
        expect(inputWrapper).toBeInTheDocument();
    });
});