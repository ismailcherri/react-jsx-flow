import { Key, memo } from 'react'

// see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087#issuecomment-568218789
type IdentityFunction = <T>(fn: T) => T

const typedMemo: IdentityFunction = memo

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

const ForMemo = typedMemo(For)

export { For, ForMemo }
