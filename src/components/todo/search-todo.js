import React from 'react';

export default class SearchTodoItem extends React.Component {

    // constructor(){
    //     super();
    // }

    filterTodo () {
        //this.props.filterTodo(this.filterText.value);
        console.log(this.refs.filterText.value);
        //console.log();
        this.props.filterTodo(this.refs.filterText.value);
    }

    render() {
        return (
            <div>
                <h6>Search</h6>
                <input type="text" ref="filterText" onChange={this.filterTodo.bind(this)} />
            </div>
        );
    }
}

// SearchTodoItem.propTypes = {
//     filterTodo: React.PropTypes.func
// }