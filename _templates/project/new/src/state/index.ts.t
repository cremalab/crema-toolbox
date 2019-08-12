---
to: src/state/index.ts
---
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { reducer } from "./reducers"

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
)
