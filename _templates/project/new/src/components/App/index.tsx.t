---
to: src/components/App/index.tsx
---
import React, { useState } from "react"
import logo from "../../assets/crema-logo.svg"
import { EntityTodo } from "../../types/EntityTodo"
import { State } from "../../types/State"
import { actionTodoAdd } from "../../state/actions/actionTodoAdd"
import { actionTodoRemove } from "../../state/actions/actionTodoRemove"
import { actionTodoUpdate } from "../../state/actions/actionTodoUpdate"
import { connect } from "react-redux"
import "./index.css"

type Props = Readonly<{
  todos: readonly EntityTodo[]
  todoAdd: (todo: EntityTodo) => void
  todoRemove: (id: string) => void
  todoUpdate: (
    id: string,
    props: Partial<Pick<EntityTodo, "title" | "complete">>,
  ) => void
}>

export function Base({ todos, todoAdd, todoRemove, todoUpdate }: Props) {
  const [value, setValue] = useState("")

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = x =>
    setValue(x.target.value)

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = x => {
    x.preventDefault()
    todoAdd({
      id: new Date().getTime().toString(),
      title: value,
      complete: false,
    })
    setValue("")
  }

  const handleChangeCheckbox = (x: EntityTodo) => () =>
    todoUpdate(x.id, { complete: !x.complete })

  const handleTodoRemove = (x: EntityTodo) => () => todoRemove(x.id)

  const completenessRatio = `${todos.filter(x => x.complete).length}/${
    todos.length
  }`

  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="Crema logo" />
      <div className="Todos">
        <div className="Todos-header">
          <h1>Todos</h1>
          <p>Complete: {completenessRatio}</p>
        </div>
        <form className="Todos-form" onSubmit={handleSubmit}>
          <input
            className="Todos-form-input"
            value={value}
            onChange={handleChangeText}
            placeholder="Add a Todo"
          />
          <button className="Todos-form-button" disabled={!value.length}>
            Add
          </button>
        </form>
        <ul className="Todos-list">
          {todos.map(todo => (
            <li className="Todos-list-item" key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.complete}
                onChange={handleChangeCheckbox(todo)}
                data-testid="checkbox"
              />
              <div className="Todos-list-item-title">{todo.title}</div>
              <div
                className="Todos-list-item-remove"
                onClick={handleTodoRemove(todo)}
                role="img"
                aria-label="remove"
                data-testid="remove"
              >
                ✕
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const mapStateToProps = (state: State) => {
  return {
    todos: state.todos.result.map(x => state.todos.entities[x]),
  }
}

const mapDispatchToProps = {
  todoAdd: actionTodoAdd,
  todoRemove: actionTodoRemove,
  todoUpdate: actionTodoUpdate,
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Base)
