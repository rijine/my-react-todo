import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(){
        super();
        this.state = {
             isEditing: false
        };
    }
    renderActionSection() {
        if(this.state.isEditing){
            return (
                <div>
                    <button onClick={this.onEditClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </div>
            );
        }
        return (
            <div>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </div>
        );
    }

    render() {
        return (
            <li>
                {this.props.todo.title}
                {this.renderActionSection()}
            </li>
        );
    }

    onEditClick() {
        this.setState({isEditing: true});
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onDeleteClick(){
        
    }
}


