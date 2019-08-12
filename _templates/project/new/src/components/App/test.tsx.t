---
to: src/components/App/test.tsx
---
import React from "react"
import ReactDOM from "react-dom"
import { Base as App, mapStateToProps } from "."
import { render, fireEvent, cleanup } from "react-testing-library"

afterEach(cleanup)

describe("App", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <App
        todos={[]}
        todoAdd={jest.fn()}
        todoRemove={jest.fn()}
        todoUpdate={jest.fn()}
      />,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders expected structure", () => {
    const { container } = render(
      <App
        todos={[]}
        todoAdd={jest.fn()}
        todoRemove={jest.fn()}
        todoUpdate={jest.fn()}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it("renders todos", () => {
    const { container } = render(
      <App
        todos={[
          { id: "1", title: "Test Todo 1", complete: false },
          { id: "2", title: "Test Todo 2", complete: true },
        ]}
        todoAdd={jest.fn()}
        todoRemove={jest.fn()}
        todoUpdate={jest.fn()}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it("handles submit on form", () => {
    // Arrange
    const handleSubmit = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <App
        todos={[]}
        todoAdd={handleSubmit}
        todoRemove={jest.fn()}
        todoUpdate={jest.fn()}
      />,
    )

    // Act
    fireEvent.change(getByPlaceholderText(/Add a Todo/i), {
      target: {
        value: "Build App",
      },
    })
    fireEvent.click(getByText(/Add/i))

    // Assert
    expect(handleSubmit).toHaveBeenCalled()
  })

  it("handles checking off a todo", () => {
    // Arrange
    const handleUpdate = jest.fn()
    const { getByTestId } = render(
      <App
        todos={[{ id: "1", title: "Build App", complete: false }]}
        todoAdd={jest.fn()}
        todoRemove={jest.fn()}
        todoUpdate={handleUpdate}
      />,
    )

    // Act
    fireEvent.click(getByTestId("checkbox"))

    // Assert
    expect(handleUpdate).toHaveBeenCalled()
  })

  it("handles removing a todo", () => {
    // Arrange
    const handleRemove = jest.fn()
    const { getByTestId } = render(
      <App
        todos={[{ id: "1", title: "Build App", complete: false }]}
        todoAdd={jest.fn()}
        todoRemove={handleRemove}
        todoUpdate={jest.fn()}
      />,
    )

    // Act
    fireEvent.click(getByTestId("remove"))

    // Assert
    expect(handleRemove).toHaveBeenCalled()
  })
})

describe("App mapStateToProps", () => {
  it("maps `state.todos` to `todos` prop", () => {
    expect(
      mapStateToProps({
        todos: {
          entities: {
            "1": { id: "1", title: "Test Todo", complete: false },
          },
          result: ["1"],
        },
      }),
    ).toMatchSnapshot()
  })
})
