import React from 'react';
import { NavLink } from 'react-router-dom'


class Navbar extends React.Component {
  state = {

  }



  render(){

    return (
      <div className="navbar">
        <NavLink to='/goal' exact> My Goal </NavLink>
        <NavLink to='/todo' exact> To-Do </NavLink>
        <NavLink to='/profile' exact> Profile </NavLink>
      </div>
    );
  }
}

export default Navbar;
