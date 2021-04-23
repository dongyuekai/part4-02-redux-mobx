import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/RootStore'
import { autorun, reaction } from 'mobx'
import { useEffect } from 'react'

function Counter() {
  const { counterStore } = useRootStore()
  useEffect(() => {
    // autorun当内部有状态更新的时候就会自动执行 默认执行一次
    // autorun(() => {
    //   console.log('dyk---', counterStore.count)
    // })

    // reaction 方法提供了更加细颗粒度的状态控制 和 autorun 不同，reaction 初始时不会执行副作用
    reaction(
      () => counterStore.count,
      (current, previous) => {
        console.log('dyk---current---', current)
        console.log('dyk---previous---', previous)
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