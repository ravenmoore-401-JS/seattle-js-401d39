import { render, screen } from '@testing-library/react';
import App from './App';

test('gets information from the API', () => {
  render(<App />);
  let items = await waitFor(() => screen.getAllByRole('listitem'))

  // The actual assertion is the same for both options
  expect(items[0]).toHaveTextContent('foo')
});
