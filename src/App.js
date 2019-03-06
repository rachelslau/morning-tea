import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeOfDay: ["morning", "afternoon", "evening"],
      hour: 0,
      minute: 0,
      fact: "",
      quote: ""
    };
  }

  async loadAPI() {
    const factOfDay = await fetch("http://randomuselessfact.appspot.com/today.json?language=en");
    const jsonFOD = factOfDay.json();
    const quoteOfDay = await fetch("http://quotes.rest/qod.json")
    const jsonQOD = quoteOfDay.json();
    this.setState({
      fact: jsonFOD.text,
      quote: jsonQOD.text,
    })
  }

  async componentDidMount() {
    this.loadAPI();
  }

  render() {
    return (

      // <head>
      //   <link href="https://fonts.googleapis.com/css?family=Reenie Beanie:regular" rel="stylesheet" type="text/css" />
      // </head>
      <body className="App">
          <p>
            good morning! here's your daily tea:
            <br />
            {this.state.fact}
            <br /><br /><br /><br />
            {this.state.quote}
          </p>
      </body>
    );
  }
}

export default App;
