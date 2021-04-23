
// 1 创建store对象 存储默认状态0
// 2 将store对象放在一个全局的 组件可以够到的地方
// 3 让组件获取store对象中的状态 并将状态显示在组件中

import { observable, configure, action, runInAction, flow, computed, autorun } from 'mobx'
import axios from 'axios'

// 通过配置强制程序使用action函数更改应用程序中的状态
// 没有@action修饰的函数不能更改状态
configure({ enforceActions: 'observed' });

class CounterStore {

  constructor() {
    autorun(() => {
      try {
        uniqueUserName(this.username)
        console.log('用户名可用')
      } catch (error) {
        console.log('用户名不可使用')
      }
    }, {
      delay: 2000
    })
  }

  // 变成可观察数据
  @observable count = 0;
  @observable users = []
  @observable username = ''


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

  @action.bound changeUserName(username) {
    this.username = username
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

function uniqueUserName(username) {
  return new Promise((resolve, reject) => {
    if (username === 'admin') {
      reject('用户名admin不可使用')
    } else {
      resolve()
    }
  })
}

export default counter
