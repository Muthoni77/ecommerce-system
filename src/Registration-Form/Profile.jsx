import React from 'react'

function Profile() {
  return (
    <div className=" w-full h-full flex justify-center items-center p-8">
      <div className=" w-2/4 text-black">
        <h1 className=" mb-09 font-bold " style={{ width: "50%" }}>
          Personal details
        </h1>
        <form className=" flex flex-col">
          <div className=" flex flex-col">
            <label className=" text-left" for="firstName">
              FirstName
            </label>
            <input
              className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="Firstname"
              type="text"
              placeholder="Firstname"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" text-left" for="lastName">
              LastNname
            </label>
            <input
              className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="Lastname"
              type="text"
              placeholder="Lastname"
            />
          </div>
          <div className="flex flex-col">
            <label className=" text-left" for="phoneNo">
              Phone No
            </label>
            <input
              className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
              className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col">
            <input
              type={"submit"}
              value="Sign in"
              className=" mb-5 h-14 w-96 bg-red-300 rounded-xl"
            />
            <input
              type={"submit"}
              value="Sign up"
              className="h-14 w-96 border-red-300 border-[1px] rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile