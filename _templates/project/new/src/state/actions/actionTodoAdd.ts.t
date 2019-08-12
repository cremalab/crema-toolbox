---
to: src/state/actions/actionTodoAdd.ts
---
import { actionCreator, TaggedActionOfActionCreator } from "crema-toolbox"
import { ActionType } from "../../types/ActionType"
import { EntityTodo } from "../../types/EntityTodo"

export const actionTodoAdd = actionCreator(
  ActionType.TodoAdd,
  (a: EntityTodo) => a,
)

export type TaggedActionTodoAdd = TaggedActionOfActionCreator<
  typeof actionTodoAdd
>
