import React from "react";

function Resetpassword() {
  return (
    <div
      className="h-screen w-full p-5 pt-8 bg-no-repeat bg-cover  "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
      }}
    >
      <div className=" w-2/4 text-black p-14">
        <h1 className=" mb-09 font-bold " style={{ width: "50%" }}>
          Reset Password
        </h1>
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
