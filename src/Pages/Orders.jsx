import React, { useContext } from "react";
import ProductContext from "../Context/Product-Context";

export const Orders = () => {

  const {cart} = useContext(ProductContext)

  console.log("cart", cart)
  
  return (
    <div className="flex">
      <div className="flex flex-col w-3/4 mx-20">
        <h1 className=" mt-10  font-bold ">Personal details</h1>
        <form className=" flex flex-row mt-7  justify-between items-center">
          <div className=" flex flex-col">
            <label className=" text-left" for="shippingAddress">
              Shipping Address
            </label>
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="homeAddress"
              type="text"
              placeholder="Rainbow resort"
            />
            <input
              className=" mb-3 h-10 w-64  border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Raphta Road"
            />
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
            <input
              className=" mb-3 h-10 w-64  border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" text-left" for="shippingAddress">
              Shipping Address
            </label>
            <input
              className=" mb-3 h-10 w-64  border-[1px] border-gray-400 px-4"
              id="homeAddress"
              type="text"
              placeholder="Rainbow resort"
            />
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Raphta Road"
            />
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
            <input
              className=" mb-3 h-10 w-64 border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
          </div>
        </form>

        <input
          type={"submit"}
          value="Submit"
          className=" mb-2 h-10 w-36 bg-blue-300 ml-56"
        />

        <div className=" flex flex-col ">
          <label className=" text-left" for="Note">
            Note
          </label>
          <input
            className=" mb-3 h-36 w-3/4 m-7 border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
        </div>
      </div>
      <div className="mx-20 mt-7">
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
            <button>Checkout</button>
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
  );
};
