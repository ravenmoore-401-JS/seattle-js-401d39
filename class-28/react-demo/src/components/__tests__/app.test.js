import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../app';

// create an example output
function pokemonHandle(req, res, ctx){
  let output = {
    results: [
      {name: 'foo'},
      {name: 'bar'}
    ]
  }
  return res(ctx.json(output));
}

// jest watcher, to wait for the call to my api
const simulatePokemon = jest.fn(pokemonHandle);

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({
      results: [
        {name:'foo'},
        {name:'bar'}
      ]
    }))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.resetHandlers())
afterAll(() => server.close())

test('load and display names', async () => {
  render(<App />);

  const pokeButton = screen.getByTestId('poke-button');
  fireEvent.click(pokeButton);
  
  let items = await waitFor(() => screen.getAllByRole('listitem'))
  expect(items[0]).toHaveTextContent('foo');
})