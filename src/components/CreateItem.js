import React from 'react'

export default class CreateItem extends React.Component {
    
    addItem(event){
        
        event.preventDefault(); // add to prevent default functionality of form

        let item = {
            text: this.refs.taskItem.value,
            key: Date.now()
        }
        this.props.createTask(item);
        this.refs.taskItem.value = "";
    }

    render() {
        return (
            <form onSubmit={this.addItem.bind(this)}>
                <input
                 type="text"
                 placeholder="Enter task"
                 ref="taskItem"
                 />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}