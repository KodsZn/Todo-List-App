import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskList from './Components/Task/TaskList';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <TaskList/>
    </div>
  );
}

export default App;
