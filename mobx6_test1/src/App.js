import Counter from './components/Counter/Counter'
import TodoListView from './components/Todos/TodoListView'
import CounterStore from './stores/CounterStore/CounterStore'
import {
  TodoListStore,
  TodoListStoreProvider
} from './stores/TodoStore/TodoListStore'
import TodoViewStore from './stores/TodoStore/TodoViewStore'

const counterStore = new CounterStore()
const todoListStore = new TodoListStore([
  new TodoViewStore('Hello MobX'),
  new TodoViewStore('Hello React')
])

function App() {
  return (
    <TodoListStoreProvider store={todoListStore}>
      <Counter counterStore={counterStore} />
      <TodoListView />
    </TodoListStoreProvider>
  );
}

export default App;
