import { Switch, Match } from 'react-jsx-flow'

export function SwitchComponent({
  fallback,
  whens,
}: {
  fallback?: JSX.Element
  whens: boolean[]
}): JSX.Element {
  return (
    <Switch fallback={fallback}>
      {whens.map((when, index) => (
        <Match key={index} when={when}>
          <div data-testid="element">This is a test</div>
        </Match>
      ))}
    </Switch>
  )
}
