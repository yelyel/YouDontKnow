import React from 'react';
import ReactDOM from 'react-dom';




//   ----------------------------------------------------------------------------

//  CONDITIONAL RENDERING
//  -----------------------------------------------------------------------------


function UserGreeting(props) {
  return <h3> Welcome dear user </h3>;
}

function GuestGreeting(props) {
  return <h3> Welcome stranger! Please sign up ! </h3>;
}

function Greeting(props) {

  if (props.isLoggedIn === true) {
    return <UserGreeting />;
  }
    return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick = {props.onClick}>
      LOGIN
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick = {props.onClick}>
      LOGOUT
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
    console.log("logged in !");
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    console.log("logged out !");
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    if (isLoggedIn) {
      button = <LogoutButton onClick = {this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick = {this.handleLoginClick}/>
    }
    return (
      <div>
      <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }
  return (
    <div className = "warning">
      WARNING !!!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {

    this.setState(function(prevState) {
      return {showWarning: !prevState.showWarning};
    });

    // this.setState((prevState) => {
    //   return {showWarning: !prevState.showWarning};
    // });
  }

  checkState(actual) {
    if(actual) {
      return 'Hide';
    } else {
      return 'SHOW';
    }
  }
//  {this.state.showWarning ? 'Hide' : 'Show'} --> macht das gleiche wie checkState()
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick= {this.handleToggleClick} >
          {this.checkState(this.state.showWarning)}
        </button>
      </div>
    );
  }

}
//<LoginControl />
ReactDOM.render(

  <Page />,
  document.getElementById("root")
);

// ReactDOM.render(
//     <YelApp />,
//     document.getElementById('root')
//    );
