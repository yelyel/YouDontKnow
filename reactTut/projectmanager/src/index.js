import React from 'react';
import ReactDOM from 'react-dom';
import 'D:/projects/YouDontKnow/reactTut/projectmanager/src/fancy.css';



//   ----------------------------------------------------------------------------

//  COMPOSITION VS INHERITANCE
//  -----------------------------------------------------------------------------

function FancyBorder(props) {
  return (
    <div className = {'FancyBorder FancyBorder-' + props.color }>
      {props.children}
    </div>
  );
}



function WelcomeDialog() {
  const place = " in space !!";
  return (
    <FancyBorder color = 'red'>
      <h1 className = 'Dialog-title'>
        Welcome to earth !
      </h1>
      <p>
        we know you are lost {place}
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
