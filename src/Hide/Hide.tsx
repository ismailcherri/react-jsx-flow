import type { JSX } from 'react'
import { Show } from '../Show/Show'

function Hide<T>({
  when,
  fallback,
  children,
}: Readonly<{
  when: T | boolean | null | undefined
  fallback?: JSX.Element
  children: JSX.Element
}>): JSX.Element | null {
  return (
    <Show
      when={when === false || when === undefined || when === null}
      fallback={fallback}
    >
      {children}
    </Show>
  )
}

export { Hide }
