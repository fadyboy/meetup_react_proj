import React from 'react';

export default class CreateItem extends React.Component {
    
    addItem(event){
        event.preventDefault();
        let item = {
            text: this.refs.inputItem.value,
            key: Date.now()
        }

        this.props.createTask(item);
        this.refs.inputItem.value = "";
    }

    render(){
        return (
            <form onSubmit={this.addItem.bind(this)}>
                <input 
                 type="text"
                 placeholder="Enter task here..."
                 ref="inputItem"
                 />
                 <button type="submit">Add Task</button>
            </form>
        )
    }
}