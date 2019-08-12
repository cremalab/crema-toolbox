---
to: src/components/App/stories.tsx
---
import React from "react"
import { Base as App } from "."
import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

storiesOf("App", module).add("default", () => (
  <App
    todos={[{ id: "123", title: "Build app", complete: false }]}
    todoAdd={action("todoAdd")}
    todoRemove={action("todoRemove")}
    todoUpdate={action("todoUpdate")}
  />
))
