import { useState, useCallback, Key } from 'react'
import { ForIf, ForIfMemo } from 'react-jsx-flow'

export function ForIfComponent({
  array,
  fallback,
  when,
}: {
  array?: string[]
  fallback?: JSX.Element
  when: (item: string) => boolean
}): JSX.Element {
  return (
    <ForIf each={array} fallback={fallback} when={when}>
      {(item, index) => (
        <div key={index} data-testid="element">
          {item}
        </div>
      )}
    </ForIf>
  )
}

interface TestObject {
  name: string
  id: string
}
export function ForIfObjectComponent({
  array,
  fallback,
  when,
}: {
  array?: TestObject[]
  fallback?: JSX.Element
  when: (item: TestObject) => boolean
}): JSX.Element {
  return (
    <ForIf each={array} fallback={fallback} when={when}>
      {(item) => (
        <div key={item.id} data-testid="element">
          {item.name}
        </div>
      )}
    </ForIf>
  )
}

export function ForIfMemoizedComponent({
  array,
  fallback,
  when,
  logFunction,
}: {
  array?: string[]
  fallback?: JSX.Element
  when: (item: string) => boolean
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
      <ForIfMemo each={array} fallback={fallback} when={when}>
        {callback}
      </ForIfMemo>
      <button
        data-testid="btn"
        onClick={() => setValue(value === null ? { name: 'clicked!' } : null)}
      >
        Click!
      </button>
    </>
  )
}
