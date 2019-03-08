import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor() {
    super();

    this.state = {
      timeOfDay: "",
      hour: 0,
      minute: 0,
      fact: "",
      quote: "",
      author: ""
    };
  }

  setTime() {
    const today = new Date();
    const hour = this.addZero(today.getHours());
    const minute = this.addZero(today.getMinutes());
    document.getElementById("time").innerHTML= hour + ":" + minute;
  }

  addZero(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  setTimeOfDay() {
    const day = new Date();
    const hour = day.getHours();
    let tOD;
    if (hour > 6 && hour < 12) {
      tOD = "morning";
    }
    else if (hour > 12 && hour < 20) {
      tOD = "afternoon";
    }
    else {
      tOD = "evening";
    }
    this.setState({
      timeOfDay: tOD
    })
  }

  async loadAPI() {
    const factOfDay = await fetch("https://cors-anywhere.herokuapp.com/http://randomuselessfact.appspot.com/today.json?language=en");
    const jsonFOD = await factOfDay.json();
    const quoteOfDay = await fetch("http://quotes.rest/qod.json");
    const jsonQOD = await quoteOfDay.json();
    this.setState({
      fact: jsonFOD.text,
      quote: jsonQOD.contents.quotes[0].quote,
      author: jsonQOD.contents.quotes[0].author,
    })
  }

  async componentDidMount() {
    this.loadAPI();
    this.setTime();
    this.setTimeOfDay();
  }

  render() {
    return (
      <body className="App">
          <p>
            good {this.state.timeOfDay}! here's your daily tea:
            <br /><br />
            {this.state.fact}
            <br /><br /><br />
            <div id="time" className="clock"></div>
            <br /><br />
            "{this.state.quote}"
            <br />
            - {this.state.author}
          </p>
      </body>
    );
  }
}

export default Info;
