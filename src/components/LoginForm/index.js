// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(data)
    if (username === '' || password === '') {
      this.setState({errorMessage: data.error_msg})
    }

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: data.error_msg})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-container">
        <img
          className="login-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.onSubmitLoginForm}>
          <div className="form-container">
            <img
              className="login-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt=" website logo"
            />
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              className="user-input"
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="user-input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            <p className="error-message">{errorMessage}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
