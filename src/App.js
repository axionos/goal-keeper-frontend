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
    login: false
  }

  signOut = () => {
    localStorage.clear()
    this.setState({
      login: false
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar signOut/>
        <Switch>
          <Route exact path="/login" render={ props => <LogIn router={props} />} />
          <Route exact path="/signup" render={ props => <SignUp router={props} />} />
          <Route exact path="/todo" render={ props => <ToDoList router={props} />} />
          <Route exact path="/profile" render={ props => <Profile router={props} />}/>
          <Route exact path="/" render={ props => <GoalList router={props} />}/>

           />
        </Switch>
      </div>
    );
  }
}
export default App;
