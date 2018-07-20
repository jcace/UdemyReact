const appRoot = document.getElementById('app');

let showMessage = false;

const onToggleVisibility = () => {
  showMessage = !showMessage;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
    <h1>Visibility Guy</h1>

    <button onClick={onToggleVisibility}>{showMessage ? "Hide Message" : "Show Message"}</button>

    <p hidden={!showMessage && 'hidden'} >Here is the hidden text</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();