import { makeAutoObservable } from 'mobx'

class CounterStore {

  constructor() {
    // 这一句就是相当于装饰器 将属性设为响应式@observable 方法设为 @action
    // 第二个参数 指定 是否是@action
    // 第三个参数 指定 是否autoBind   如果调用的时候不用箭头函数 则 autoBind需要为true
    makeAutoObservable(this, { reset: true }, { autoBind: true })
  }

  count = 10
  increment() {
    this.count += 1
  }
  reset() {
    this.count = 10
  }
}
export default CounterStore