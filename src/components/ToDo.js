import React from 'react';
import CreateItem from './CreateItem';
import ListItems from './ListItems';
import axios from 'axios';

export default class ToDo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.getListofTodos();
    }

    getListofTodos(){
        var url = "http://localhost:3000/api/items";
        axios.get(url)
          .then((response)=>{
            this.setState({
                items:response.data
            });
          })
    }

    async saveTodo(task){
        var url = "http://localhost:3000/api/items";
        await axios.post(url, task)
        .then((response)=>{
            console.log("post ", response.data);
            return response.data;
        })
        .catch((error)=>{
            console.log("Error ", error)
        })
    }

    createTask(item){
        this.saveTodo(item);
        this.state.items.push(item);
        this.getListofTodos();
        this.setState({
            items: this.state.items
        });
    }

    render() {
        return (
            <div>
                <h1>My Todo List App</h1>
                <CreateItem items={this.state.items} 
                createTask={this.createTask.bind(this)}/>
                <ListItems items={this.state.items}/>
            </div>
        )
    }
}