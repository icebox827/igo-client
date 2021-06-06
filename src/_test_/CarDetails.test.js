import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { GridItem, Grid, Box } from '@chakra-ui/react';

describe('CarDetails component', () => {
  it('Should render Grid', () => {
    render(<Grid />);
  });

  it('Should render a GridItem', () => {
    render(<GridItem />);
  });

  it('Should render a Box', () => {
    render(<Box />);
  });
});
