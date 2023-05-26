import { useState } from "react"
import axios from "axios";


const Signup = () => {
  const [User , setUser] = useState({
    username:"",
    phone:"",
    email:"",
    password:"",
    password2:""
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


  // const handleChange = (event) => {
  //   //     alert("hello");
  //   // console.log("value set is ");
  //   // console.log({ valueOne: event.target.name });
  //   // console.log({ valueTwo: event.target.value });
  //   setUser({ ...User, [event.target.name]: event.target.value });
  // };
 

    const register = (event)=>{
      // const register = (event) => {
    event.preventDefault();
      const {username, phone ,email,password} = User
      if (username && phone && email && password){
      axios.post(" http://localhost:7001/api/user/register",User )
      
      //  .then(res=>console.log(res))
          // .then(res=>{alert(res.data.message)})
          .then(res=>alert(res.data.message)).catch((err)=>
    console.error(err))
      //  console.log("User");
      //   console.log(User);
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

