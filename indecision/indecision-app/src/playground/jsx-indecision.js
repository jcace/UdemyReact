console.log('App.js is running!');

// JSX - JavaScript XML
// It's an extension on the JS language provided by React. Similar to scss or lcss for css
// JSX makes working with templates much easier than it was in the past. 

// This isn't part of Javascript! Under the hood, you have to do a call to React.createElement
// but, we use babel to compile this down.

// Only render subtitle and p tag if subtitle exists (&&)
// render new P tag - if options.length >0 , message" Here are your options". 
// If not, "no options"

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    // Stops full page refresh
    e.preventDefault();

    // Grab the form "option" text
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
    }

    // Clear input
    e.target.elements.option.value = '';

    renderApp();
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Delete All</button>
            
            <ol>
            {/* a comment */}
            {
                app.options.map((opt) =>  <li key={opt}> {opt}</li>)
            }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public