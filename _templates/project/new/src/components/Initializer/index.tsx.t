---
to: src/components/Initializer/index.tsx
---
import React from "react"
import { Provider as ProviderRedux } from "react-redux"
import { store } from "../../state"

/**
 * Wraps <App /> in `src/index.tsx`
 * Add all providers and singletons here
 **/

type Props = Readonly<{ children: React.ReactNode }>

export function Initializer({ children }: Props) {
  return <ProviderRedux store={store}>{children}</ProviderRedux>
}
