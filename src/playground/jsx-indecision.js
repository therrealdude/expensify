console.log('App.js is running!');

// JSX - Javascript XML
const app = {
  'title': 'Certainty App',
  'subtitle': 'be certain about life',
  'options': []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option){
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

const removeAll = (e) => {
  e.preventDefault();
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const numbers = [55, 101, 1000];

const renderApp = () => {
  const appRoot = document.getElementById('app');
  const template = (
    <div id="wrapper">
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button onClick={onMakeDecision} disabled={app.options.length == 0}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
