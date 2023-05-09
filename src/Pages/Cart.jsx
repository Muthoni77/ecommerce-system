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

  const getTotalPrice = () => {
    return context.cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <React.Fragment>
      <div className="">
        <Header
          cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
      </div>
      <main className="bg-gray-100 ">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div className="bg-blue flex w-2/4 mx-auto mb-7  justify-between">
                <img
                  className="w-[100px] h-[100px]"
                  src={cartItem.image}
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
                  className=""
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
          <h1 className="mt-7 font-bold">TOTAL Ksh: {getTotalPrice()}</h1>
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
