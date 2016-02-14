import React from 'react';
import TodoListItem from './todo-item';

export default class TodoList extends React.Component {

    constructor(){
        super();
    }
    renderItems() {
        let todos;
        if(this.props.todos){
            todos = this.props.todos.map(
                todo => {
                    //console.log(todo);
                    return (
                        <TodoListItem key={todo.title} todo={todo}/>
                    )
                }
            )
        }
        return todos;
    }
    
    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}


