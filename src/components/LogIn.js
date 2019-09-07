import React from 'react'

class LogIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    if(!!localStorage.getItem("token")) {
      this.props.router.history.push("/")
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      if (localStorage.getItem("token") === "undefined") {
        localStorage.clear()
      }else if (!!localStorage.getItem("token")) {
        window.location.replace(`http://localhost:3001/`)
      }
    })
  }

  render(){
    console.log('login state', this.state)
    console.log('login props', this.props);

    return(
      <div>
      <h1>Log In</h1>
      <form onSubmit={this.handleLogin}>
        <input type='text' name='username' onChange={this.handleChange}/>
        <input type='password' name='password' onChange={this.handleChange}/>
        <input type='submit' value='LogIn' />
      </form>
      </div>
    )
  }
}

export default LogIn
