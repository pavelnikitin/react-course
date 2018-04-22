'use strict';

var app = {
    title: 'Indecision App',
    subtiile: 'Put your life in the hands of a computer',
    option: ['one', 'two']

};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtiile && React.createElement(
        'p',
        null,
        app.subtiile
    ),
    app.option.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options'
    ) : React.createElement(
        'p',
        null,
        'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
