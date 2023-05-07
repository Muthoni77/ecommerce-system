
import './App.css';
import Login from './Registration-Form/Login';

import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Profile from './Registration-Form/Profile';
import SideNav from './Pages/SideNav';
import Forgotpassword from './Registration-Form/Forgotpassword';
import Resetpassword from './Registration-Form/Resetpassword';
import Code from './Registration-Form/Code';

import GlobalState from './Context/GlobalState';
import ProductsPage from './Pages/Product';
import CartPage from './Pages/Cart';
import { Orders } from './Pages/Orders';
<<<<<<< HEAD
// import Home from './Components/Home';
=======
import Signup from './Registration-Form/Signup';
>>>>>>> a217d3b556f1096209fcbc29733ea8c91c0caadf

function App() {

  return (
    <div className="App h-full">
      
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path="/code" element={<Code />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<ProductsPage />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/sidenav" element={<SideNav />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
