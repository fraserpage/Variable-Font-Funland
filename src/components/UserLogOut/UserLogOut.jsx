import React from 'react';
import { logout } from '../../utils/authUtils'
import './UserLogOut.css'

class UserLogOut extends React.Component {
  render() {
    return (
        <div className='UserLogOut'>
          <div>Name: {this.props.user.name}</div>
          <div>Email: {this.props.user.email}</div>
          <button onClick={logout} className="btn-sm">Logout</button>
        </div>
    );
  }
}

export default UserLogOut;