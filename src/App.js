
import './App.css';
import Login from './Registration-Form/login';
import Product from './Pages/Product';
import Signup from './Registration-Form/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
