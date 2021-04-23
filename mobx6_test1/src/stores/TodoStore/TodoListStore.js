import TodoViewStore from './TodoViewStore'
import { makeObservable, observable, action } from 'mobx'
import { createContext, useContext } from 'react'

class TodoListStore {
  todos = []
  constructor(todos) {
    if (todos) this.todos = todos
    makeObservable(this, {
      todos: observable,
      createTodo: action
    })
  }
  createTodo(title) {
    this.todos.push(new TodoViewStore(title))
  }
}
const TodoListStoreContext = createContext()

const useTodoListStore = () => {
  return useContext(TodoListStoreContext)
}

const TodoListStoreProvider = ({ store, children }) => {
  return (
    <TodoListStoreContext.Provider value={store}>
      {children}
    </TodoListStoreContext.Provider>
  )
}


export { TodoListStore, TodoListStoreProvider, useTodoListStore }