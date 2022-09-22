import { render, screen } from '@testing-library/react'
import { Match, Switch } from 'react-jsx-flow'
import { SwitchComponent } from './SwitchTestComponents'

describe('Switch', () => {
  describe('<Switch />', () => {
    it('should show content if true', () => {
      render(<SwitchComponent whens={[true, false]} />)

      const elements = screen.getAllByTestId('element')

      expect(elements).toBeDefined()
      expect(elements.length).toEqual(1)
    })

    it('should show multiple content if true', () => {
      render(<SwitchComponent whens={[true, true, false]} />)

      const elements = screen.getAllByTestId('element')

      expect(elements).toBeDefined()
      expect(elements.length).toEqual(2)
    })

    it('should hide content if false', () => {
      render(<SwitchComponent whens={[false, false, false]} />)

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should hide single content if false', () => {
      render(
        <Switch>
          <Match when={false}>
            <div data-testid="element">Nothing!</div>
          </Match>
        </Switch>
      )

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should render nothing if no fallback is defined', () => {
      render(<SwitchComponent whens={[false, false, false]} />)

      const element = screen.queryAllByTestId('element')

      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })

    it('should render fallback if specified', () => {
      render(
        <SwitchComponent
          fallback={<>Nothing to see here!</>}
          whens={[false, false, false]}
        />
      )

      const falllback = screen.getByText(/Nothing/i)
      const element = screen.queryAllByTestId('element')

      expect(falllback).toBeDefined()
      expect(element).toBeDefined()
      expect(element.length).toEqual(0)
    })
  })
})
