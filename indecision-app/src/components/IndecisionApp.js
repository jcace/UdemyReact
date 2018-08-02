import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';


export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }
  handleDeleteOptions = () => {
    this.setState( () => ({ options: [] }));
  }

  handlePick = () => {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddItem = (newItem) => {
    if (!newItem) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(newItem) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(newItem)
      }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => 
    ({options: prevState.options.filter(
      (option) => option !== optionToRemove)}
    ));
  }

  // Fires on first rendering
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if (options) {
        this.setState( () => ({options}));
      }
    } catch(e) {
      // JSON data is not valid!
      // Do nothing at all, falls back to default value
    }
  }

  // Fires on state or prop change
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length != this.state.options.length)  {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  // Fires just before a component is deleted (not used much)
  componentWillUnmount () {
    console.log('componentWillUnmount');
  }

  

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddItem={this.handleAddItem} />
      </div>
    )
  }
}


// Stateless Functional Component
// Props passed as an argument, no "this" as it's not a class (and its an arrow function anyhow)
// Much less overhead. Much easier to read/write, and test. 
// const User = (props) => {
//   return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };