import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <span>{props.count}</span>
      <button onClick={props.decrement}>-</button>
    </div >
  )
}

// 1 connect 方法会帮助我们订阅store 当store中的状态发生变化更改的时候 会帮助我们重新渲染组件
// 2 connect 方法可以让我们获取store中的状态 将状态通过组件的props属性映射给组件 
// 3 connect 方法可以让我们获取dispatch方法

const mapStateToProps = state => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch({ type: 'increment' })
  },
  decrement() {
    dispatch({ type: 'decrement' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)