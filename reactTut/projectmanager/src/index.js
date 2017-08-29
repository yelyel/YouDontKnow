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
//
// ReactDOM.render(
//   <NameForm  />,
//   document.getElementById('root')
// );

//=================================================================================
//  Select Form


// class SelectForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'oranges'};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//     console.log(event.target.value);
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     alert('Neues Gemüse eingegeben: ' + this.state.value);
//   }
//
//   render() {
//     return (
//       <form onSubmit = {this.handleSubmit}>
//         <label>
//           Welches Schweindl hàttens gern ?:
//           <br />
//             <select value = {this.state.value} onChange = {this.handleChange}>
//             <option value = 'oranges'>Orangen</option>
//             <option value = 'manda'>Manda</option>
//             <option value = 'apples'>Apfles</option>
//             <option value = 'käse'>Käse</option>
//           </select>
//         </label>
//         <input type = 'submit' value = 'SUBMIT' />
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(
//   <SelectForm  />,
//   document.getElementById('root')
// );


// =============================================================================
// Multiple input Forms


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      //let isGoing = this.state.isGoing;
      let message = this.state.isGoing ? this.state.numberOfGuests +  " are coming !" : "nobody";
      alert(message);
    }
  handleInputChange(event)
  {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return(
      <form onSubmit = {this.handleSubmit}>
      <label>
      Is going:
        <input
          type = 'checkbox'
          name = 'isGoing'
          checked = {this.state.isGoing}
          onChange = {this.handleInputChange}
        />
      </label>
      <br />
      <label>
      Anzahl Gäste:
        <input
          type = 'number'
          name = 'numberOfGuests'
          value = {this.state.numberOfGuests}
          onChange = {this.handleInputChange}
        />
      </label>
        <input type = 'submit' value ='Send !!' />
      </form>

    );

  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
