import TodoViewStore from './TodoViewStore'
import { makeObservable, observable, action, computed, runInAction } from 'mobx'
import axios from 'axios'

class TodoListStore {
  todos = []
  constructor(todos) {
    if (todos) this.todos = todos

    // 指定变量和方法的类型 相当于mobx5中的装饰器
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      unCompletedTodoCount: computed
    })
    this.loadTodos()
  }

  createTodo(title) {
    this.todos.push(new TodoViewStore(title))
  }
  // 计算属性
  get unCompletedTodoCount() {
    return this.todos.filter(todo => todo.completed === false).length
  }

  async loadTodos() {
    let todos = await axios.get('http://localhost:3006/todos').then(res => res.data)

    // 异步操作
    runInAction(() => {
      todos.forEach(todo => this.todos.push(new TodoViewStore(todo.title)))
    })
  }
}


export default TodoListStore