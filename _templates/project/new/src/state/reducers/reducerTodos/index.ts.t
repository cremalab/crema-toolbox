---
to: src/state/reducers/reducerTodos/index.ts
---
import {
  reducer,
  stateCollectionEntityAdd,
  stateCollectionEntityRemove,
  stateCollectionEntityUpdate,
} from "crema-toolbox"
import { TaggedActionTodoAdd } from "../../actions/actionTodoAdd"
import { TaggedActionTodoRemove } from "../../actions/actionTodoRemove"
import { TaggedActionTodoUpdate } from "../../actions/actionTodoUpdate"
import { ActionType } from "../../../types/ActionType"
import { State } from "../../../types/State"

type TaggedAction =
  | TaggedActionTodoAdd
  | TaggedActionTodoRemove
  | TaggedActionTodoUpdate

export const reducerTodos = reducer<State["todos"], TaggedAction>(
  state => ({
    [ActionType.TodoAdd]: stateCollectionEntityAdd(state),
    [ActionType.TodoRemove]: stateCollectionEntityRemove(state),
    [ActionType.TodoUpdate]: stateCollectionEntityUpdate(state),
  }),
  {
    entities: {},
    result: [],
  },
)
