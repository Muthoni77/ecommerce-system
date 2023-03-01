import { useState } from "react"

function Login() {
    const [email,  setEmail] = useState("");
    const [password,  setPassword] = useState("");
    
 
 
    return (
    <div className='row m-0 p-5 ' > 
        <form className='col-sm-5 mx-auto border'>
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
  </form></div>
  )
}

export default Login