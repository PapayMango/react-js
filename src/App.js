import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Card,Button,ButtonToolbar } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const FunctionalComponent = () => {
  const [count, setCount] = React.useState(0);
 
  return (
    <div className='bg-dark text-center'>
      <Card className='bg-danger' color='secondary' outline>Count: {count}</Card>
      <ButtonToolbar className='bg-info'>
        <Button className='me-2 px-2 py-1' outline color='primary' onClick={() => setCount(count + 1)}>Click</Button>
        <Button className='px-2 py-1' outline color='primary' onClick={() => setCount(0)}>Reset</Button>
      </ButtonToolbar>
    </div>
  );
 };

 export {FunctionalComponent};
 export default App;
