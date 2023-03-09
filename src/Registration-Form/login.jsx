import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" w-full h-full flex justify-center items-center p-8">
      <div className=" w-2/4 text-black">
        <h1 className=" mb-12 font-bold " style={{ width: "50%" }}>
          Login
        </h1>
        <form className=" flex flex-col">
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
              value="Sign in"
              className=" mb-5 h-14 w-96 bg-red-300 rounded-xl"
            />
            <input
              type={"submit"}
              value="Sign up"
              className="h-14 w-96 border-red-300 border-[1px] rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
