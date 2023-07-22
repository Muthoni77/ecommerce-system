
import './App.css';
import Login from './Registration-Form/Login';

import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Profile from './Registration-Form/Profile';
import SideNav from './Pages/SideNav';
import Forgotpassword from './Registration-Form/Forgotpassword';
import Resetpassword from './Registration-Form/Resetpassword';
import OTP from './Registration-Form/OTP';

import Navigate from "./Registration-Form/Navigate"
import GlobalState from './Context/GlobalState';
import ProductsPage from './Pages/Product';
import CartPage from './Pages/Cart';
import { Orders } from './Pages/Orders';
import Signup from './Registration-Form/Signup';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <div className="App h-full">
      
      <GlobalState>
        <BrowserRouter>
        <ToastContainer
          autoClose={5000}
          position='bottom-right'
          theme='colored'
          hideProgressBar={true}
        />
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/resetpassword/:token" element={<Resetpassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/navigate" element={<Navigate/>} />
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
