import React from 'react';
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {


  signOut = () => {
    localStorage.clear()
    window.location.replace('http://localhost:3001/')
  }


  render(){

    return (
      <div className="navbar">
        <NavLink to='/' exact> My Goal </NavLink>
        <NavLink to='/todo' exact> To-Do </NavLink>
        <NavLink to='/profile' exact> Profile </NavLink>
        <NavLink to='/login' exact> LogIn </NavLink>
        <NavLink to='/signup' exact> SignUp </NavLink>
        <button onClick={this.signOut}> SignOut </button>
      </div>
    );
  }
}

export default Navbar;
