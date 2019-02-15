import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionType";

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