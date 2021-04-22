
// 1 创建store对象 存储默认状态0
// 2 将store对象放在一个全局的 组件可以够到的地方
// 3 让组件获取store对象中的状态 并将状态显示在组件中

import { observable, configure, action, runInAction, flow, computed } from 'mobx'
import axios from 'axios'

// 通过配置强制程序使用action函数更改应用程序中的状态
// 没有@action修饰的函数不能更改状态
configure({ enforceActions: 'observed' });

class CounterStore {

  // 变成可观察数据
  @observable count = 0;
  @observable users = []

  // @action increment = () => {
  //   this.count = this.count + 1
  // }

  // @action.bound 指定this指向正确
  @action.bound increment() {
    this.count = this.count + 1
  }
  @action decrement = () => {
    this.count = this.count - 1
  }

  // 异步更新状态 方式一 runInAction
  // @action.bound async getData() {
  //   let { data } = await axios.get('http://localhost:5000/users')
  //   runInAction(() => this.users = data)
  // }

  // 异步更新状态 方式二 flow
  getData = flow(function* () {
    let { data } = yield axios.get('http://localhost:5000/users')
    this.users = data
  }).bind(this)

  // computed计算属性
  @computed get getResult() {
    return this.count * 10
  }


}

const counter = new CounterStore()

export default counter
