import React from 'react'

export const Orders = () => {
  return (
    <div>
      <h1 className=" mt-10  font-bold ">Personal details</h1>
      <form className=" flex flex-col mt-7 w-full justify-center items-center">
        <div className=" flex flex-row ">
          <input
            className=" mb-3 h-10 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="name"
            type="text"
            value="Nasra Mohamed"
          />

          <input
            className=" mb-3 h-10 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="name"
            type="text"
            value="Nasra Mohamed"
          />
        </div>

        <div className="flex flex-row mt-1 ">
          <input
            className=" mb-3 h-10 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="phone no"
            type="number"
            value="0745632393"
          />

          <input
            className=" mb-3 h-10 m-7 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="phone no"
            type="number"
            value="0745632393"
          />
        </div>
        <div className=" flex flex-row mt-2 ">
          <input
            className=" mb-3 h-10 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
          <input
            className=" mb-3 h-10 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
        </div>
        <div className=" flex flex-row mb-1 ">
          <input
            className=" mb-3 h-10 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
          <input
            className=" mb-3 h-7 w-96 m-7 rounded-xl border-[1px] border-gray-400 px-4"
            id="Email"
            type="text"
            value="mohamednasra@gmail.com"
          />
        </div>
        <div className=" flex flex-col">
          <label className=" text-left" for="shippingAddress">
            Shipping Address
          </label>
          <input
            className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="homeAddress"
            type="text"
            placeholder="Rainbow resort"
          />
          <input
            className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="officeAddress"
            type="text"
            placeholder="Raphta Road"
          />
          <input
            className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="primaryAddress"
            type="text"
            placeholder="Uthiru77"
          />
        </div>
        <div className="flex flex-col">
          <input
            type={"submit"}
            value="Submit"
            className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-32"
          />
        </div>
      </form>
    </div>
  );
}
