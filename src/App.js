import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/todo/todo-app';



class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoApp />
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos
  //   }
  //   this.handleAddTodo = this.handleAddTodo.bind(this);
  // }

  // onRemove(index) {
  //   this.setState({
  //       todos: this.state.todos.filter(function(e, i){
  //           return i !== index;
  //       })
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.onAddTood(this.state);
  //   this.setState({
  //     title: '',
  //     completed: true
  //   })
  // }

  // handleAddTodo(todo) {
  //   this.setState({todos: [...this.state.todos, todo]});
  // }

  
}

// class TodoInput extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: '',
//             desc: '',
//             owner: '',
//             order: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       const target = event.target;
//       const value = target.value;
//       const name = target.name;
//       this.setState({
//         [name]: value
//       })
//     }

//     render() {
//         return (
//             <div>
//                 <h4> Add New TODO </h4>
//                 <form onSubmit={this.handleSubmit} >
//                   <div>
//                     <input
//                       name="inputTitle"
//                       type="text"
//                       id="inputTitle"
//                       placeholder="Title"
//                       value={this.state.title}
//                       onChange={this.handleChange}>
//                     </input>
//                   </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default App;
