import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  
});

test('Try the link', () => {
  render(<App/>);
    const link = screen.getByTestId('learn-link');
    expect(link.href).toContain('reactjs.org');
})
hhh