import React, { useEffect, useState,useContext } from "react";
// import { connect } from 'react-redux';

import ProductContext from "../Context/Product-Context";
import Header from "../Components/Header";
import Home from "../Components/Home";
// import Home from "./Components/Home";
// import { addProductToCart } from '../store/actions';

const ProductsPage = (props) => {

  const {products}=useContext(ProductContext);
  // const [allProducts,setAllProducts]=useState(products);
  const [filteredProducts,setFilteredProducts]=useState([])
  const [category,setCategory]=useState("all")

  // const [initialRender,setInitialRender]=useState(false)

  // const [products,setProducts] = useState ([]);
  // async function fetch_data(){
  //   const resource = await fetch("http://localhost:5000/api ",);
  //   const res =await resource.json();
  //   console.log(res);
  //   setProducts(res.data)
  // }
  // useEffect(()=>{
  //   fetch_data();
  // },[]);
  // console.log(products);

  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "Ksh",
  });


  const handleChangeCategory=(newCategory)=>{
    // alert("Category changed to "+newCategory);
    setCategory(newCategory);
  }

 
  useEffect(()=>{
    setFilteredProducts(products);
  },[products])

  useEffect(()=>{
    if(category!=="all"){
      const ourFilteredProducts=products.filter((product)=>product.category===category);
      setFilteredProducts(ourFilteredProducts);
      console.log("ourFilteredProducts");
      console.log(ourFilteredProducts);
    }else{
      setFilteredProducts(products);
    }
     
  },[category])

  



  return (
    <ProductContext.Consumer>
      {(context) => (
        <React.Fragment>
          <div className="">
            <Header
           onChangeCategory={handleChangeCategory}
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />

          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mx-20 mt-20 ">
            {/* <div className=" "> */}
            {filteredProducts.map((product) => (
              <div
                className="bg-gray-100 "
                key={product.id}
                href={product.href}
              >
                <img
                  className="hover:grow hover:shadow-lg"
                  src={product.image}
                  alt="products"
                />
                <div className="ml-20 flex items-center justify-between">
                  <p className="">
                    {product?.name
                      ?.substr(0, 22)
                      .concat(product?.name?.length > 56 ? "" : "...")}
                    {/* {product?.name
                      ?.subtr(0, 22)
                      .concat(product?.name?.length > 22 ? "..." : " ")} */}
                  </p>
                </div>
                <p className="pt-1 text-red-700 font-bold">
                  {DollarUsd.format(product.price)}
                </p>
                <button
                  onClick={context.addProductToCart.bind(this, product)}
                  className="bg-gray-300 w-50  rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {/* </div> */}
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
