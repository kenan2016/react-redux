import React, {Component} from 'react'
import { Button, Input, List } from 'antd';
// 引入antd 样式
import 'antd/dist/antd.css';
// 从数据仓库里引入store
import store from './store/index'  // 如果你要引入的是 index这个文件，那么我们完全可以不写这个文件名
// ，甚至可以写成import store from './store' 推荐写法。 当然如果你为了代码的可读性，你可以写全
// 引入actiontype常量
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionType'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.handleInputchange = this.handleInputchange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.state = store.getState() // 其实数据的来源来自于store
        console.log(store.getState())
        // 订阅store:当store发生变化的时候会自动执行一下传进subscribe里的回调函数
        store.subscribe(
            this.handleStoreChange
        )
    }
    handleInputchange(e) {
        // 向 stoire说话，我要改变input的value
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        // 我们能通过store 提供的接口通知store要执行的动作
        store.dispatch(action)
        // console.log(e.target.value)
    }
    handleStoreChange() {
        // 数据变化时从store里重新取一次数据
        this.setState(store.getState())
        console.log('store change')
    }
    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action =getDeleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
                <div>
                    <div style={{marginLeft: 10, marginTop: 10}}>
                        <Input value={this.state.inputValue} placeholder='this is placeholder' style={{width:300, marginRight:10}}
                            onChange={this.handleInputchange}
                        />
                        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                    </div>
                    <List
                        style={{width: 300}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                        />
                </div>
        )
    }
}

export default TodoList