
import './App.css';
import Login from './Registration-Form/Login';
import Product from './Components/Product';
import Signup from './Registration-Form/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Profile from './Registration-Form/Profile';
import SideNav from './Pages/SideNav';
import Forgotpassword from './Registration-Form/Forgotpassword';
import Resetpassword from './Registration-Form/Resetpassword';



import Code from './Registration-Form/Code';

import GlobalState from './Context/GlobalState';
import ProductsPage from './Pages/Product';
import CartPage from './Pages/Cart';

function App() {
  
    
  
     
    //  const[Cart,setCart]= useState({});
    
         

           // setProducts(products.data);
             //setFilters(products.data);
            
          



  // const handleAddToCart = (product) => {
  //   setCart((prev) => {
  //     const findProductInCart = prev.find((item) => item.id === product.id);

  //     if (findProductInCart) {
  //       return prev.map((item) =>
  //         item.id === product.id ? { ...item, amount: item.amount + 1 } : item
  //       );
  //     }

  //     // firt
  //     return [...prev, { product, amount: 1 }];
  //   });
  // };
  return (
    <div className="App h-full">
      <GlobalState>
        <ProductsPage />
        <CartPage />
      </GlobalState>

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
        {/* <GlobalState> */}
        {/* <Route  path="/cart" element={<CartPage/>} />
          <Route  path="/" element={<ProductsPage/>} /> */}
        {/* </GlobalState> */}
      </Router>
    </div>
  );
}

export default App;
