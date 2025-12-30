import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('should render the button with the correct text', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText(/Click me/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
