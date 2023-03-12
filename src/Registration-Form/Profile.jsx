import React from "react";

function Profile() {
  return (
    // <div className=" w-full h-full flex justify-center items-center p-8">
    <div className="flex">
      <div className=" w-2/4 text-black  p-14">
        <img
          src="https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png"
          alt="icon"
          className={`absolute cursor-pointer rounded-full
        -right-3 top-9  w-20 border-2 
        `}
        />
        <h1 className=" mb-09 font-bold " style={{ width: "50%" }}>
          Personal details
        </h1>
        <form className=" flex flex-col">
          <div className=" flex flex-col">
            <label className=" text-left" for="name">
              Name
            </label>
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="name"
              type="text"
              placeholder="name"
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
              placeholder="PhoneNo"
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
              placeholder="Email"
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
              placeholder="Home Address"
            />
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="officeAddress"
              type="text"
              placeholder="Office Address"
            />
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="primaryAddress"
              type="text"
              placeholder="Primary Address"
            />
          </div>
        </form>
      </div>
      <div className=" w-2/4 text-black p-14">
        <h1 className=" mb-09 font-bold " style={{ width: "50%" }}>
          Update Profile
        </h1>
        <form className=" flex flex-col">
          <div className=" flex flex-col">
            <label className=" text-left" for="email">
              Email
            </label>
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" text-left" for="newPassword">
              New Password
            </label>
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="newPassword"
              type="text"
              placeholder="New Paasword"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" text-left" for="confirmPassword">
              Confirm Password
            </label>
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="confirmPassword"
              type="text"
              placeholder="Confirm password"
            />
          </div>
          <div className="flex flex-col">
            <input
              type={"submit"}
              value="Reset Password"
              className=" mb-3 h-14 w-96 bg-red-300 rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
