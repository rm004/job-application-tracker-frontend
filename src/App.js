import React from 'react';
import SignIn from './Components/SignIn/SignIn';
import Applications from './Components/Applications/Applications';
import Navigation from './Components/Navigation/Navigation';
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
        id: '',
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

  getUserApps = () => {
    return [
      {
        jobName: 'Software Engineer III',
        company: 'Google',
        location: 'Seattle, WA',
        dateApplied: '01/01/2024',
        status: 'Applied',
        jobPosting: 'https://google.com'
      },
      {
        jobName: 'Frontend Software Engineer',
        company: 'Meta',
        location: 'San Fransisco, CA',
        dateApplied: '01/01/2024',
        status: 'Passed first round',
        jobPosting: 'https://facebook.com'
      },
      {
        jobName: 'Backend Software Engineer',
        company: 'Amazon',
        location: 'Denver, CO',
        dateApplied: '01/01/2024',
        status: 'Completed final interview',
        jobPosting: 'https://amazon.com'
      }
    ];
  }

  render() {
    return (
      <div>
        <Navigation />
        {
          this.state.isSignedIn
          ? <Applications getUserApps={this.getUserApps}/>
          : <SignIn onSignInChange={this.onSignInChange} onSignInSubmit={this.onSignInSubmit}/>
        }
      </div>
    );
  }
}

export default App;
