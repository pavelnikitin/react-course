const app = {
    title: 'Indecision App',
    subtiile: 'Put your life in the hands of a computer',
    option: ['one', 'two']

};
 
const template= (
    <div>
        <h1>{app.title}</h1>
        {app.subtiile && <p>{app.subtiile}</p>}
        {app.option.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    console.log('add One');
};
const minusOne = () => {
    console.log('minus One');
};
const reset = () => {
    console.log('reset');
};

const templateTwo = (
    <div>
        <h1>Count: {count} </h1>
        <button onClick={addOne} >+1</button>
        <button onClick={minusOne} >-1</button>
        <button onClick={reset} >reset</button>      
    </div>
);

 const appRoot = document.getElementById('app');
 
 ReactDOM.render(templateTwo, appRoot);