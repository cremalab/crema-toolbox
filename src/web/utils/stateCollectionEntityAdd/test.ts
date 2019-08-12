import { stateCollectionEntityAdd } from "../stateCollectionEntityAdd"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"
import { Entity } from "../../../shared/types/Entity"

export interface Todo {
  title: string
  complete: boolean
}

interface EntityTodo extends Entity, Todo {}

describe("stateCollectionEntityAdd", () => {
  it("adds `Entity<A>` to `StateCollection<Entity<A>>`", () => {
    // Arrange
    const state: StateCollection<EntityTodo> = {
      entities: {},
      result: [],
    }

    const action: Action<"ANY", EntityTodo> = {
      type: "ANY",
      payload: { id: "1", title: "Test Todo", complete: false },
    }

    // Act
    const received = stateCollectionEntityAdd(state)(action)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
