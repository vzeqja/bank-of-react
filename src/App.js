// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

 

  handleCredit = (amount) => {
    this.setState({
      newDebitAmount: amount,
      accountBalance: this.state.accountBalance - this.state.newAmount,
    })
  }

  render() {
    const LogInComponent = () => (
    <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (
    <Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
    <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const CreditComponent = () => (
    <Credits balance={this.state.accountBalance} Credits={this.Credits} creditInfo={this.state.creditInfo}/>);
    const DebitComponent = () => (
    <Debits balance={this.state.accountBalance} Debits={this.Debits}
        debitInfo={this.state.debitInfo}/>);
    return (
        <Router>
          <div>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/Login" render={LogInComponent} />
            <Route exact path="/Credits" render={CreditComponent}/>
            <Route exact path="/Debits" render={DebitComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;