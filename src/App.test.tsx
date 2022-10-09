import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './components/Header/SearchBar';
import { Main } from './components/Main/Main';

describe('SearchBar', () => {
  test('Finds label search', () => {
    render(<SearchBar/>)
    screen.debug()
    expect(screen.getAllByText(/search/i))
  });
})

describe('Main',  () => {
  test('Finds alt text in images', async() => {
    render(<Main/>)
    screen.debug()
    expect(await screen.findAllByAltText(/mens/i))
  })
})