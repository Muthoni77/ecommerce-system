import React, { useState } from "react";

function SideNav() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300  h-screen p-5 pt-8 bg-dark-purple relative `}
      >
        <img
          src="https://icons.veryicon.com/png/o/healthcate-medical/medical-health-1/quality-control.png"
          alt="control"
          className={`absolute cursor-pointer rounded-full
        -right-3 top-9  w-7  border-2 border-dark-purple  ${
          !open && "rotate-180"
        }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4  items-center">
          <div>
            <img
              src="https://images-platform.99static.com//4tpaWvCabuH2M9wrBBP8A6ijLOs=/61x1566:1437x2942/fit-in/500x500/projects-files/52/5212/521297/6f8a4b28-faed-4b1b-b21a-4f1274d8f1f3.jpg"
              alt="logo"
              className={`cursor-pointer duration-500 w-7`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-500`}
            >
              Designer
            </h1>
          </div>
        </div>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen ">
        <h1> Homepage</h1>
      </div>
    </div>
  );
}

export default SideNav;
