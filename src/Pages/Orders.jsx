import React, { useContext } from "react";
import ProductContext from "../Context/Product-Context";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

export const Orders = () => {

  const {cart} = useContext(ProductContext)
  console.log("cart", cart)
  
  return (
    <div className="">
      <Header/>
      <div className = "flex gap-x-4 mx-20">
         <Link to="/">Home __ </Link>
         <Link to="/cart">Shopping Cart __</Link>
          <Link to="/orders">Checkout </Link>
      </div>
      <h1 className="text-black-100 font-normal text-4xl ">Checkout</h1>
      <h1>Shopping Cart</h1>
      <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
      <div className="flex"> 
      <div className="flex flex-col w-3/4 mx-20">
        <h1 className=" mt-10  font-bold ">Personal information</h1>
        <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <form className=" flex flex-row mt-0  justify-between items-center">
          <div className=" flex flex-col">
            <label className=" text-left" htmlFor="fname">
            Firstname
            </label>
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="firstname"
              type="text"
              placeholder="Firstname"
            />
              <label className=" text-left" htmlFor="fname">
            Address
            </label>
            <input
              className=" mb-3 h-10 w-64  border-[1px] border-gray-400 px-4"
              id="address"
              type="text"
              placeholder="Address"
            />
              <label className=" text-left" htmlFor="fname">
            Country
            </label>
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="country"
              type="text"
              placeholder="Country"
            />
              <label className=" text-left" htmlFor="fname">
            State/ County
            </label>
            <input
              className=" mb-3 h-10 w-64  border-[1px] border-gray-400 px-4"
              id="state"
              type="text"
              placeholder="State / County"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" text-left" htmlFor="shippingAddress">
              Second Name
            </label>
            <input
              className=" mb-3 h-10 w-64  border-[1px] border-gray-400 px-4"
              id="secondName"
              type="text"
              placeholder="Second name"
            />
              <label className=" text-left" htmlFor="fname">
            Contact
            </label>
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="contact"
              type="text"
              placeholder="Contact"
            />
              <label className=" text-left" htmlFor="fname">
            City / Town
            </label>
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="town"
              type="text"
              placeholder="City/ Town"
            />
              <label className=" text-left" htmlFor="fname">
            Zip Code
            </label>
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="zipCode"
              type="text"
              placeholder="Zip Code"
            />
          </div>
        </form>

        <div className=" flex flex-col ">
          <label className=" text-left" htmlFor="Note">
            Note
          </label>
          <input
            className=" mb-3 h-36 w-98 m-7 border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
        </div>
      </div>
      <div className="mx-20 mt-20">
         <table className="border w-96">
        <tr>
          <th>Order Summary</th>
        </tr>
        <tr>
          <td>
          <ul>
      {cart.map((cart)=>(
        <li key={cart.id}>
        <div>
          <img
            className="w-[50px] h-[50px]"
            src={cart.imageSrc}
            alt={cart.name}
          />
          <strong>{cart.name}</strong> - ${cart.price} (
          {cart.quantity})
        
        </div>
        </li>

      ))}
            
          </ul>
          
          
          </td>
        </tr>
        <tr>
          <td>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
              </hr>
            </td>
        </tr>
        <tr>  
          <td>Subtotal</td> 
          <td>ksh 1000</td> 
          </tr>
          <tr>  
          <td>Shipping</td> 
          <td>ksh 1000</td> 
          </tr>
          <tr>  
          <td>Tax</td> 
          <td>ksh 1000</td> 
          </tr>
          <tr>
          <td>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
              </hr>
            </td>
        </tr>
        <tr>
          <td>Total</td>
        </tr>
        <tr>
          <td>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
              </hr>
            </td>
        </tr>
        <tr>
          <td>Payment</td>
        </tr>
        

        <tr>
          <td>
            <button>Mobile Money</button>
          </td>
          <td>
            <button>Bank transfer</button>

          </td>
          <td>Paypal</td>
        </tr>
        <tr>
          <td>
            <button onClick={
             () => alert('clicked!')
            }>Checkout</button>
          </td></tr>
          <tr>
          <td>
            <button>Back to cart</button>
          </td></tr>

      </table>
        
        {/* <ul>
          {cart.map((cart)=> (
          <li key={cart.id}>
            <strong>{cartItem.name}</strong> - ${cartItem.price} (
                {cartItem.quantity})
          </li>
        )
        )}</ul> */}
        
      </div>
    </div>
    </div>
  );
};
