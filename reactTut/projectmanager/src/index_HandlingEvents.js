import React from 'react';
import ReactDOM from 'react-dom';


// https://facebook.github.io/react/docs/state-and-lifecycle.html




//import registerServiceWorker from './registerServiceWorker';

// function Hello(props) {
//   return <h1>Hello my dear {props.name} </h1>;
// }
//
// function tick() {
//   const welcome = < Hello name = "Yel" />;
//   const element = (
//     <div>
//       {welcome},
//       <h2>it is now exactly {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 3000);
// //registerServiceWorker();


// function Welcome(props) {
//   return <h1> Willkommen, {props.name} </h1>;
// }
//
// function App() {
//
//   return (
//     <div>
//       it is now exacrly {new Date().toLocaleTimeString()}
//       <Welcome name = "Yel" />
//       <Welcome name = "Yappie" />
//       <Welcome name = "FNAC" />
//     </div>
//   );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
//
//
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount(){
//     this.timerID = setInterval(
//       () => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//
//
//
//   render() {
//     return(
//       <div>
//       <h1>Welcome to that bright morning</h1>
//       <h2> it si now {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ------------------------------------------------------------------------------

//https://facebook.github.io/react/docs/handling-events.html

class YelApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
    this.handleClick = this.handleClick.bind(this);
  }
  texts = ['Ich wurde gedrückt', 'NOPE !', 'Yeaph !!!'];
  activateLasers() {
    console.log(this.texts[0]);
  }

  updateText(newtext){
    this.setState({text: newtext});
    return this.state.text;
  }

  handleClick() {
    this.activateLasers();
    this.toggleText();
  }

  toggleText() {
    if (this.state.text === this.texts[1]) {
      this.setState({text: this.texts[2]});
    } else {
      this.setState({text: this.texts[1]});
    }
    console.log(this.state.text);
    return this.state.text;
  }
  
  componentDidMount(){
      this.setState({text: this.texts[1]});
  }
//<button onClick={() => {this.activateLasers(); this.toggleText()}}>

  render() {
  return (
    <div>
      <button onClick={this.handleClick}>
        Activate Lasers
      </button>
      <br />
      <h3>{this.state.text} </h3>

      </div>
    );
  }
}

ReactDOM.render(
    <YelApp />,
    document.getElementById('root')
   );
