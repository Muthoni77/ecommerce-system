
import './App.css';
import Login from './Registration-Form/Login';
import Product from './Components/Product';
import Signup from './Registration-Form/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Profile from './Registration-Form/Profile';
import SideNav from './Pages/SideNav';
import Forgotpassword from './Registration-Form/Forgotpassword';
import Resetpassword from './Registration-Form/Resetpassword';
import Header from './Components/Header';

import { useEffect, useState } from 'react';

function App() {
//   const[ products, setProducts] = useState({});
//     const [filters, setFilters] = useState({});

//     useEffect (()=>{
//       const fetchProducts = async () => {
//         try{
// const data = await fetch ('');
// const products = await data.json;
//         }
//         catch(err){
          
//         }
//       }
//     },[]);
  return (
    <div className="App h-full">
      <div className="bg-red-300">
        <Header />
      </div>
      <Product/>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/sidenav" element={<SideNav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
