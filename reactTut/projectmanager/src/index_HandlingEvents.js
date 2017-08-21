import React from 'react';
import ReactDOM from 'react-dom';



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
