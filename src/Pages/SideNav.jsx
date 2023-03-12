import React, { useState } from "react";

function SideNav() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

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
          <img
            src="./src/assets/logo.jpg"
            alt="logo"
            className={`cursor-pointer duration-500 w-7 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-500 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img
                src={`./src/assets/${Menu.src}.png`}
                alt="icons"
                className={`w-7`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-screen ">
        <h1> Homepage</h1>
      </div>
    </div>
  );
}

export default SideNav;
