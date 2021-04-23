import { useState } from 'react'
import { useTodoListStore } from '../../stores/TodoStore/TodoListStore'

function TodoHeader() {
  const [title, setTitle] = useState('')
  const todoListStore = useTodoListStore()
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={event => setTitle(event.target.value)}
        onKeyUp={event => {
          if (event.key === 'Enter') {
            todoListStore.createTodo(title)
            setTitle('')
          }
        }}
      />
    </header>
  )
}

export default TodoHeader
