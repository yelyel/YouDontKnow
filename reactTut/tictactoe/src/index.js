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
  <h1>
    Hello,??? {formatName(user)}
  </h1>
);

function showGreeting(user) {
  if(user) {
    return <h2> Hello!!, {formatName(user)} </h2>;
  }
  return <h2> Hello Stranger </h2>;
}

function showAll(user) {
  return (
    element,
    showGreeting(user)
  );
}

ReactDOM.render(
  showAll(user),
  //showGreeting(),
  //element,
  document.getElementById('root')
);
