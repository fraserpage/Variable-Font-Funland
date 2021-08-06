import React from 'react';
import { logout } from '../../utils/authUtils'
import './UserLogOut.css'

class UserLogOut extends React.Component {

  handleLogout = () =>{
    logout()
    this.props.setUserInState(null)
  }

  render() {
    return (
        <div className='UserLogOut'>
          <div>{this.props.user.name[0]}</div>
          <div>
            <div>Name: {this.props.user.name}</div>
            <div>Email: {this.props.user.email}</div>
            <button className='small' onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
    );
  }
}

export default UserLogOut;