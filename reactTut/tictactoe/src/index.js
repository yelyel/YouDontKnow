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
class Element2 extends React.Component {
  render() {
    return (
      <h1>Helloooooooo ?????? {formatName(user)} </h1>);
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

function tick() {
  const element = (
    <div>
      <h1>Hello,??? {formatName(user)} </h1>
      <h2> it si now {new Date().toLocaleTimeString()}. </h2>
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
  <div>
    {showGreeting(user)}
    {element}
    {element}
  </div>,
  document.getElementById('root')
);


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
//
// setInterval(tick, 1000);
