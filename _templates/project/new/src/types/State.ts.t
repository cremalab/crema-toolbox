---
to: src/types/State.ts
---
import { EntityTodo } from "./EntityTodo"
import { StateCollection } from "crema-toolbox"

export interface State {
  todos: StateCollection<EntityTodo>
}
