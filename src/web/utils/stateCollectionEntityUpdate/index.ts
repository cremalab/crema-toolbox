/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entity } from "../../../shared/types/Entity"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"
import { UpdateEntity } from "../../../shared/types/UpdateEntity"

/**
 * `stateCollectionEntityUpdate`
 * ------------------
 * Updates `Entity<A>` in `StateCollection<Entity<A>>`
 **/

export const stateCollectionEntityUpdate = <
  A extends Entity,
  State extends StateCollection<A>
>(
  state: State,
) => ({ payload }: Action<any, UpdateEntity<A>>) =>
  state.result.reduce<StateCollection<A>>(
    (a, b) =>
      b === payload.id
        ? {
            ...a,
            entities: {
              ...a.entities,
              [b]: { ...state.entities[b], ...payload.properties },
            },
          }
        : a,
    state,
  )
