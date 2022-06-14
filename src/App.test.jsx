import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import App from './App'

test ('render App', () =>{
  render(<App />)
  screen.debug()
  
  // const TextButton = screen.getByText(/todo/i)
  // expect(TextButton).toBeInTheDocument()
})