import React, { Component } from 'react';
import logo from './logo.svg';
import msf_icon from './msf_icon.png';
import './App.css';
import { getTeams } from './nhldata';
import ReactTable from "react-table";

let standings = getTeams();

console.log(standings);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: standings,
      pages: null,
      loading: true
    };
  //   this.grabTeams = this.grabTeams.bind(this);
  }

  render() {
    console.log(this.state.data);
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hockey React Project</h1>
        </header>
        <p className="App-intro">
          My Project using React, React-Table, Axios, MySportsFeeds API 
        </p>
        <p>Standings: {this.state.data}</p>
        <small>Data courtesy of:</small>
        <a href='https://www.mysportsfeeds.com/'>
          <img src={msf_icon} alt="msflogo" height="50px" width="50px" /> 
        </a>
      </div>
    );
  }
}

export default App;
