import { render, screen } from '@testing-library/react';
import App from './App';

// describe("App", () =>{
  
    test('renders correctly', () => {
      render(<App />);
        const textElement = screen.getByText('Learn React from Sketch');
        expect(textElement).toBeInTheDocument();
    });

    test('Check URL', () =>{
      render(<App />);
        const linkedElement = screen.getByTestId('learn-link');
        expect(linkedElement.href).toContain('reactjs.org');
    });

//});
