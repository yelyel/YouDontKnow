import React from 'react';
import ReactDOM from 'react-dom';




//   ----------------------------------------------------------------------------

//  Lists and Keys
//  -----------------------------------------------------------------------------


// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
// <li> {number} </li>
// );

function ListItem(props) {
  return <li> {props.value} </li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
  <ListItem key = {number.toString()}
            value = {number} />
  );
  return (
    <ul> {listItems} </ul>
  );
}

const numbers = [5, 17, 23, 2, 7];

// ============================================================================

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
      <li key = {post.id}>
          {post.title}
      </li>
    )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key = {post.id}>
      {post.title}
      <p> {post.content} </p>
    </div>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );
