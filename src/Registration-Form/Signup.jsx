import { useState } from "react"

function  Signup() {
    const [firstname,  setFirstname] = useState("");
     const [lastname, setLastname] = useState("");
    const [email,  setEmail] = useState("");
    const [password,  setPassword] = useState("");
    
    
 
 
    return (
      <div className=" w-full h-full flex justify-center items-center p-8">
        <div className=" w-2/4 text-black">
          <h1 className=" mb-12 font-bold " style={{ width: "50%" }}>
            SignUp
          </h1>
          <form className=" flex flex-col">
            <div className=" flex flex-col">
              <label className=" text-left" for="firstName">
                FirstName
              </label>
              <input
                className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="Firstname"
                type="text"
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className=" flex flex-col">
              <label className=" text-left" for="lastName">
                LastNname
              </label>
              <input
                className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
                id="Lastname"
                type="text"
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </div>

            <div className=" flex flex-col">
              <label className=" text-left" for="email">
                Email
              </label>
              <input
                className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
                className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
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
                className=" mb-5 h-14 w-96 bg-red-300 rounded-xl"
              />
             
            </div>
          </form>
        </div>{" "}
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
