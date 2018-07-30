// babel src/app.js --out-file=public/scripts/app.js --presets=env,react -w
// live-server public

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

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

  handleDeleteOptions() {
    this.setState( () => ({ options: [] }));
  }

  handlePick() {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddItem(newItem) {
    if (!newItem) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(newItem) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(newItem)
      }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => 
    ({options: prevState.options.filter(
      (option) => option !== optionToRemove)}
    ));
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
IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

// Stateless Functional Component - replaces  class-based component that only has a render method!
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}> What should I do? </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length ===0 && <p> Please add an option to get started </p>}
      {
        props.options.map((option) => <Option key={option} 
        optionText={option} 
        handleDeleteOption={props.handleDeleteOption}
        />)
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={() => {
        props.handleDeleteOption(props.optionText)
      }}>
      Remove</button>
    </div>
  )
}

//1. form
//2. onSubmit
//3. handleAddOption -> fetch value typed. If value, then alert
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddItem(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value ='';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error} </p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));