import { useState } from "react";

function NewPassword() {

  const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className=" w-full h-full flex justify-center items-center p-8">
      <div className=" w-2/4 text-black">
        <h1 className=" mb-12 font-bold " style={{ width: "50%" }}>
          Write your new Password
        </h1>
        <form className=" flex flex-col">
          <div className="flex flex-col">
            <label className=" text-left" for="password">
             New Password
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
          <div className=" flex flex-col">
            <label className=" text-left" for="confirmPassword">
              Confirm Pssword
            </label>
            <input
              className=" mb-5 h-14 w-96 rounded-xl border-[1px] border-gray-400 px-4"
              id="ConfirmPassword"
              type="text"
              placeholder="ConfirmPsaaword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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

export default NewPassword;
