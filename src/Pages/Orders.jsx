import React, { useContext } from "react";
import ProductContext from "../Context/Product-Context";

export const Orders = () => {
  const { cart } = useContext(ProductContext);

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
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="homeAddress"
              type="text"
              placeholder="Rainbow resort"
            />
            <input
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Raphta Road"
            />
            <input
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
            <input
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
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
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="homeAddress"
              type="text"
              placeholder="Rainbow resort"
            />
            <input
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Raphta Road"
            />
            <input
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
            <input
              className=" mb-3 h-10 w-80 rounded-xl border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Uthiru77"
            />
          </div>
        </form>

        <input
          type={"submit"}
          value="Submit"
          className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-32"
        />

        <div className=" flex flex-row    ">
          <input
            className=" mb-3 h-36 w-full m-7 rounded-xl border-[1px] border-gray-400 px-4"
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
   <li className="mb-7"> {item.name} </li>
          <li>{item.price}</li>
          </ul>
          // <li className="mb-7"> {item.name} </li>
          // <li>{item.price}</li>
        ))}
      </div>
    </div>
  );
};
