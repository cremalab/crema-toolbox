---
to: src/state/reducers/index.ts
---
import { State } from "../../types/State"
import { combineReducers } from "redux"
import { reducerTodos } from "./reducerTodos"

export const reducer = combineReducers<State>({
  todos: reducerTodos,
})

export const stateInitial = reducer(undefined, { type: "NOOP" })
