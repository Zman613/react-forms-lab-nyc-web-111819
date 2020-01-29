import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    let formData = {username: this.state.username, password: this.state.password}
    this.state.username.length < 1 || this.state.password.length < 1 
    ? console.log('Please enter something..') : 
    this.props.handleLogin(formData)
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.inputHandler} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.inputHandler} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
