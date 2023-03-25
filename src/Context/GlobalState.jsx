import React, {  useReducer, useState } from "react";

import ProductContext from "./Product-Context";
import { productReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./Reducer";

const GlobalState = (props) => {
  const products = [
    {
      id: 1,
      name: "HP Notebook 15 Intel Celeron (N Series)",
      href: "#",
      price: "39595",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: 2,
      name: "HP Notebook Intel Core 15 1232U",
      href: "#",
      price: "94000",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },
    {
      id: 3,
      name: "HP M27fFHD27 Monitor",
      href: "#",
      price: "37120",
      category: "Monitor",
      imageSrc:
        "https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vbml0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "HP M27f27-inch Full-HD IPS Monitor",
      href: "#",
      price: "34000",
      category: "Monitor",
      imageSrc:
        "https://images.unsplash.com/photo-1552831388-6a0b3575b32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbml0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Apple mac book air M1 MGN63 13",
      price: "185000",
      href: "#",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxhcHBsZSUyMG1hYyUyMGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Appple Mac BOOK MGN63B/A",
      href: "#",
      price: "133499",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1521661978458-5a2bec6b6e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGUlMjBtYWMlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      name: "Apple Refurbished mac Book",
      href: "#",
      price: "27000",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGFwcGxlJTIwbWFjJTIwYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      name: "HP refurbished 840 GZ core 15",
      href: "#",
      price: "28000",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      name: "HP refurbished Compaq pro 6200",
      href: "#",
      price: "21000",
      category: "Laptop",
      imageSrc:
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/3676701/1.jpg?5202",
    },
    {
      id: 10,
      name: "Dell refurbished Optiplex 9020 SFF CPU",
      href: "#",
      price: "35000",
      category: "Laptop",
      imageSrc:
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/2419111/1.jpg?5825",
    },
    {
      id: 11,
      name: "Dell refurbished Optiplex 790 SFF CPU",
      href: "#",
      price: "18000",
      category: "Laptop",
      imageSrc:
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/6982121/1.jpg?7329",
    },
    {
      id: 12,
      name: "Lenovo Refurbished DEsktop",
      href: "#",
      price: "18000",
      category: "Desktop",
      imageSrc:
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/3676701/1.jpg?5153",
    },
  ];
  // const [cart, setCart] = useState([]);
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
