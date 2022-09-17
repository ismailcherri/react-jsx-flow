import { useState, useCallback, Key } from 'react'
import { For, ForMemo } from 'react-jsx-flow'

export function ForComponent({
  array,
  fallback,
}: {
  array?: string[]
  fallback?: JSX.Element
}): JSX.Element {
  return (
    <For each={array} fallback={fallback}>
      {(item, index) => (
        <div key={index} data-testid="element">
          {item}
        </div>
      )}
    </For>
  )
}

export function ForObjectComponent({
  array,
  fallback,
}: {
  array?: Array<{ name: string; id: string }>
  fallback?: JSX.Element
}): JSX.Element {
  return (
    <For each={array} fallback={fallback}>
      {(item) => (
        <div key={item.id} data-testid="element">
          {item.name}
        </div>
      )}
    </For>
  )
}

export function ForMemoizedComponent({
  array,
  fallback,
  logFunction,
}: {
  array?: string[]
  fallback?: JSX.Element
  logFunction: () => void
}): JSX.Element {
  const [value, setValue] = useState<{ name: string } | null>(null)

  const callback = useCallback(
    (item: string, index?: Key): JSX.Element => {
      logFunction()
      return (
        <div key={index} data-testid="element">
          {item}
        </div>
      )
    },
    [logFunction]
  )

  return (
    <>
      <div>{value?.name}</div>
      <ForMemo each={array} fallback={fallback}>
        {callback}
      </ForMemo>
      <button
        data-testid="btn"
        onClick={() => setValue(value === null ? { name: 'clicked!' } : null)}
      >
        Click!
      </button>
    </>
  )
}
