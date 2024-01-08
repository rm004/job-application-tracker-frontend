import React from 'react';
import SignIn from './Components/SignIn/SignIn';
import Applications from './Components/Applications/Applications';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: {
        name: '',
        email: '',
        password: ''
      },
      isSignedIn: false,
      user: {
        name: ''
      }
    }
  }

  onSignInChange = async (event) => {
    const { name, email, password } = this.state.signin;

    if (event.target.name === 'name') {
      await this.setState({signin: {
        name: event.target.value,
        email: email,
        password: password
      }})
    } else if (event.target.name === 'email') {
      await this.setState({signin: {
        name: name,
        email: event.target.value,
        password: password
      }})
    } else if (event.target.name === 'password') {
      await this.setState({signin: {
        name: name,
        email: email,
        password: event.target.value
      }})
    }
  }

  onSignInSubmit = () => {
    const { name, email, password } = this.state.signin;
    if (!name || !email || !password) {
      console.log("No empty fields!");
    } else {
      this.setState({isSignedIn: true});
    }
  }

  render() {
    return (
      <div>
        <h1>Working!</h1>
        {
          this.state.isSignedIn
          ? <Applications />
          : <SignIn onSignInChange={this.onSignInChange} onSignInSubmit={this.onSignInSubmit}/>
        }
      </div>
    );
  }
}

export default App;
