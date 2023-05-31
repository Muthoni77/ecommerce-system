import React, { useState } from "react";
import { createContext } from "react";
import Login from "./Login";
const RecoveryContext = createContext();
function Navigate() {
     const [page, setPage] = useState("login");
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();
return (
<div>
    <Login/>
</div>
)
}
export default Navigate;