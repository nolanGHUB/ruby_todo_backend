import React, { Component } from 'react';
import { registerUser } from './services/api_helper'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    this.setState({
      currentUser
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.currentUser && <h1>Hello, {this.state.currentUser.name}</h1>}
        <form onSubmit={(e) => this.handleRegister(e, this.state)}>
          <h2>Register!</h2>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default App;
