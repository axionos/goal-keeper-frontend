import React from 'react';
import Navbar from './components/navbar'
import GoalList from './containers/GoalList'
import ToDoList from './containers/GoalList'
import Profile from './containers/Profile'




import { Switch, Route, NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/goal" component={GoalList} />
        <Route exact path="/todo" component={ToDoList} />
        <Route exact path="/profile" component={Profile}/>


      </Switch>
    </div>
  );
}

export default App;
