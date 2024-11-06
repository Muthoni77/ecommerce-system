import React, { useState } from "react";
import {validateEmail} from '../services/validator';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faSpinner} from '@fortawesome/free-solid-svg-icons';
import api from "../services/api";
import { toast } from "react-toastify";

function Forgotpassword() {
  const [user,setUser] = useState({
    email:"",
})
const [formValid, setFormValid ] = useState(false);
const handleChange = e =>{
  const {name,value} = e.target
    setUser({
      ...user,//spread operator 
      [name]:value
    })

    if (name === 'email') {
      // console.log('validate email', validateEmail(value))
      setFormValid(validateEmail(value))
      console.log('state email', formValid)
    }
  }
  const [loading, setLoading] = useState(false);
 
// 
  const forgotPassUser = async (email) => {
    const forgotPassResponse = await api.forgotPassUser(email)
  
    if (forgotPassResponse.status >= 200 && forgotPassResponse.status < 300) {
      return forgotPassResponse.data;
    }else {
      return null;
    }
  }
const formSubmitted = async (event) => {
  setLoading(true)
  event.preventDefault()
  const forgotPass = await forgotPassUser(user.email);
  console.log(forgotPass);

  if (forgotPass) {
        toast.success(forgotPass.message); 
        localStorage.setItem("ateller-token", forgotPass.data);
        setLoading(false)
  }else {
    setLoading(false)
  }
}


  return (
    <div className="  flex justify-center items-center mt-20 ">
      <div className="  ">
        <h1 className=" mb-6 font-bold ">Forgot password?</h1>
        <p className="mb-12 text-grey">
          Enter your email to receive your password reset link
        </p>

        <form className=" flex flex-col"onSubmit={formSubmitted}>
          <div className=" flex flex-col">
          <label className=" text-left" for="email">
              Email
            </label>
            <input
              className=" mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="Email"
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <div className={loading ? "hidden" : ""}>
            <button
              type="submit"
              disabled={!formValid}
              className={formValid ? "mb-5 h-14 w-96 bg-blue-600 text-white font-bold hover:bg-blue-700 rounded-xl" : "mb-5 h-14 w-96 bg-gray-500 text-white font-bold hover:cursor-not-allowed rounded-xl"}
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
          <div className="mb-4">
            
               <a href="/login">I remembered my password</a>
          
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
