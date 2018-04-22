var app = {
    title: 'Indecision App',
    subtiile: 'Put your life in the hands of a computer',
    option: ['one', 'two']

};
 
var template= (
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

 var appRoot = document.getElementById('app');
 
 ReactDOM.render(template, appRoot);