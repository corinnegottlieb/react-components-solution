import React, { Component } from 'react';
import './App.css';
import { Dummy } from './components/Dummy'
import Spamalot from './components/Spamalot';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Menu from './components/Menu';



// SPOT CHECK 1
export class Sum extends Component {
  render() {
    let num1 = 57;
    let num2 = -12;
    return (
      <div>The sum is {num1 + num2}</div>
    );
  }
}

// SPOT CHECK 2
class MenuBar extends Component {
  render() {
    return (
      <div id="nav">
        <span>Home</span>
        <span>About</span>
      </div>
    )
  }
}

class LandingPage extends Component {
  render() {
    return <h1>Welcome!</h1>
  }
}
class About extends Component {
  render() {
    return <p>This is an example of an about page~</p>
  }
}
class Profile extends Component {
  render() {
    return <p>This is an example of a user profile~</p>
  }
}

class App extends Component {

  render() {
    let isUserLoggedIn = localStorage.getItem('loggedIn')
    let componentToDisplay = isUserLoggedIn ?
      <Profile /> :
      <About />
    return (
      <div className="app">
        <div className="exercise" id="spotcheck-2">
          <label>Spotcheck 2:</label>
          <MenuBar />
          <LandingPage />
        </div>
        <div className="exercise" id="spotcheck-3">
          <label>Spotcheck 3:</label>
        {componentToDisplay}
        </div>
        <div className="exercise" id="ex-2">
          <label>Exercise 1:</label>
          <Dummy />
        </div>
        <div className="exercise" id="ex-2">
          <label>Exercise 2:</label>
          <Spamalot />
        </div>
        <div className="exercise" id="ex-4">
          <label>Exercise 4:</label>
          <NavBar />
          <Menu />
          <Checkout />
        </div>
      </div>
    )
  }
}

export default App

// SPOT CHECK 3
// NO test

// SPOT CHECK 4

export const Banner = () => <div className="banner">THE LOGO</div>


// SPOT CHECK 5
export class AboutUs extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Blurb />
      </div>
    )
  }
}

export class SignUp extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Username" />
      </div>
    )
  }
}

export class Blurb extends Component {
  render() {
    return <div>This is a great site.</div>
  }
}
