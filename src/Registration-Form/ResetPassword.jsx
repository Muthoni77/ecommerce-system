
import { useState } from "react";

function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className=" w-full h-full flex justify-center items-center p-8">
      <div className=" w-2/4 text-black">
        <h1 className=" mb-12 font-bold " style={{ width: "50%" }}>
          Reset Password
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
            <input
              type={"submit"}
              value="Reset Password"
              className=" mb-5 h-14 w-96 bg-red-300 rounded-xl"
            />
           </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword