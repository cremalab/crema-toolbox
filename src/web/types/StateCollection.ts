import { Entity } from "../../shared/types/Entity"

export interface StateCollection<A extends Entity> {
  entities: { [key: string]: A }
  result: readonly Entity["id"][]
}
