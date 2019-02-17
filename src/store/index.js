// 引入redux的中间件 redux-thunk
import { createStore, applyMiddleware, compose} from 'redux'// 在redux库中引入一个叫createStore 的方法， 利用这个方法就可以创建一个store
// https://github.com/reduxjs/redux-thunk
// https://github.com/zalmoxisus/redux-devtools-extension\
//1.2 Advanced store setup
import thunk from 'redux-thunk'
import reducer from './reducer' // reducer 

// 这个设置用于同时开启 redux-devtools 和 其他 redux 插件
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
      );

// 创建数据中心
const store =  createStore(
    reducer,
    enhancer 
   // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // 配置了这个参数以后就可以使用使用chrome商店里的插件redux devtools
) // 创建一个数据的公共存储仓库， 创建store的时候将reducer传给store 

export default store
