import { ChildProcess } from "child_process"

export const answerPrompts = (a: string[], b: ChildProcess) =>
  a.reduce<Promise<void | {}>>((c, d) => {
    return c.then(
      () =>
        new Promise((res, rej) => {
          if (b.stdin) {
            b.stdin.write(d, () => {
              setTimeout(() => {
                console.log("Answer:", d)
                res()
              }, 400)
            })
          } else {
            rej()
          }
        }),
    )
  }, Promise.resolve())
