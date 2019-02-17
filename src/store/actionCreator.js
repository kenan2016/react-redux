import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionType"
import axios from 'axios'

// 创建action的通用方法：解释：将action的创建抽象出来的意义在于，避免在众多文件中action的分散，这样不利于管理
export const getInputChangeAction = (value) => ({ // 这里是返回一个对象
    type: CHANGE_INPUT_VALUE,
    value // 这个写法 等价于 value:value
})

export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// 注意这里返回是一个函数而不是像上面一样是一个对象了
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/products2').then((res)=>{
            const data = res.data.products
            // 要将数据传给store（要改变store里面的数据，
            //需要先将数据传到reducer里面然后传回来，又由store捕获最新的store，而不是直接改变里面的值）
            // 先创建action
            // const action = initListAction(data)
            // store.dispatch(action)
            const action = initListAction(data)
            dispatch(action)
        }).catch((e)=> {

        })
    }   
}