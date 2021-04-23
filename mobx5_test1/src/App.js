import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter')
@observer
class App extends Component {
  componentDidMount() {
    const { getData } = this.props.counter
    getData()
  }
  render() {
    const { counter } = this.props
    return (
      <div>
        <button onClick={counter.increment}>+1</button>
        <span>{counter.count}</span>
        <button onClick={counter.decrement}>-1</button>
        <span>{counter.getResult}</span>
        <div>
          <input value={counter.username} type='text' onChange={e => counter.changeUserName(e.target.value)} />
          <span>{counter.username}</span>
        </div>
        <div>
          {
            counter.users.map(user => (
              <div key={user.id}>
                <span>{user.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default App;
