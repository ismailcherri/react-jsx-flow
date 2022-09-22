import { useCallback, useState } from 'react'
import { Show } from 'react-jsx-flow'

export function ShowComponent({
  fallback,
  when,
}: {
  fallback?: JSX.Element
  when: boolean
}): JSX.Element {
  return (
    <Show fallback={fallback} when={when}>
      <div data-testid="element">This is a test</div>
    </Show>
  )
}
