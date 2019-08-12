---
to: src/components/App/__snapshots__/test.tsx.snap
---
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`App mapStateToProps maps \`state.todos\` to \`todos\` prop 1`] = `
Object {
  "todos": Array [
    Object {
      "complete": false,
      "id": "1",
      "title": "Test Todo",
    },
  ],
}
`;

exports[`App renders expected structure 1`] = `
<div>
  <div
    class="App"
  >
    <img
      alt="Crema logo"
      class="App-logo"
      src="crema-logo.svg"
    />
    <div
      class="Todos"
    >
      <div
        class="Todos-header"
      >
        <h1>
          Todos
        </h1>
        <p>
          Complete: 
          0/0
        </p>
      </div>
      <form
        class="Todos-form"
      >
        <input
          class="Todos-form-input"
          placeholder="Add a Todo"
          value=""
        />
        <button
          class="Todos-form-button"
          disabled=""
        >
          Add
        </button>
      </form>
      <ul
        class="Todos-list"
      />
    </div>
  </div>
</div>
`;

exports[`App renders todos 1`] = `
<div>
  <div
    class="App"
  >
    <img
      alt="Crema logo"
      class="App-logo"
      src="crema-logo.svg"
    />
    <div
      class="Todos"
    >
      <div
        class="Todos-header"
      >
        <h1>
          Todos
        </h1>
        <p>
          Complete: 
          1/2
        </p>
      </div>
      <form
        class="Todos-form"
      >
        <input
          class="Todos-form-input"
          placeholder="Add a Todo"
          value=""
        />
        <button
          class="Todos-form-button"
          disabled=""
        >
          Add
        </button>
      </form>
      <ul
        class="Todos-list"
      >
        <li
          class="Todos-list-item"
        >
          <input
            data-testid="checkbox"
            type="checkbox"
          />
          <div
            class="Todos-list-item-title"
          >
            Test Todo 1
          </div>
          <div
            aria-label="remove"
            class="Todos-list-item-remove"
            data-testid="remove"
            role="img"
          >
            ✕
          </div>
        </li>
        <li
          class="Todos-list-item"
        >
          <input
            checked=""
            data-testid="checkbox"
            type="checkbox"
          />
          <div
            class="Todos-list-item-title"
          >
            Test Todo 2
          </div>
          <div
            aria-label="remove"
            class="Todos-list-item-remove"
            data-testid="remove"
            role="img"
          >
            ✕
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
`;
