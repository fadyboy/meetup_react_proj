import React from 'react'

export default class ListItems extends React.Component {

    render(){
        var todoList = this.props.items;
        function listitems(item){
            return (
                <li key={item.key}>{item.text}</li>
            )
        }

        var displayListItems = todoList.map(listitems);

        return (
            <ul>
                {displayListItems}
            </ul>
        )
    }
}