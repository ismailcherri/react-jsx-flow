# React JSX Flow

A collection of React JSX flow control components. Highly insipred by [SolidJS flow components](https://github.com/solidjs/solid/blob/main/packages/solid/src/render/flow.ts)

## Introduction

This package provide some controllers which makes JSX flow control easier and more declarative. Memoization support is provided out of the box when possible, and, fallback is used when provided.
They include `<For>`, `<ForIf>`, `<Show>` and `<Switch>`/`<Match>`

## Install

This package requires some peer dependencies, which you need to install by yourself.

```bash
yarn add react-jsx-flow react react-dom
```

or

```bash
npm i react-jsx-flow react react-dom
```

For React Native users:

```bash
yarn add react-jsx-flow react react-native
```

or

```bash
npm i react-jsx-flow react react-native
```

## Usage

The following are the available components

### `<For>` and `<ForMemo>`

They are basically the same components except that `ForMemo` supports memoization using `React.memo` under the hood.

#### `<For>`

It accepts an array which will be mapped according to the provided mapping function and a JSX template. And an optional `fallback` when the array is empty, null or undefined.

```jsx
import { For } from 'react-jsx-flow'

const Component = () => {
  const array = ['a', 'b', 'c']
  return (
    <For each={array} fallback={<>Loading...</>}>
      {(item, index) => <div key={index}>{item}</div>}
    </For>
  )
}
```

For the mapping function, the index can be omitted in case it is available from the object, for example:

```jsx
import { For } from 'react-jsx-flow'

const Component = () => {
  const array = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
  ]
  return (
    <For each={array} fallback={<>Loading...</>}>
      {(item) => <div key={item.id}>{item.title}</div>}
    </For>
  )
}
```

#### `<ForMemo>`

Same as `For`, however, in order to benefit from memoization, you need to use `useCallback` so that the mapping function is not recreated each time with every re-render.

```jsx
import { useCallback } from 'react'
import { ForMemo } from 'react-jsx-flow'

const Component = () => {
  const array = ['a', 'b', 'c']
  const mappingFunction = useCallback(
    (item, index) => <div key={index}>{item}</div>,
    []
  )

  return (
    <ForMemo each={array} fallback={<>Loading...</>}>
      {mappingFunction}
    </ForMemo>
  )
}
```

### `<ForIf>` and `<ForIfMemo>`

Same as `For` but also support filtering.
They are basically the same components except that `ForIfMemo` supports memoization using `React.memo` under the hood.

#### `<ForIf>`

It accepts an array which will be mapped according to the provided mapping function. A filter function should also provided.
An optional `fallback` when the array is empty, null or undefined.

```jsx
import { ForIf } from 'react-jsx-flow'

const Component = () => {
  const array = ['a', 'b', 'c']
  return (
    <ForIf
      each={array}
      when={(item) => item !== 'a'}
      fallback={<>Loading...</>}
    >
      {(item, index) => <div key={index}>{item}</div>}
    </ForIf>
  )
}
```

#### `<ForIfMemo>`

Same as `ForIf`, however, in order to benefit from memoization, you need to use `useCallback` so that the mapping function and the filter function are not recreated each time with every re-render.

```jsx
import { useCallback } from 'react'
import { ForIfMemo } from 'react-jsx-flow'

const Component = () => {
  const array = ['a', 'b', 'c']
  const filterFunction = useCallback((item) => item !== 'a', [])
  const mappingFunction = useCallback(
    (item, index) => <div key={index}>{item}</div>,
    []
  )

  return (
    <ForIfMemo each={array} when={filterFunction} fallback={<>Loading...</>}>
      {mappingFunction}
    </ForIfMemo>
  )
}
```

### `<Show>`

It accepts a condition which when true it will show the provided JSX. An optional `fallback` when the condition is false.

```jsx
import { Show } from 'react-jsx-flow'

const Component = () => {
  const shouldShow = true

  return (
    <Show when={shouldShow} fallback={<>Loadding...</>}>
      <div>Desired Content</div>
    </Show>
  )
}
```

### `<Switch>/<Match>`

They are used together to show or hide matches based on certain condition. When all conditions are false, a fallback provided in `Switch` can be used.

```jsx
import { Switch, Match } from 'react-jsx-flow'

const Component = () => {
  return (
    <Switch fallback={<>Loading...</>}>
      <Match when={false}>
        <div>I'm currently hidden</div>
      </Match>
      <Match when={true}>I'm currently shown</Match>
    </Switch>
  )
}
```
