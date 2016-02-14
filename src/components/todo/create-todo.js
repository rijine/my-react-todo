import React from 'react';

export default class CreateTodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: {
            }
        }
    }
    static defaultProps = {
        order: ['low', 'medium', 'high']
    }
    handleSubmit(event) {
        if (this.refs.title.value && this.refs.title.value !== '') {
            console.log(this.refs.title.value);
            this.setState({
                newTodo: {
                    title: this.refs.title.value
                }
            }, function () {
                console.log(this.state, this.props);
                //this.props.addTodo(this.state.newTodo);
                this.addTodo();
            })
        } else {
            console.log(this.refs.title.value);
        }
        event.preventDefault();
    }
    priorityOptions() {
        return (
            this.props.order.map(order => {
                return <option key={order} value={order}>
                    {order}
                </option>
            })
        );
    }

    addTodo() {
        this.props.addTodo(this.state.newTodo);
    }

    removeTodo() {
        this.props.addTodo(this.state.newTodo);
    }

    editTodo() {
        this.props.addTodo(this.state.newTodo);
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h6>Create</h6>
                <input type="text" ref="title" />
                <select>
                    {this.priorityOptions()}
                </select>
                <button type="submit">Create</button>
            </form>
        );
    }
}

