import { render, screen } from '@testing-library/react'
import App from './App'

// Optional: you can use test or it
test('renders main UI elements correctly', () => {
  render(<App />)

  // Check heading
  expect(screen.getByText(/Jenkins is running in Docker with github CI,CD/i)).toBeInTheDocument()

  // Check button with initial count
  expect(screen.getByText(/count is 0/i)).toBeInTheDocument()

  // Check help text
  expect(
    screen.getByText(/click on the vite and react logos/i)
  ).toBeInTheDocument()
})
