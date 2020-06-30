import React from 'react';
import { render } from '@testing-library/react';
import AppHome from './AppHome';
import '@testing-library/jest-dom/extend-expect';


test('renders learn react link', () => {
  const { getByText } = render(<AppHome />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
