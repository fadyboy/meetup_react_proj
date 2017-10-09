import React from 'react'
import CreateItem from './CreateItem'
import ListItems from './Listitems'

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    createTask(item){
        this.state.items.push(item)
        this.setState({
            items: this.state.items
        })
    }

    render() {
        return (
            <div>
                <h1>My Todo List</h1>
                <CreateItem items={this.state.items} createTask={this.createTask.bind(this)} />
                <ListItems items={this.state.items} />
            </div>
        )
    }
}