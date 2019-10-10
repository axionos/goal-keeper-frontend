import React from 'react';
import Navbar from './components/navbar'
import GoalList from './containers/GoalList'
import ToDoList from './containers/ToDoList'
import Profile from './containers/Profile'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { Switch, Route, NavLink } from 'react-router-dom'


class App extends React.Component {
  state = {
    login: false,
    user: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/profile', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      }, /*() => console.log('profile data', data)*/)
    })
  }

  signOut = () => {
    localStorage.clear()
    this.setState({
      login: false
    })
  }

  render(){
    console.log("app state", this.state.user)
    return (
      <div className="App">
        <Navbar signOut/>
        <Switch>
          <Route exact path="/login" render={ props => <LogIn router={props} />} />
          <Route exact path="/signup" render={ props => <SignUp router={props} />} />
          <Route exact path="/todo" render={ props => <ToDoList router={props} />} />
          <Route exact path="/profile" render={ props =>
            <Profile
              router={props}
              user={this.state.user}
             />}/>
          <Route exact path="/" render={ props =>
            <GoalList
              router={props}
              user={this.state.user}
            />}/>
        </Switch>
      </div>
    );
  }
}
export default App;
