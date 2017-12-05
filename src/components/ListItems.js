import React from 'react';
import axios from 'axios';

 export default class ListItems extends React.Component {

    render(){

        var todoList = this.props.items;
        console.log(todoList);
        function listItems(task){
            return (
                <li key={task.id}>{task.item}</li>
            )
        }
        var displayItems = todoList.map(listItems);

        return (
            <ul>
                {displayItems}
            </ul>
        )
    }
}