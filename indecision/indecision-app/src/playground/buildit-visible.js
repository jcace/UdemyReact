// const appRoot = document.getElementById('app');

// let showMessage = false;

// const onToggleVisibility = () => {
//   showMessage = !showMessage;
//   renderApp();
// }

// const renderApp = () => {
//   const template = (
//     <div>
//     <h1>Visibility Guy</h1>

//     <button onClick={onToggleVisibility}>{showMessage ? "Hide Message" : "Show Message"}</button>

//     <p hidden={!showMessage && 'hidden'} >Here is the hidden text</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// renderApp();

// Create component: VisibilityToggle - render, constructor, handleToggleVisibility
// state - Visibility -> False

class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      showMessage: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        showMessage: !prevState.showMessage
      }
    })
  }

  render() {

    return (
      <div>
        <h1>Visibility Guy</h1>

        <button onClick={this.handleToggleVisibility}>{this.state.showMessage ? "Hide Message" : "Show Message"}</button>

        <p hidden={!this.state.showMessage && 'hidden'} >Here is the hidden text</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
