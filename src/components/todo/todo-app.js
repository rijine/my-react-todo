import React from 'react';
import TodoList from './todo-list';
import CreateTodoItem from './create-todo';
import SearchTodoItem from './search-todo';

var todos = [
    {
        title: 'One',
        owner: 'rij',
        desc: 'des',
        order: 'low'
    },
    {
        title: 'Two',
        owner: 'rij',
        desc: 'des',
        order: 'medium'
    },
    {
        title: 'Three',
        owner: 'rij',
        desc: 'des',
        order: 'high'
    }
];

export default class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            todos
        }
    }

    conponentWillMount() {

    }

    handleAddTodo(newTodo) {
        console.log('incoming ', newTodo);
        //this.state.todos.push(newTodo);
        console.log(this.state.todos);
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    handleRemoveTodo(todo, index) {
        console.log(todo, index);
    }

    handleEditTodo(todo, index) {
        console.log(todo, index);
    }

    handleFilterTodo(filterText){
        console.log(filterText);
        this.setState({
            filter: filterText
        })
    }

    render() {
        let todoItems = this.state.todos;
        if(this.state.filter) {
            todoItems = todoItems.filter( item => 
                item.title.includes(this.state.filter)
            )
        }

        console.log(this.props);
        return (
            <div>
                My TOOD App
                <hr/>
                <SearchTodoItem filterTodo={this.handleFilterTodo.bind(this)} />
                <hr/>
                <CreateTodoItem addTodo={this.handleAddTodo.bind(this)} />
                <hr/>
                <TodoList
                    todos={todoItems}
                    removeTodo={this.handleRemoveTodo.bind(this)}
                    editTodo={this.handleEditTodo.bind(this)}
                />
            </div>
        );
    }


}