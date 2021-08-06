import { Component } from 'react';
import {attemptLogin} from '../../utils/authUtils'

export default class LoginModal extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
      let userDoc = await attemptLogin({ 
        email: this.state.email, 
        password: this.state.password
      })
      this.props.setUserInState(userDoc)
      this.props.handleShowModal(null)
  }

  render() {
    return (
      <div className='modal'>
      <div className='modal-close' onClick={()=>this.props.handleShowModal(null)}>x</div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off" >
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
        <a href="/sign-up">Sign up</a>
      </div>
    );
  }
}