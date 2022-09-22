import { Key } from 'react'
import { For } from '../For/For'

function ForIf<T, U extends JSX.Element>({
  each,
  when,
  fallback,
  children,
}: {
  each: readonly T[] | undefined | null
  when: (item: T, index?: number) => boolean
  fallback?: JSX.Element
  children: (item: T, index?: Key) => U
}): JSX.Element | null {
  return (
    <For each={each?.filter(when)} fallback={fallback}>
      {children}
    </For>
  )
}

export { ForIf }
