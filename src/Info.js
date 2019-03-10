import React, { Component } from 'react';
import './Info.css';
import Clock from 'react-live-clock';

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

  setTimeOfDay() {
    const today = new Date();
    let h = today.getHours();
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
    const message = " ∧＿∧\n( ･ω･｡)つ━☆・*。\n⊂　 ノ 　　　・゜+.\nしーＪ　　　°。+ *´¨)\n　　　　　　　　　.· ´¸.·*´¨) ¸.·*¨)\n　　　　　　　　　　(¸.·´ (¸.·'* ☆ \n\ncongrats! you found the hidden magic cat. you have been blessed with good luck for the rest of the day. go chance your dreams and shoot your shots!\n\n*disclaimer* finding the magic cat does not guarantee good luck for the rest of the day."
    this.setState({
      memeMessage: message
    });
    alert(message);
  }

  async loadAPI() {
    const factOfDay = await fetch("https://cors-anywhere.herokuapp.com/http://randomuselessfact.appspot.com/today.json?language=en");
    const jsonFOD = await factOfDay.json();
    const quoteOfDay = await fetch("https://quotes.rest/qod.json");
    const jsonQOD = await quoteOfDay.json();
    this.setState({
      fact: jsonFOD.text,
      quote: jsonQOD.contents.quotes[0].quote,
      author: jsonQOD.contents.quotes[0].author,
    });
  }

  async componentDidMount() {
    this.loadAPI();
    this.setTimeOfDay();
  }

  render() {
    return (
      <body className="App">
          <p>
            <div className="title">
              good {this.state.timeOfDay}! here's your daily tea:
            </div>
            <br /><br />
            Did You Know?
            <br/>
            {this.state.fact}
            <br /><br /><br />
            <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} className="clock"/>
            <br /><br /><br />
            <div className="quote">
              "{this.state.quote}"
              <br />
              - {this.state.author}
            </div>
          </p>
          <button type="button" className="button" onClick={this.showMeme}>¿?</button>
          {this.state.message}
      </body>
    );
  }
}

export default Info;
