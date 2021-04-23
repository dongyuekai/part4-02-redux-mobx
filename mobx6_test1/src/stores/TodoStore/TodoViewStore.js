
import { action, makeObservable, observable } from 'mobx'

class TodoViewStore {

  id = Math.random()
  title = ''
  completed = false

  constructor(title) {
    this.title = title

    // 标记变量和方法都是可监视响应变化的
    makeObservable(this, {
      completed: observable,
      toggle: action.bound //更正this 指向 这样不用箭头函数也可以访问
    })
  }

  toggle() {
    this.completed = !this.completed
  }
}

export default TodoViewStore