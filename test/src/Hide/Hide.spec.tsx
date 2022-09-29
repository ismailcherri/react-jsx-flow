import { render, screen } from '@testing-library/react'
import { HideComponent } from './HideTestComponents'

describe('Hide', () => {
  describe('<Hide />', () => {
    it('should hide content if true', () => {
      render(<HideComponent when={true} />)

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should show content if false', () => {
      render(<HideComponent when={false} />)

      const element = screen.getByTestId('element')

      expect(element).toBeDefined()
    })

    it('should render nothing if no fallback is defined', () => {
      render(<HideComponent when={true} />)

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should render fallback if specified', () => {
      render(<HideComponent fallback={<>Nothing to see here!</>} when={true} />)

      const falllback = screen.getByText(/Nothing/i)
      const element = screen.queryAllByTestId('element')

      expect(falllback).toBeDefined()
      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })
  })
})
