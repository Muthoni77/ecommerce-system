import React from "react";

function Forgotpassword() {
  return (
    <div className="  flex justify-center items-center mt-20 ">
      <div className="  ">
        <h1 className=" mb-6 font-bold ">Forgot password?</h1>
        <p className="mb-12 text-grey">
          Enter your email to receive your password reset link
        </p>

        <form className=" flex flex-col">
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
              value="Request password reset"
              className=" mb-4 h-14 w-96 bg-blue-300 rounded-xl"
            />
          </div>
          <div className="mb-4">
            
               <a href="#!">I remembered my password</a>
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
