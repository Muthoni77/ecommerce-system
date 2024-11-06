import React from 'react'
import { Link } from 'react-router-dom';

function OTP() {
  return (
    //
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2"></div> 
    <div className="   flex justify-center items-center mt-20 ">
      <div className="  text-black ">
        <h1 className=" mb-6 font-semibold text-3xl ">Email Verification</h1>
        <p className='mb-12 text-sm font-medium text-black'>Enter the code you received in your email to reset your password</p>
        <form className=" ">
         <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
            <input
              className=" mb-3 h-16 w-16 rounded-xl border-[1px] border-gray-400 px-4"
              id="OTP"
              type="text"
             
            />
            <input
              className=" mb-3 h-16 w-16 rounded-xl border-[1px] border-gray-400 px-4"
              id="OTP"
              type="text"
             
            />
            <input
              className=" mb-3 h-16 w-16 rounded-xl border-[1px] border-gray-400 px-4"
              id="OTP"
              type="text"
             
            />
            <input
              className=" mb-3 h-16 w-16 rounded-xl border-[1px] border-gray-400 px-4"
              id="OTP"
              type="text"
              placeholder=""
            />
          </div>
          </div>
           <div className="flex flex-col space-y-5">
                  <div>
                    <Link
                      // onClick={() => verfiyOTP()}
                      className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-4 bg-blue-300 border-none text-black text-sm shadow-sm mt-4"
                    >
                      Verify Account
                    </Link>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-black">
                    <p>Didn't recieve code?</p>{" "}
                    <Link
                      className="flex flex-row items-center"
                      // style={{
                      //   color: disable ? "gray" : "blue",
                      //   cursor: disable ? "none" : "pointer",
                      //   textDecorationLine: disable ? "none" : "underline",
                      // }}
                      // onClick={() => resendOTP()}
                    >
                      {/* {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"} */}
                    </Link>
                  </div>
                </div>
        </form>
      </div>
    </div>
       </div>
    </div>
    </div>

  );
}

export default OTP