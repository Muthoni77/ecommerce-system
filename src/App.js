
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

import {  useState } from 'react';
import Code from './Registration-Form/Code';
import Cart from './Components/Cart';

function App() {
  const[ products, setProducts] = useState({});
    const [filters, setFilters] = useState({});
     const [isShowcart, setIsShowCart] = useState(false);
     const[Cart,setCart]= useState({});
    
         

            // setProducts(products.data);
            // setFilters(products.data);
            
          



  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      // firt
      return [...prev, { product, amount: 1 }];
    });
  };
  return (
    <div className="App h-full">
      <div className="bg-red-300">
        <Header setIsShowCart={setIsShowCart} />
      </div>
      
      
      <div className="">
        <Product/>
        
      </div>
      <div>{isShowcart && <Cart setIsShowCart={setIsShowCart} />}</div>
      {/* HANDLE ADD TO CART */}

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/code" element={<Code />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/sidenav" element={<SideNav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
