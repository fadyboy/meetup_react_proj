import React from 'react';

 export default class ListItems extends React.Component {
    render(){

        var todoList = this.props.items;
        function listItems(item){
            return (
                <li key={item.key}>{item.text}</li>
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