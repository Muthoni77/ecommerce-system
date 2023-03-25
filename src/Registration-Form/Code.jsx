import React from 'react'

function Code() {
  return (
    <div className="   flex justify-center items-center mt-20 ">
      <div className="  text-black ">
        <h1 className=" mb-6 font-bold ">Password Code Verification</h1>
        <p className='mb-12'>Enter the code you received in your email to reset your password</p>
        <form className=" flex flex-col">
          <div className=" flex flex-col">
            <label className=" text-left" for="code">
              Code
            </label>
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="code"
              type="text"
              placeholder="code"
            />
          </div>
          
          <div className="flex flex-col">
            <input
              type={"submit"}
              value="Verify code"
              className=" mb-3 h-14 w-96 bg-blue-300 rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Code