// 引入action常量
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionType'

// 创建笔记本
const defaultState = { // state 数据初始化
    inputValue: '123',
    list:[]
}

// !!注意：reducer 可以接受state 但是绝对不可以直接修改state，
// 这也是我们要对state做深拷贝赋值给定义的新的变量原因
export default (state = defaultState, action) => {
    // 上一次的store里所有state的值。
    // action 传过来的action，里面包含了传过来的最新的action值{type:xxx,value:xxxx}
    console.log(state, action)
    // reducer要将之前的store 和 最新数据（action里的数据） ， 对数据进行处理，然后返回最新的 state
    if (action.type === CHANGE_INPUT_VALUE) {
        // 改变前store里的inputValue的值
        // 我们先对 state做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState // 这里的newState 会被返回给Store ， store 里面的老数据会被替换
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        console.log(newState)
        return newState
    }

    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        console.log(action.data)
        return newState
    }
    // 这是一个固定的写法   
    return state //state 可以理解成redux 里的所有数据的集合
}