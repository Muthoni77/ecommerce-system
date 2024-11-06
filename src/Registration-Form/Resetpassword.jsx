import { useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { toast } from "react-toastify";

import api from "../services/api";

import {useParams} from "react-router-dom"

function Resetpassword() {
  const {token} = useParams();
  //Toggle password visibility state
  const [showPassword, setShowPassword] = useState(false);
  
  //Loading state
  const [isVerifyLoading, setIsVerifyLoading] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const [user, setUser] = useState({
    newPassword: "",
    password2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  const resetpasswordUser = async (newPassword, password2) => {
    const resetPasswordResponse = await api.resetPassUser(newPassword, token);

    if (
      resetPasswordResponse.status >= 200 &&
      resetPasswordResponse.status < 300
    ) {
      return resetPasswordResponse.data;
    } else {
      return null;
    }
  };
  const formSubmitted = async (event) => {
    setLoading(true);
    event.preventDefault();
    const resetpass = await resetpasswordUser(user.newPassword);
    console.log(resetpass);

    if (resetpass) {
      toast.success(resetpass.message);
      localStorage.setItem("ateller-token", resetpass.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleVerifyToken=async()=>{
    //verify if token is working
      const response=true
      if(response){
        //if token is working
        setIsTokenValid(true)
      }else{
        //if token is not valid
        setIsTokenValid(false)
      }

     setIsVerifyLoading(false)
    
  }
  useEffect(()=>{
    handleVerifyToken()
  },[])

  if(isVerifyLoading){
    return <div><p>Please wait as we verify your token...</p></div>
  }

  return (
    <div className="   flex justify-center items-center mt-20 ">
    {isTokenValid? (
      <div className="  text-black ">
        <h1 className="  font-bold mb-6">Reset Password </h1>
        <p className="mb-12 w-96">
          Passwords must contain at least 1 number, 1 letter, 1 special
          character and at least 8 characters in length.
        </p>
        <form className=" flex flex-col " onSubmit={formSubmitted}>
          <div className="flex flex-col ">
            <label className=" text-left" for="newPassword">
              New Password
            </label>
            <div className="relative">
              <input
                className=" relative mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="newPassword"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="New password"
                name="newPassword"
                value={user.newPassword}
                onChange={handleChange}
              />
              {showPassword ? (
                <BiHide
                  className="absolute top-[25%]  right-[2%] cursor-pointer hover:scale-105 text-dark"
                  size={18}
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <BiShow
                  className="absolute text-left   top-[25%] right-[2%] cursor-pointer hover:scale-105 text-dark"
                  size={18}
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col ">
            <label className=" text-left" for="password2">
              Confirm Password
            </label>
            <div className="relative">
            <input
              className=" mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="password2"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Confirm Password"
              name="password2"
              value={user.password2}
              onChange={handleChange}
            />
            {showPassword ? (
              <BiHide
                className="absolute top-[25%] right-[2%] cursor-pointer hover:scale-105 text-dark"
                size={18}
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            ) : (
              <BiShow
                className="absolute text-left right-[2%]  top-[25%] cursor-pointer hover:scale-105 text-dark"
                size={18}
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            )}
            </div>
            
            
          </div>
          <div className="flex flex-col">
            <div className={loading ? "hidden" : ""}>
            <button
              type="submit"
              disabled={!user.newPassword.length > 3}
              className={user.newPassword.length > 3 && user.password2.length > 3 ? "mb-5 h-14 w-96 bg-blue-600 text-white font-bold hover:bg-blue-700 rounded-xl" : "mb-5 h-14 w-96 bg-gray-500 text-white font-bold hover:cursor-not-allowed rounded-xl"}
            >
              <FontAwesomeIcon className="mr-2" icon={faUser} />
              Sign In</button>
            </div>

              <button
              disabled={true}
              className={!loading ? "hidden" : "mb-5 h-14 w-96 bg-gray-500 text-white font-bold hover:cursor-not-allowed rounded-xl"}
            >
              <FontAwesomeIcon className="mr-2" icon={faSpinner} />
              Loading ...</button>
          </div>
           

        </form>
      </div>
      ):(
      <div>
      {/* Ikae fiti */}
        <p>Your token expired, kindly return to login and reset password again.</p>
      </div>
      )}
    </div>
  );
}

export default Resetpassword;
