function Show<T>({
  when,
  fallback,
  children,
}: {
  when: T | boolean | null | undefined
  fallback?: JSX.Element
  children: JSX.Element
}): JSX.Element | null {
  if (when !== undefined && when !== null && when === true) {
    return children
  }

  return fallback ?? null
}

export { Show }
