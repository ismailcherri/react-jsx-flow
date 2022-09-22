import { useMemo } from 'react'

function Show<T>({
  when,
  fallback,
  children,
}: {
  when: T | boolean | null | undefined
  fallback?: JSX.Element
  children: JSX.Element
}): JSX.Element | null {
  const condition = useMemo<T | boolean | null | undefined>(() => when, [when])

  if (condition !== undefined && condition !== null && condition === true) {
    return children
  }

  return fallback ?? null
}

export { Show }
