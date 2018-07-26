// babel src/app.js --out-file=public/scripts/app.js --presets=env,react -w
// live-server public

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Walk the dog', 'Eat some food', 'four hundred'];
    
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
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
  handlePick() {
    alert('HandlePick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}> What should I do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
    // alert('some message')
  }
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
      {
        this.props.options.map((option) => <Option key={option} optionText={option}/>)
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
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option.trim()) {
      alert('a');
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));