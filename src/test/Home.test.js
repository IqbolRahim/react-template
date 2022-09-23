import { render, screen } from '@testing-library/react';
import { Home } from 'pages';


test('renders Home', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
