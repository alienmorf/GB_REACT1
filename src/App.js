import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
          My First React App
          <h3>Hello {props.name}!</h3> 
          <h4>{props.name}, {props.message}</h4> 
      </header>\

    </div> );
}

export default App;
