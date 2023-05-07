import { useState } from "react"
import axios from "axios";


const Signup = () => {
  const [User , setUser] = useState({
    name:"",
    phone:"",
    email:"",
    password:""
  })

  // const handleChange = e =>{
  //   const {name,value} = e.target
  //   setUser({
  //   ...User,//spread operator 
  //   [name]:value
  //   })
  //   }
  const handleChange = (event) => { 
    setUser({ ...User, [event.target.name]: event.target.value });
  };

    const register = ()=>{
      const {name, phone ,email,password} = User
      if (name && phone && email && password){
       axios.post("http://localhost:7001/Register",User )
       .then(res=>console.log(res))
      }
      else{
          alert("invalid input")
      };
    }
  
    return (
      <div className=" flex justify-center items-center mt-20 ">
        <div className=" text-black">
          <h1 className=" mb-6 font-bold ">SignUp</h1>
          <p className="mb-12">
            Already have an account? <a href="/login">Sign in</a>
          </p>
          <form  className=" flex flex-col ">
            <div className=" flex flex-col">
              <label className=" text-left" for="name">
                FullName
              </label>
              <input
                className=" mb-4 h-10 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="Name"
                name="name"
                type="text"
                placeholder="FullName"
                value={User.name}
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
                defaultvalue={User.email}
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
            <div className="flex flex-col">
              <button
                type="submit"
                className=" mb-5 h-10 w-36 bg-blue-300 rounded-xl ml-32"
                onClick={register}
                > Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Signup

