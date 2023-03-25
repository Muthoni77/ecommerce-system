import React from 'react'

export const Orders = () => {
  return (
    <div>
        <h1 className=" mt-10  font-bold ">Personal details</h1>
      <form className=" flex flex-col mt-7">
        <div className=" flex flex-row">
          <label className=" text-left" for="name">
            Name
          </label>
          <input
            className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="name"
            type="text"
            value="Nasra Mohamed"
          />
        </div>

        <div className="flex flex-col">
          <label className=" text-left" for="phoneNo">
            Phone No
          </label>
          <input
            className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="phone no"
            type="number"
            value="0745632393"
          />
        </div>
        <div className=" flex flex-col">
          <label className=" text-left" for="email">
            Email
          </label>
          <input
            className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
  )
}
