
import './App.css';
import Login from './Registration-Form/login';
import Signup from './Registration-Form/Signup';

function App() {
  return (
    <div className="App">
      
      {<Login/>}
      {<Signup/>}
    </div>
  );
}

export default App;
