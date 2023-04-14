import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

        <form className=" flex flex-col">
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
          <div className="flex flex-col ">
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
          <div className="mb-4">
            <a href="#!">Forgot your password?</a>
          </div>

          <div className="flex flex-col">
            <input
              type={"submit"}
              value="Sign in "
              className=" mb-5 h-14 w-96 bg-blue-300 rounded-xl"
            />
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
