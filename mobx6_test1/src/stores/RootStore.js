import CounterStore from "./CounterStore/CounterStore"
import TodoListStore from "./TodoStore/TodoListStore"
import { createContext, useContext } from "react"

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
    this.todoListStore = new TodoListStore()
  }
}

const RootStoreContext = createContext()

const useRootStore = () => {
  return useContext(RootStoreContext)
}  

const RootStoreProvider = ({ store, children }) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

export { RootStore, RootStoreProvider, useRootStore }