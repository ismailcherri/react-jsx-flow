import { Hide } from 'react-jsx-flow'

export function HideComponent({
  fallback,
  when,
}: {
  fallback?: JSX.Element
  when: boolean
}): JSX.Element {
  return (
    <Hide fallback={fallback} when={when}>
      <div data-testid="element">This is a test</div>
    </Hide>
  )
}
