import React from 'react'

class SignUp extends React.Component {

  state = {
    username: '',
    password: ''
  }
  // UPDATE THE STATE DUE TO THE FORM INPUT//
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // END UPDATE

  // SIGN UP THE USER //
  handleSignUp = e => {
    e.preventDefault()
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  // END SIGN UP //

  render(){
    return(
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSignUp}>
          <input type='text' name='username' onChange={this.handleChange}/>
          <input type='password' name='password' onChange={this.handleChange}/>
          <input type='submit' value='Sign Up' />
        </form>
      </div>
    )
  }
}

export default SignUp
