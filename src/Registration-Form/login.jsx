import { useState } from "react"
import logo from "../image1.jpg"


function Login() {
    const [email,  setEmail] = useState("");
    const [password,  setPassword] = useState("");
    
 
 
    return (
     
<div className="container">
    <div className='row ' >
      <div className="col-12">
        <h1 id="form_heading"className=""> Welcome back!</h1>
        <p>Please enter your details</p>
      </div> 

     
  {/* end of column 1 */}
 
  <div class="col-md-6"> 
  <img src={logo} className="login-image" alt="image" width="100%"/>
  </div>  
   <div class="col-md-6 ">
        <form className='col'>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
     
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>{
setEmail(e.target.value)
      }}/>
    
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
   
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
     
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange ={(e)=>{
        setPassword(e.target.value)
      }}/>
    </div>
    <div className="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form> </div>

  </div>
  </div>



     
  )
}

export default Login