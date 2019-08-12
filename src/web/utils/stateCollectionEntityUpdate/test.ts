import { stateCollectionEntityUpdate } from "../stateCollectionEntityUpdate"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"
import { UpdateEntity } from "../../../shared/types/UpdateEntity"
import { Entity } from "../../../shared/types/Entity"

export interface Todo {
  title: string
  complete: boolean
}

interface EntityTodo extends Entity, Todo {}

describe("stateCollectionEntityUpdate", () => {
  it("updates `Entity<A>` in `StateCollection<Entity<A>>`", () => {
    // Arrange
    const state: StateCollection<EntityTodo> = {
      entities: {
        "1": { id: "1", title: "Test Todo", complete: false },
        "2": { id: "2", title: "Test Todo", complete: false },
      },
      result: ["1", "2"],
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action: Action<any, UpdateEntity<EntityTodo>> = {
      type: "ANY",
      payload: { id: "1", properties: { complete: true } },
    }

    // Act
    const received = stateCollectionEntityUpdate(state)(action)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
