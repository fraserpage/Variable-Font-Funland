import { Component } from 'react';
import { registerNewUser } from '../../utils/authUtils';

export default class SignUpPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try{
      let token = registerNewUser({
        name: this.state.name, 
        email: this.state.email, 
        password: this.state.password
      })

      if (token && !token._id) {
        throw token;
      } 
      else {
        const userDoc = JSON.parse(atob(token.split('.')[1])).user; 
        // Decode the token + put user document into state
        this.props.setUserInState(userDoc)
      }
    } catch (err) {
      console.log("SignUpForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
        <a href="/login">Log in</a>
      </div>
    );
  }
}
