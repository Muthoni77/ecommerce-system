import React, { useEffect, useReducer, useState } from "react";

import ProductContext from "./Product-Context";
import { productReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./Reducer";

const GlobalState = (props) => {
 
  const [products, setProducts] = useState([]);

  async function fetch_data() {

    try {
      const resource = await fetch("http://localhost:20090/api/products/ ");
      const res = await resource.json();
      console.log(res);
      setProducts(res.data);
  
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetch_data();
  }, []);
  console.log(products);

  const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(productReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,

      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default GlobalState;