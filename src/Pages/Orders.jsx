import React, { useContext } from "react";
import ProductContext from "../Context/Product-Context";

export const Orders = () => {
  const { cart } = useContext(ProductContext);
   const getTotalPrice = () => {
     return cart.reduce(
       (accumulator, item) => accumulator + item.quantity * item.price,
       0
     );
   };

  return (
    <div className="flex mx-20">
      <div className="flex flex-col w-2/4">
        <h1 className=" mt-10  font-bold ">Personal details</h1>
        <form className=" flex flex-row mt-7  justify-between items-center">
          <div className=" flex flex-col">
            <label className=" text-left" for="shippingAddress">
              Shipping Address
            </label>
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4 "
              id="homeAddress"
              type="text"
              placeholder="Rainbow resort"
            />
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Raphta Road"
            />
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
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
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
              id="homeAddress"
              type="text"
              placeholder="Rainbow resort"
            />
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Raphta Road"
            />
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
            <input
              className=" mb-3 h-10 w-72  border-[1px] border-gray-400 px-4"
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
            className=" mb-3 h-36 w-full m-7  border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
        </div>
      </div>
      <div className="border-7 h-full w-96 mx-auto">
        <h1 className="font-bold mt-5">Order summarry</h1>

        {cart.map((item) => (
          <ul className="flex justify-between">
            <li>({item.quantity})</li>
            <li className="mb-7"> {item.name} </li>
            <li>{item.price}</li>
          </ul>
        ))}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black-700"></hr>

        <h1 className="mt-7 ">Subtotal KES {getTotalPrice()}</h1>
        <p> Shipping : KES 1340</p>
        <p>Tax : KES 120</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black-700"></hr>
        <h1 className="mt-7 font-bold">TOTAL Ksh: {getTotalPrice()}</h1>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-black-700"></hr>
        <h1 className="font-bold mb-5">Payment</h1>
        <div className="flex justify-between">
          <input
            type={"submit"}
            value="Mobile money"
            className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-3 "
          />
          <input
            type={"submit"}
            value="Bank tranfer"
            className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-3"
          />
          <input
            type={"submit"}
            value="Paypal"
            className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-3  "
          />
        </div>
        <input
          type={"submit"}
          value="Checkout"
          className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-32 "
        />
      </div>
    </div>
  );
};
