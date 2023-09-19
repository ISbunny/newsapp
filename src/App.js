import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedEmail: null,
      submittedName: null
    }
  }
  updateSubmitted = (submittedEmail, submittedName) => {

    this.setState({ submittedEmail });
    this.setState({ submittedName });
  }
  render() {
    return (
      <Router>
        <Navbar news="News" home="Home" newsapp="NewsApp" submittedName={this.state.submittedName} />
        <Route path="/News" component={News} />
        <Route
          path="/Home"
          render={(props) => (
            <Home {...props} onSubmit={(email, name) => this.updateSubmitted(email, name)} />
          )}
        />
      </Router>
    );
  }
}
