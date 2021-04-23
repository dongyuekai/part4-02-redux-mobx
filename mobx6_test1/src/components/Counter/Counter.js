import { observer } from 'mobx-react-lite'

function Counter({ counterStore }) {
  return (
    <div>
      <p className='paragraph'>{counterStore.count}</p>
      <button onClick={() => counterStore.increment()} className='button'>加1</button>
      <button onClick={counterStore.reset} className='button'>重置</button>
    </div>
  )
}
export default observer(Counter)