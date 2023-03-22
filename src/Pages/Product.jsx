import React from "react";
// import { connect } from 'react-redux';

import ProductContext from "../Context/Product-Context";
import Header from "../Components/Header";
// import { addProductToCart } from '../store/actions';


const ProductsPage = (props) => {
   const DollarUsd = new Intl.NumberFormat("en-US", {
     style: "currency",
     currency: "Ksh",
   });
  return (
    <ProductContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="bg-red-300">
            <Header
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-20">
            {context.products.map((product) => (
              <a key={product.id} href={product.href}>
                <img
                  className="hover:grow hover:shadow-lg"
                  src={product.imageSrc}
                  alt="products"
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">{product.name}</p>
                </div>
                <p className="pt-1 text-red-700 font-bold">
                  {DollarUsd.format(product.price)}
                </p>
                <button
                  onClick={context.addProductToCart.bind(this, product)}
                  className="bg-gray-300 w-full  rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500 hover:text-white"
                >
                  Add to Cart
                </button>
              </a>
            ))}
          </div>
        </React.Fragment>
      )}
    </ProductContext.Consumer>
  );
};

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

export default ProductsPage;
