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
        ToDoList
      </div>
    );
  }
}

export default ToDoList;
