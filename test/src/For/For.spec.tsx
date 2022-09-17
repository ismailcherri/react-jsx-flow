import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ForComponent,
  ForObjectComponent,
  ForMemoizedComponent,
} from './ForTestComponents'

describe('For and ForMemo', () => {
  const array = ['a', 'b', 'c']
  const objectsArray = [
    { name: 'John', id: '1' },
    { name: 'Jane', id: '2' },
    { name: 'Judy', id: '3' },
  ]

  describe('<For />', () => {
    it('should map array of primitive values', () => {
      render(<ForComponent array={array} />)

      const first = screen.getByText('a')
      const elements = screen.getAllByTestId('element')

      expect(first).toBeDefined()
      expect(elements).toBeDefined()
      expect(elements.length).toEqual(3)
    })

    it('should map array of objects', () => {
      render(<ForObjectComponent array={objectsArray} />)

      const first = screen.getByText('John')
      const elements = screen.getAllByTestId('element')

      expect(first).toBeDefined()
      expect(elements).toBeDefined()
      expect(elements.length).toEqual(3)
    })

    it('should render nothing if no fallback is defined', () => {
      render(<ForComponent array={undefined} />)

      const elements = screen.queryAllByTestId('element')

      expect(elements).toBeDefined()
      expect(elements.length).toEqual(0)
    })

    it('should render fallback if specified', () => {
      render(<ForComponent array={[]} fallback={<>Nothing to see here!</>} />)

      const falllback = screen.getByText(/Nothing/i)
      const elements = screen.queryAllByTestId('element')

      expect(falllback).toBeDefined()
      expect(elements).toBeDefined()
      expect(elements.length).toEqual(0)
    })
  })

  describe('<ForMemo />', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })

    it('should memoize map function', async () => {
      const logFunction = jest.fn()
      const user = userEvent.setup()
      render(<ForMemoizedComponent array={array} logFunction={logFunction} />)
      await user.click(screen.getByTestId('btn'))

      const elements = screen.getAllByTestId('element')

      expect(elements).toBeDefined()
      expect(elements.length).toEqual(3)
      expect(logFunction).toHaveBeenCalledTimes(3)
    })
  })
})
