
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import {validateEmail} from '../services/validator'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faSpinner} from '@fortawesome/free-solid-svg-icons'

import {toast} from 'react-toastify'

import api from '../services/api'

function Login() {
  const [user,setUser] = useState({
    email:"",
    password: ""
})

const [formValid, setFormValid ] = useState(false);
const handleChange = e =>{
const {name,value} = e.target
  setUser({
    ...user,//spread operator 
    [name]:value
  })


  if (name === 'email') {
    //console.log('validate email', validateEmail(value))
    setFormValid(validateEmail(value))
    console.log('state email', formValid)
  }
}
 //Toggle password visibility state
 const [showPassword, setShowPassword] = useState(false);

 //Loading state
 const [loading, setLoading] = useState(false);



const loginUser = async (email, password) => {
  const loginResponse = await api.loginUser(email, password)

  if (loginResponse.status >= 200 && loginResponse.status < 300) {
    return loginResponse.data;
  }else {
    return null;
  }
}

const formSubmitted = async (event) => {
  setLoading(true)
  event.preventDefault()
  const login = await loginUser(user.email, user.password);
  console.log(login);

  if (login) {
        toast.success(login.message); 
        localStorage.setItem("ateller-token", login.data);
        setLoading(false)
  }else {
    setLoading(false)
  }
}

 

  return (
    // <div
    //   className="h-screen w-full p-5 pt-8 bg-no-repeat bg-cover  "
    //   style={{
    //     backgroundImage:
    //       "url(https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
    //   }}
    // >
    <div className="   flex justify-center items-center mt-20 ">
      <div className=" text-black ">
        <h1 className=" font-bold  ">Login</h1>
        <p className="mb-12">Welcome to Ateller</p>

        <form className=" flex flex-col" onSubmit={formSubmitted}>
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
          <div className="flex flex-col ">
            <label className=" text-left" for="password">
              Password
            </label>
            <input
              className=" mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="password"
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            {showPassword ? (
                <BiHide
                  className="absolute top-[50%] cursor-pointer hover:scale-105 text-dark"
                  size={18}
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                 <BiShow
                   className="absolute text-left  top-[50%] cursor-pointer hover:scale-105 text-dark"
                   size={18}
                   onClick={() => {
                     setShowPassword(true);
                   }}
                />
              )}
          </div>
          <div className="mb-4">
            <a href="/forgotpassword">Forgot your password?</a>
          </div>

          <div className="flex flex-col">
            <div className={loading ? "hidden" : ""}>
            <button
              type="submit"
              disabled={!formValid}
              className={formValid && user.password.length > 3 ? "mb-5 h-14 w-96 bg-blue-600 text-white font-bold hover:bg-blue-700 rounded-xl" : "mb-5 h-14 w-96 bg-gray-500 text-white font-bold hover:cursor-not-allowed rounded-xl"}
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
            <p>
              Not a member? <a href="/signup">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
