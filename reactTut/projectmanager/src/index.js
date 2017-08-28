import React from 'react';
import ReactDOM from 'react-dom';




//   ----------------------------------------------------------------------------

//  Forms
//  -----------------------------------------------------------------------------
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'name ?'};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     this.setState({defaultText: this.state.value})
//     alert('ein neuer Name wurde eingegeben: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <div>
//       <form onSubmit = {this.handleSubmit}>
//         <label>
//           Name:
//           <br />
//           <input type = 'text' value = {this.state.value} onChange = {this.handleChange} />
//         </label>
//         <input type = 'submit' value = 'SUBMIT' />
//       </form>
//       </div>
//     );
//   }
// }

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Neues Gemüse eingegeben: ' + this.state.value);
  }

  render() {
    return (
      //<form onSubmit = {this.handleSubmit}>
      //   <label>
      //     Welches Schweindl hättens gern ?:
      //     <br />
      //     <select value = {this.state.value} onChange = {this.handleChange} />
      //       <option value = 'oranges'>Orangen</option>
      //       <option value = 'manda'>Manda</option>
      //       <option value = 'apples'>Apfles</option>
      //       <option value = 'käse'>Käse</option>
      //     </select>
      //   </label>
      //   <input type = 'submit' value = 'SUBMIT' />
      // </form>
      <form onSubmit={this.handleSubmit}>
      {/*<form onSubmit={this.handleSubmit}>*/}
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
  }
}

ReactDOM.render(
  <SelectForm  />,
  document.getElementById('root')
);
