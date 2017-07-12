import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

var user = {
  firstName: "Hans",
  lastName: "Frey"
}

const element = (
  <div>
  <h1>
    Hello,??? {formatName(user)}
  </h1>
  </div>
);
class Element2 {
  render() {
    return "Hello,???" + formatName(user);
  }
}

function showGreeting(user) {
  if(user) {
    return (
      <div>
      <Element2 />
      <h2> Hello!!, {formatName(user)} </h2>
      </div>
    );
  }
  return (
    <div>
    <h2> Hello Stranger </h2>
    </div>
  );
}


function showAll(user) {
  return (
    element
  );
}
// wieso wird element hier nicht auch gerendert ??
ReactDOM.render(
  //showAll(),
  showGreeting(user),
  //element,
  document.getElementById('root')
);
