import React from 'react'
import { render, screen } from '@testing-library/react'
import Counter from '../containers/Counter'

test('renders counter text', () => {
  render(<Counter />)
  const linkElement = screen.getByText(/counter/i)
  expect(linkElement).toBeInTheDocument()
})
