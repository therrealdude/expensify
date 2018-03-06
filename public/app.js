'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var app = {
  'title': 'Certainty App',
  'subtitle': 'be certain about life',
  'options': []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

var removeAll = function removeAll(e) {
  e.preventDefault();
  app.options = [];
  renderApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.random();
  console.log('This is random number ' + randomNum);
};

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
  var appRoot = document.getElementById('app');
  var template = React.createElement(
    'div',
    { id: 'wrapper' },
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'button',
      { onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
