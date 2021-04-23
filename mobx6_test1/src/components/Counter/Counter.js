import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/RootStore'
import { autorun } from 'mobx'
import { useEffect } from 'react'

function Counter() {
  const { counterStore } = useRootStore()
  useEffect(() => {
    // autorun当内部有状态更新的时候就会自动执行
    autorun(() => {
      console.log('dyk---', counterStore.count)
    })
  }, [])
  return (
    <div>
      <p className='paragraph'>{counterStore.count}</p>
      <button onClick={() => counterStore.increment()} className='button'>加1</button>
      <button onClick={counterStore.reset} className='button'>重置</button>
    </div>
  )
}
export default observer(Counter)