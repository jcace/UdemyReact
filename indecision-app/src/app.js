// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --w

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
        }
}

class Action extends React.Component{
    render() {
        return  (
            <div>
                <button> What should I do? </button>
            </div>
        )
    }
}

class Options extends React.Component{

    render() {
        return (
            <div>
                <p> Actions Component </p>
            </div>
        )
    }
}

class AddOption extends React.Component{

    render() {
        return (
            <div>
                <p> AddOption Component </p>
            </div>
        )
    }
}
const jsx = (
    <div> 
        <h1>Title</h1>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));