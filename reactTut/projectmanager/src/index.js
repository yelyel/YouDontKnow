import React from 'react';
import ReactDOM from 'react-dom';
import 'D:/projects/YouDontKnow/reactTut/projectmanager/src/fancy.css';
import 'D:/projects/YouDontKnow/reactTut/projectmanager/src/split.css';

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

function Contacts(props) {
  return (
    <div className = 'Contacts' >
     {props.pic}
    </div>
  );
}

function Chat() {
  return <div className = 'Chat' />;
}

function ShowPic() {
  return <img src = 'https://koenig-media.raywenderlich.com/uploads/2017/08/ReactNative_update-feature-3.png'
      alt = 'halli-hallo' />
}


function SplitPane(props) {
  return(
    <div className  = 'SplitPane' >
      <div className = 'SplitPane-left' >
        {props.left}
      </div>
      <div className = 'SplitPane-right' >
        {props.right}
      </div>
    </div>
  );
}

function Panes() {
  return (
    <SplitPane
      left = {<Contacts
        pic = {<ShowPic />}
      />}
      right ={<Chat />}
    />

  );
}

ReactDOM.render(
  <Panes  />,
  document.getElementById('root')
);
