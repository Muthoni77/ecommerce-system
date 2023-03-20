import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';

import ProductContext from "../Context/Product-Context";
import Header from "../Components/Header";
// import { removeProductFromCart } from '../store/actions';


const CartPage = (props) => {
  const context = useContext(ProductContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <Header
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <img
                  className="w-[100px] h-[100px]"
                   src={cartitem.imageSrc}
                  alt={cartitem.name}
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
        </ul>
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
