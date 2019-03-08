import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  constructor() {
    super();

    this.state = {
      timeOfDay: "",
      fact: "",
      quote: "",
      author: "",
      memeMessage: ""
    };
  }

  setTime() {
    const today = new Date();
    const hour = this.addZero(today.getHours());
    const minute = this.addZero(today.getMinutes());
    document.getElementById("time").innerHTML= hour + " : " + minute;
    this.setTimeOfDay(hour);
    // setInterval(setTime, 1000);
  }

  addZero(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  setTimeOfDay(h) {
    let tOD;
    if (h > 6 && h < 12) {
      tOD = "morning";
    }
    else if (h > 12 && h < 20) {
      tOD = "afternoon";
    }
    else {
      tOD = "evening";
    }
    this.setState({
      timeOfDay: tOD
    })
  }

  showMeme = () => {
    const message = "\n/\\n/ \\n.∧＿∧\n( ･ω･｡)つ━☆・*。\n⊂　 ノ 　　　・゜+.\nしーＪ　　　°。+ *´¨)\n　　　　　　　　　.· ´¸.·*´¨) ¸.·*¨)\n　　　　　　　　　　(¸.·´ (¸.·'* ☆ "
    console.log('woot');
    this.setState({
      memeMessage: message
    });
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
    });
  }

  async componentDidMount() {
    this.loadAPI();
    this.setTime();
  }

  render() {
    return (
      <body className="App">
          <p>
            good {this.state.timeOfDay}! here's your daily tea:
            <br /><br />
            Did you know: {this.state.fact}
            <br /><br />
            <div id="time" className="clock"></div>
            <br /><br />
            <div className="quote">
              "{this.state.quote}"
              <br />
              - {this.state.author}
            </div>
          </p>
          <button type="button" value="woot" className="button" onClick="alert(this.value)">¿?</button>
          {this.state.message}
      </body>
    );
  }
}

export default Info;
