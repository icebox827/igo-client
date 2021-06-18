import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from '../containers/Navbar';

describe('<NavBar />', () => {
  let component;

  beforeEach(() => {
    component = render(<MemoryRouter><NavBar /></MemoryRouter>);
  });

  it('Should be a Stock button', () => {
    component.getByText('Home');
  });

  it('Should be a Company button', () => {
    component.getByText('Car');
  });

  it('Should be a Forex button', () => {
    component.getByText('Reservation');
  });
});
