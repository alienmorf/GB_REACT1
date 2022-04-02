import './App.css';

function Message(props) {
  return (
    <div className="App">
      <header className="App-header">
          My First React Component
          <h4>{props.message}</h4> 
      </header>\

    </div> );
}

export default Message;
