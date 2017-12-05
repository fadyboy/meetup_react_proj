import React from 'react';
import axios from 'axios';

export default class CreateItem extends React.Component {
    
    addItem(event){
        event.preventDefault();
        let task = {
            item: this.refs.inputItem.value,
            isComplete: false,
            
        }
        this.props.createTask(task);
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