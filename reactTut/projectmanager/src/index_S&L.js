import React from 'react';
import ReactDOM from 'react-dom';


// https://facebook.github.io/react/docs/state-and-lifecycle.html




class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(), 1000);
  }
  componentWillUnmount() {

  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return(
      <div>
      <h1>Welcome to this bright morning</h1>
      <h2> it si now {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}



ReactDOM.render(
    <Clock />,
    document.getElementById('root')
   );
