import { Tagged } from "../../../shared/types/Tagged"
import { Action } from "../../types/Action"
import { Cases } from "../../../shared/types/Cases"
import { matchOr } from "../../../shared/utils/matchOr"

export type ReducerCases<
  State,
  TaggedUnion extends Tagged<Tag, Data>,
  Tag extends string = string,
  Payload = unknown,
  Data extends Action<Tag, Payload> = Action<Tag, Payload>
> = (state: State, stateInitial: State) => Cases<TaggedUnion, State>

export function reducer<
  State,
  TaggedUnion extends Tagged<Tag, Data>,
  Tag extends string = string,
  Payload = unknown,
  Data extends Action<Tag, Payload> = Action<Tag, Payload>
>(reducerCases: ReducerCases<State, TaggedUnion>, initialState: State) {
  return (state: State = initialState, action: Data) => {
    const cases = reducerCases(state, initialState)
    return matchOr<Tagged<Tag, Data>, State>(cases, state, {
      tag: action.type,
      data: action,
    })
  }
}
