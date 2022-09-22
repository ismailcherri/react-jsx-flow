import { Key } from 'react'

function For<T, U extends JSX.Element>({
  each,
  fallback,
  children,
}: {
  each: readonly T[] | undefined | null
  fallback?: JSX.Element
  children: (item: T, index?: Key) => U
}): JSX.Element | null {
  if (each === undefined || each === null || each.length === 0) {
    return fallback ?? null
  }

  return each.map<U>(children) as unknown as JSX.Element
}

export { For }
