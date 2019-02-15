import { createStore } from 'redux'// 在redux库中引入一个叫createStore 的方法， 利用这个方法就可以创建一个store
import reducer from './reducer' // reducer 

// 创建数据中心
const store =  createStore(reducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // 配置了这个参数以后就可以使用使用chrome商店里的插件redux devtools
) // 创建一个数据的公共存储仓库， 创建store的时候将reducer传给store 

export default store
