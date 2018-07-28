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

  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
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

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(newItem)
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddItem={this.handleAddItem} />
      </div>
    )
  }
}

// Props - information passed into a component like an argument
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}> What should I do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
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
    
this.setState(() => {
  return {error};
});

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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));