let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  jsx();
}

const jsx = () => {
  const visibilityToggle = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility? 'Hide details': 'Show details'}</button>
      {visibility && (
        <div>
        <p>Show this!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(visibilityToggle, document.getElementById('app'));
}

  jsx();