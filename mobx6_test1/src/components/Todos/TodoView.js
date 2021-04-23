import { observer } from 'mobx-react-lite'
function TodoView({ todo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={todo.toggle} />
        <label>{todo.title}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li >
  )
}
// observer保证状态更新后 同步视图更新
export default observer(TodoView)
