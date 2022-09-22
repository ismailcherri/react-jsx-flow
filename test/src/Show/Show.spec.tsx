import { render, screen } from '@testing-library/react'
import { ShowComponent } from './ShowTestComponents'

describe('Show', () => {
  describe('<Show />', () => {
    it('should show content if true', () => {
      render(<ShowComponent when={true} />)

      const element = screen.getByTestId('element')

      expect(element).toBeDefined()
    })

    it('should hide content if false', () => {
      render(<ShowComponent when={false} />)

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should render nothing if no fallback is defined', () => {
      render(<ShowComponent when={false} />)

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should render fallback if specified', () => {
      render(
        <ShowComponent fallback={<>Nothing to see here!</>} when={false} />
      )

      const falllback = screen.getByText(/Nothing/i)
      const element = screen.queryAllByTestId('element')

      expect(falllback).toBeDefined()
      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })
  })
})
