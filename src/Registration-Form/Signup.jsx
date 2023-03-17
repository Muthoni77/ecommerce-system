import { useState } from "react"

function  Signup() {
    const [username,  setUsername] = useState("");
     const [phoneNo, setPhoneNo] = useState("");
    const [email,  setEmail] = useState("");
    const [password,  setPassword] = useState("");
    
    
 
 
    return (
      <div className=" flex justify-center items-center mt-20 ">
        <div className=" text-black">
          <h1 className=" mb-6 font-bold ">SignUp</h1>
          <p className="mb-12">
            Already have an account? <a href="#!">Sign in</a>
          </p>
          <form className=" flex flex-col">
            <div className=" flex flex-col">
              <label className=" text-left" for="userName">
                Username
              </label>
              <input
                className=" mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="userName"
                type="text"
                placeholder="userName"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
             <div className="flex flex-col">
            <label className=" text-left" for="phoneNo">
              Phone No
            </label>
            <input
              className=" mb-3 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="phone no"
              type="number"
              placeholder="PhoneNo"
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
            </div>

            <div className=" flex flex-col">
              <label className=" text-left" for="email">
                Email
              </label>
              <input
                className=" mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="Email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-left" for="password">
                Password
              </label>
              <input
                className=" mb-4 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="password"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col">
              <input
                type={"submit"}
                value="Sign up"
                className=" mb-5 h-14 w-96 bg-blue-300 rounded-xl"
              />
            </div>
          </form>
        </div>
      </div>
    );
}

export default Signup

// div class="col-md-6"> 
//   {/* <img src={logo} className="login-image" alt="image" width="100%"/> */}
//   </div>  
//    <div class="col-md-6 ">
//         <form className='col'>
//     <div className="form-group">
//       <label for="exampleInputEmail1">Email address</label>
     
//       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>{
// setEmail(e.target.value)
//       }}/>
    
//       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//     </div>
   
//     <div className="form-group">
//       <label for="exampleInputPassword1">Password</label>
     
//       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange ={(e)=>{
//         setPassword(e.target.value)
//       }}/>
//     </div>
//     <div className="form-check">
//       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//       <label class="form-check-label" for="exampleCheck1">Check me out</label>
//     </div>
    
//     <button type="submit" class="btn btn-primary">Submit</button>
//   </form> </div>

//   </div>
//   </div>
