import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterContext } from '../../../Context/CounterContext';
import { Counter } from '..';


const mockContext = {
  counter: 3000,
};

it('should render counter component with counter value', () => {
  const { counter } = mockContext;
  render(
    <CounterContext.Provider value={{ counter }}>
      <Counter />
    </CounterContext.Provider>
  );

  const counterElement = screen.getByRole('heading', { name: '50:00' });
  expect(counterElement).toBeInTheDocument();
});
