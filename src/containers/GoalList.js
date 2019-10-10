import React from 'react';

class GoalList extends React.Component {
  state = {
    user: ''
  }

  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.router.history.push('/login')
    }
    // fetch('http://localhost:3000/profile', {
    //   headers: {
    //     'Authorization': localStorage.getItem('token')
    //   }
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({
    //     user: data
    //   })
    // })
  }

  render(){
    console.log('goal list props', this.props);
    return (
      <div className="goal-list">
        <h1>Hello, {this.props.user.username}</h1>
        This is the GoalList Page
      </div>
    );
  }
}

export default GoalList;
