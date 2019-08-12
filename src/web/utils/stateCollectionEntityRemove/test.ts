import { stateCollectionEntityRemove } from "../stateCollectionEntityRemove"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"
import { Entity } from "../../../shared/types/Entity"

export interface Todo {
  title: string
  complete: boolean
}

interface EntityTodo extends Entity, Todo {}

describe("stateCollectionEntityRemove", () => {
  it("removes `Entity<A>` from `StateCollection<Entity<A>>`", () => {
    // Arrange
    const state: StateCollection<EntityTodo> = {
      entities: {
        "1": { id: "1", title: "Test Todo", complete: false },
        "2": { id: "2", title: "Test Todo", complete: false },
      },
      result: ["1", "2"],
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action: Action<"ANY", EntityTodo["id"]> = {
      type: "ANY",
      payload: "1",
    }

    // Act
    const received = stateCollectionEntityRemove(state)(action)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
