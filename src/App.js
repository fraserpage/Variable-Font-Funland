import './App.css';
// React
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Util
import { getUserFromToken } from './utils/authUtils';
// Components, Pages
import Nav from './components/Nav/Nav';
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import PlaygroundPage from './pages/PlaygroundPage/PlaygroundPage';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount(){
    const user = getUserFromToken()
    if (user) this.setState(user)   
  }

  setUserInState = (incomingUserData) => {
    this.setState({
      user: incomingUserData
    })
  }

  render() {
    return (
      <>
        <Nav user={this.state.user} />
        <main className="App">
          <Switch>
            
            <Route path='/login' render={(props) =>(
              this.state.user ? 
                <Redirect to='/' /> 
                :
                <div> 
                <LoginPage setUserInState={this.setUserInState}/>
                </div>
            )}/>
          
            <Route path='/sign-up' render={(props) =>(
              this.state.user ? 
                <Redirect to='/' /> 
                :
                <SignUpPage setUserInState={this.setUserInState}/>
            )}/>

            <Route path='/playground/:id' render={(props) => (
              <PlaygroundPage locationState={props.location.state} id={props.match.params.id}/>
            )}/>

            <Route path='/playground' render={(props) => (
              <PlaygroundPage />
            )}/>

            <Route path='/' render={(props) => (
              <HomePage/>
            )}/>
            <Redirect to='/' />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;