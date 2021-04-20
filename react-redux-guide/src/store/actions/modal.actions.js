import { SHOWMODAL, HIDEMODAL, SHOWMODAL_ASYNC } from "../const/modal.const";

export const show = () => ({ type: SHOWMODAL })
export const hide = () => ({ type: HIDEMODAL })

// redux-thunk: action类型为函数实现异步操作 利用中间件来实现异步
// export const show_async = () => dispatch => {
//   setTimeout(() => {
//     dispatch(show())
//   }, 2000);
// }

// redux-saga 实现异步  函数体交给专门的saga文件来处理
export const show_async = () => ({ type: SHOWMODAL_ASYNC });