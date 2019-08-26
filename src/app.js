console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  // this is where we see what was typed in the input field
  const option = e.target.elements.option.value;

  //since we have the option, we are going to check if there is any value typed in. 

  if (option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }

};


const onRemoveAll = () => {
  console.log('you clicked remove all')
  app.options = [];
  render();
};

const onMakeDecision = () => {
  //generate a random number. so I can pull a number by it's index
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>;
        })
      }
      {<p>1</p>}
      <ol>
        {
          app.options.map((opt)=>{
            return <p key={opt}>Item: {opt}</p>
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

render();