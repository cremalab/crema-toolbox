---
to: src/components/Initializer/test.tsx
---
import React from "react"
import { Initializer } from "."
import { shallowRender } from "crema-toolbox"

describe("Initializer", () => {
  it("renders", () => {
    // Arrange
    const valA = "Initializer"

    // Act
    const received = shallowRender(<Initializer>{valA}</Initializer>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
