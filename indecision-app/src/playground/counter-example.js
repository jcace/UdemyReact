let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const setupReset = () => {
    count = 0;
    renderCounterApp();
}


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={setupReset}>reset</button>
        </div>
    );

    // One main method in ReactDOM - Render.
    // First argument: What do you want to render
    // Second argument: Where do you want to render it?
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();