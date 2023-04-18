import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';

import ProductContext from "../Context/Product-Context";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
// import { removeProductFromCart } from '../store/actions';


const CartPage = (props) => {
  const context = useContext(ProductContext);

  useEffect(() => {
    console.log(context);
  }, []);

  const getTotalPrice=()=> {
    return context.cart.reduce(
      (accumulator, item)=> accumulator + item.quantity * item.price,0

    )
    
  }

  return (
    <React.Fragment>
      <div className="bg-red-300">
        <Header
          cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
      </div>
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <img
                  className="w-[100px] h-[100px]"
                  src={cartItem.imageSrc}
                  alt={cartItem.name}
                />
                <strong>{cartItem.name}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
          <p>total $: {getTotalPrice()}</p>
        </ul>
        <Link to="/orders">Checkout</Link>

      </main>
    </React.Fragment>
  );
};


// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default CartPage;
