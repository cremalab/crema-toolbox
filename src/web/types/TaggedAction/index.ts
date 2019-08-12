import { Action as ReduxAction } from "../Action"
import { Tagged } from "../../../shared/types/Tagged"

export interface TaggedAction<
  Type extends string,
  Action extends ReduxAction<Type, unknown>
> extends Tagged<Type, Action> {}

export const TaggedAction = <
  Type extends string,
  Action extends ReduxAction<Type, Payload>,
  Payload = unknown
>(
  action: Action,
) => Tagged(action.type, action)
