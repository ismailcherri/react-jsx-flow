import { ReactElement } from 'react'
import { Show } from '../Show/Show'

function Switch({
  fallback,
  children,
}: {
  fallback?: JSX.Element
  children: ReactElement<MatchProps> | Array<ReactElement<MatchProps>>
}): JSX.Element | null {
  const showFallback = (): boolean => {
    if (!Array.isArray(children)) {
      return (
        children.props.when === undefined ||
        children.props.when === null ||
        !children.props.when
      )
    }
    return children.every(
      (child) =>
        child.props.when === undefined ||
        child.props.when === null ||
        !child.props.when
    )
  }

  if (showFallback()) {
    return fallback ?? null
  }

  return <>{children}</>
}

interface MatchProps {
  when: boolean | undefined | null
  children: JSX.Element
}
function Match({ when, children }: MatchProps): JSX.Element | null {
  return <Show when={when}>{children}</Show>
}

export { Switch, Match }
