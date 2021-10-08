/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './utils/matchMedia.mock';
import { render, screen } from './utils/testUtils';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  window.crypto = jest.fn();
  window.crypto.getRandomValues = jest.fn();
  window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);
  render(<App />);
  const linkElement = screen.getByText(/collection/i);
  expect(linkElement).toBeInTheDocument();
});
