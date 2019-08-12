import { Tagged } from "./Tagged"

/**
 * `Cases`
 * ---------------------------------------------
 * Describes an object where each key corresponds
 * to the `Tagged["tag"]` property of each member of
 * the Tagged Union provided and each value is a function
 * that is applied to `Tagged["data"]` (if present).
 */

export type Cases<
  A extends Tagged<Tag, unknown>,
  Return,
  Tag extends string = string
> = {
  [K in A["tag"]]: A extends Tagged<K, infer Data> ? (x: Data) => Return : never
}
