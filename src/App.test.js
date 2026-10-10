import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the featured player cards', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /legends & game changers/i })
  ).toBeInTheDocument();
  expect(screen.getByText('Kylian Mbappé')).toBeInTheDocument();
  expect(screen.getByText('Jude Bellingham')).toBeInTheDocument();
  expect(screen.getByText('Erling Haaland')).toBeInTheDocument();
  expect(screen.getByText('Vinícius Júnior')).toBeInTheDocument();
});
