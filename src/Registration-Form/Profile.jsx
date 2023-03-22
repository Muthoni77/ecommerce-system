import React from "react";

function Profile() {
  return (
    // <div className=" w-full h-full flex justify-center items-center p-8">
    <div className="flex justify-center items-center flex-col  ">
      <div class=" flex-item-center md:w-48 flex-shrink-0 flex ">
        <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
          alt="icon"
          className={` cursor-pointer rounded-full
          w-7 
        `}
        />
        <h1 className="  font-bold ">Personal details</h1>
      </div>
      <form className=" flex flex-col">
        <div className=" flex flex-col">
          <label className=" text-left" for="name">
            Name
          </label>
          <input
            className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
            className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
            className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
            className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="homeAddress"
            type="text"
            placeholder="Rainbow resort"
          />
          <input
            className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="officeAddress"
            type="text"
            placeholder="Raphta Road"
          />
          <input
            className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
            id="primaryAddress"
            type="text"
            placeholder="Uthiru77"
          />
        </div>
        <div className="flex flex-col">
          <input
            type={"submit"}
            value="Update Profile"
            className=" mb-5 h-14 w-96 bg-blue-300 rounded-xl"
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
