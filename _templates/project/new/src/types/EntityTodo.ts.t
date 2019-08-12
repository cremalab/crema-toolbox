---
to: src/types/EntityTodo.ts
---
import { Todo } from "./Todo"
import { Entity } from "crema-toolbox"

/**
 * EntityTodo - Entity & Todo
 * ------------------------------------------------
 * A Todo with an ID
 */

export interface EntityTodo extends Entity, Todo {}
