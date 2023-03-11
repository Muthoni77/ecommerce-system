
import './App.css';
import Login from './Registration-Form/Login';
import Product from './Pages/Product';
import Signup from './Registration-Form/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NewPassword from './Registration-Form/NewPassword';
import ResetPassword from './Registration-Form/ResetPassword';
import Profile from './Registration-Form/Profile';
import SideNav from './Pages/SideNav';

function App() {
  return (
    <div className="App h-full">
      {/* <h1 className="text-3xl font-bold underline bg-slate-600">
       Hello world!
     </h1> */}

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sidenav" element={<SideNav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
