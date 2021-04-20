// redux-actions 简化写法

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter2.actions'

function Counter2({ count, increment, decrement }) {
  return (
    <div>
      <button onClick={() => increment(10)}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.counter2.count
})

const mapDispatchToProps = dispatch => bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)