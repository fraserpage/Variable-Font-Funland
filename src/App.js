import './App.css';
// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Util
import { getUserFromToken } from './utils/authUtils';
// Components, Pages
import Nav from './components/Nav/Nav';
import LoginModal from './components/LoginModal/LoginModal'
import SignUpModal from './components/SignUpModal/SignUpModal';
import HomePage from './pages/HomePage/HomePage';
import PlaygroundPage from './pages/PlaygroundPage/PlaygroundPage';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount(){
    const user = getUserFromToken()
    if (user) this.setState({user})   
  }

  setUserInState = (incomingUserData) => {
    this.setState({
      user: incomingUserData
    })
  }

  handleShowModal = (modal) =>{
    this.setState({modal:modal})
  }

  render() {
    return (
      <>
        <Nav 
          user={this.state.user} 
          setUserInState={this.setUserInState}
          handleShowModal={this.handleShowModal}
        />
        <main className="App">
          <Switch>
            <Route path='/playground/:id' render={(props) => (
              <PlaygroundPage 
                locationState={props.location.state} 
                {...props} 
                id={props.match.params.id} 
                user={this.state.user}
              />
            )}/>
            <Route path='/playground' render={(props) => (
              <PlaygroundPage
                {...props} 
                user={this.state.user} 
              />
            )}/>
            <Route path='/' render={(props) => (
              <HomePage/>
            )}/>
            <Redirect to='/' />
          </Switch>

          {this.state.modal === 'login' &&
            <LoginModal 
              setUserInState={this.setUserInState}
              handleShowModal={this.handleShowModal}
            />
          }
          {this.state.modal === 'signup' &&    
            <SignUpModal 
              setUserInState={this.setUserInState}
              handleShowModal={this.handleShowModal}
            />
          }

        </main>
      </>
    );
  }
}

export default App;