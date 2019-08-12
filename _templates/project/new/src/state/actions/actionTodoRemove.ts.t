---
to: src/state/actions/actionTodoRemove.ts
---
import { actionCreator, TaggedActionOfActionCreator } from "crema-toolbox"
import { ActionType } from "../../types/ActionType"
import { EntityTodo } from "../../types/EntityTodo"

export const actionTodoRemove = actionCreator(
  ActionType.TodoRemove,
  (a: EntityTodo["id"]) => a,
)

export type TaggedActionTodoRemove = TaggedActionOfActionCreator<
  typeof actionTodoRemove
>
