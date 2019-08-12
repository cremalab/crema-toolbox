---
to: src/components/App/index.css
---
* {
  box-sizing: border-box;
}

body { 
  background-color: #282c34;
}

.App {
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: top;
  min-height: 100vh;
  padding: 2rem;
}

.App > * + * {
  margin-top: 2rem;
}

.App-logo {
  width: 150px;
}

.Todos {
  max-width: 400px;
  width: 100%;
  border-top: 1px dashed #ffffff1c;
  padding-top: 2rem;
}

.Todos > * + * {
  margin-top: 1rem;
}

.Todos-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.Todos-header h1 {
  font-size: 1.5rem
}

.Todos-header h1, .Todos-header p {
  margin: 0;
}

.Todos-form {
  align-items: stretch;
  border-radius: 0.4rem;
  border: 2px solid #20242b;
  display: flex;
} 

.Todos-form-input {
  appearance: none;
  border-radius: 0.25rem 0 0 0.25rem;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
}

.Todos-form-button {
  appearance: none;
  background: linear-gradient(#ff86df, #e66465);
  border-radius: 0 0.25rem 0.25rem 0;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
}

.Todos-form-button:disabled {
  opacity: 0.5;
}

.Todos-list {
  margin: 0;
  padding: 0;
  width: 100%;
}

.Todos-list > * + * {
  border-top: 2px solid #ffffff1c;
}

.Todos-list-item {
  align-items: center;
  display: flex;
  padding: 1rem 0;
}

.Todos-list-item > * + * {
  align-items: center;
  margin-left: 0.5rem;
}

.Todos-list-item-title {
  flex-grow: 1;
}

.Todos-list-item-remove {
  cursor: pointer;
}