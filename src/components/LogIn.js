import React from 'react'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    console.log(this.state)
    return(
      <form onSubmit={this.login}>
        <input type='text' name='username' onChange={this.handleChange}/>
        <input type='password' name='password' onChange={this.handleChange}/>
      </form>
    )
  }
}

export default Login
