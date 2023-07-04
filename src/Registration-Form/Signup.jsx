import { useState } from "react"
import {validateEmail} from '../services/validator'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faSpinner} from '@fortawesome/free-solid-svg-icons'

import api from '../services/api'

const Signup = () => {
  const [User , setUser] = useState({
    username:"",
    phone:"",
    email:"",
    password:"",
    password2:""
  })

  const [loading , setLoading] = useState(false);
  const [formValid , setFormValid] = useState(false);

  const handleChange = (event) => { 
    setUser({ ...User, [event.target.name]: event.target.value });
    if (event.target.name === 'email') {
      // console.log('validate email', validateEmail(event.target.value))
      setFormValid(validateEmail(event.target.value))
       console.log('state email', formValid)
    }
  };
//     const register = (event)=>{
//       setLoading(true);
//     event.preventDefault();
//       const {username, phone ,email,password} = User
//       if (username && phone && email && password){
//       axios.post(" http://localhost:20090/api/user/register",User )
//       .then(res=>{
//         alert(res.data.message); 
//         // localStorage.setItem("ateller-token", res.data.data);
//         setLoading(false)
//       }).catch((err)=>
//         console.error(err)
//         //setLoginUser(res.data.user)
//       );
// }
//     }

    const onSubmitRegistrationForm = async (event) => {
      event.preventDefault();
      setLoading(true);

      const {username, phone ,email,password} = User;

      if (username && phone && email && password){
        const register = await registerUser(User)
        setLoading(false)
        console.log('register: ', register);
        
      }

    }

    const registerUser = async (userObject) => {
      const registerResponse = await api.registerUser(userObject)

      if (registerResponse.status >= 200 && registerResponse.status < 300) {
        return registerResponse.data;
      }else {
        return null;
      }
    }
      
     

    return (
      <div className=" flex justify-center items-center mt-20 ">
        <div className=" text-black">
          <h1 className=" mb-6 font-bold ">SignUp</h1>
          <p className="mb-12">
            Already have an account? <a href="/login">Sign in</a>
          </p>
          <form  className=" flex flex-col " onSubmit={onSubmitRegistrationForm}>
            <div className=" flex flex-col">
              <label className=" text-left" for="name">
                Username
              </label>
              <input
                className=" mb-4 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="Name"
                name="username"
                type="text"
                placeholder="username"
                value={User.username}
                onChange={handleChange}
              />
            </div>
             <div className="flex flex-col">
            <label className=" text-left" for="phone">
              Phone No
            </label>
            <input
              className=" mb-3 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="create-account-firstname"
              type="number"
              name="phone"
              placeholder="PhoneNo"
                value={User.phone}
                onChange={handleChange}
              />
            </div>

            <div className=" flex flex-col">
              <label className=" text-left" for="email">
                Email
              </label>
              <input
                className=" mb-4 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="create-account-phone"
                type="text"
                name="email"
                placeholder="Email"
                value={User.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-left" for="password">
                Password
              </label>
              <input
                className=" mb-4 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="create-account-email"
                type="text"
                placeholder="Password"
                name="password"
                value={User.password}
                onChange={handleChange}
              />
            </div>
             <div className=" flex flex-col">
              <label className=" text-left" for="name">
                Confirm Password
              </label>
              <input
                className=" mb-4 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="Password"
                name="password2"
                type="text"
                placeholder="confirm password"
                value={User.password2}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
            <div className={loading ? "hidden" : ""}>
            <button
              type="submit"
              disabled={!formValid}
              className={formValid && User.password.length > 3 ? "mb-5 h-14 w-96 bg-blue-600 text-white font-bold hover:bg-blue-700 rounded-xl" : "mb-5 h-14 w-96 bg-gray-500 text-white font-bold hover:cursor-not-allowed rounded-xl"}
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
      </div>
    );
}
export default Signup

