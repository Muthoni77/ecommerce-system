import React from "react";

function Resetpassword() {
  return (
    <div className="   flex justify-center items-center mt-20 ">
      <div className="  text-black ">
        <h1 className="  font-bold mb-6">Reset Password</h1>
        <p className="mb-12 w-96">
          Passwords must contain at least 1 number, 1 letter, 1 special
          character and at least 8 characters in length.
        </p>
        <form className=" flex flex-col">
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
              className=" mb-3 h-14 w-96 bg-blue-300 rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
