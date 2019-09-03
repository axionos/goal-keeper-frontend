import React from 'react';

class GoalList extends React.Component {
  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.router.history.push('/login')
    }
    fetch('http://localhost:3000/profile', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
  }

  render(){
    console.log('goal list props', this.props);
    return (
      <div className="goal-list">
        GoalList
      </div>
    );
  }
}

export default GoalList;
