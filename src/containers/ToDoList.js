import React from 'react';

class ToDoList extends React.Component {
  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.router.history.push('/login')
    }
  }

  render(){

    return (
      <div className="todo-list">
        <h1>TO DO LIST</h1>
        <form method="post">
          <input type="text" placeholder="New Task" name="task" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ToDoList;
