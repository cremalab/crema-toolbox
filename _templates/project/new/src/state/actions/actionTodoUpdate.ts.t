---
to: src/state/actions/actionTodoUpdate.ts
---
import {
  actionCreator,
  UpdateEntity,
  TaggedActionOfActionCreator,
} from "crema-toolbox"
import { ActionType } from "../../types/ActionType"
import { EntityTodo } from "../../types/EntityTodo"

export const actionTodoUpdate = actionCreator(
  ActionType.TodoUpdate,
  (
    id: UpdateEntity<EntityTodo>["id"],
    properties: UpdateEntity<EntityTodo>["properties"],
  ): UpdateEntity<EntityTodo> => ({
    id,
    properties,
  }),
)

export type TaggedActionTodoUpdate = TaggedActionOfActionCreator<
  typeof actionTodoUpdate
>
