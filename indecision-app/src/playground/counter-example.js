class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // Step 1: Setup the default state object.
    this.state = {
      count: 0
    };
  }

  //parseInt(num, 10)

  componentDidMount() {
    const count = parseInt(localStorage.getItem('num'));

    if(!isNaN(count)) {
      this.setState( () => ({count}));
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('num', this.state.count);
    }
  }

  handleAddOne() {
    // don't manually update the state like this! It won't rerender
    // this.state.count = this.state.count +1;

    // Setstate takes a function as an argument...
    //    That function can take "prevstate", which is the current state!
    this.setState((prevState) => {
      // Return what you want to change.
      return {
        // Only provide the pieces of state that you want to change.
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => ({count: 0}));
    
    // Calls to setState are asynchronous!
    // This is the old syntax.
    // this.setState({
    //   count:0
    // });
    // this.setState({
    //   count: this.state.count +1
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'))
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const setupReset = () => {
//     count = 0;
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={setupReset}>reset</button>
//         </div>
//     );

//     // One main method in ReactDOM - Render.
//     // First argument: What do you want to render
//     // Second argument: Where do you want to render it?
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();