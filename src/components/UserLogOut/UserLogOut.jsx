import React from 'react';
import { logout } from '../../utils/authUtils'
import './UserLogOut.css'

class UserLogOut extends React.Component {

  handleLogout = () =>{
    logout()
    this.props.setUserInState(null)
    console.log('logout')
  }

  render() {
    return (
        <div className='UserLogOut'>
          <div>Name: {this.props.user.name}</div>
          <div>Email: {this.props.user.email}</div>
          <button onClick={this.handleLogout} className="btn-sm">Logout</button>
        </div>
    );
  }
}

export default UserLogOut;