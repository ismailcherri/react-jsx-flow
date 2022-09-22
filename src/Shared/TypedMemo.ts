import { memo } from 'react'

// see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087#issuecomment-568218789
type IdentityFunction = <T>(fn: T) => T

export const TypedMemo: IdentityFunction = memo
