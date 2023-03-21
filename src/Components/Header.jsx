import React from "react";
import logo from "../assets/logo2.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
const Header = (props) => (
  <>
    <header class="bg-white">
      <div class="container mx-auto px-4 py-8 flex items-center">
        <div class="mr-auto md:w-48 flex-shrink-0 flex">
          <h1 className="text-blue-500 font-extrabold text-4xl ">ATELLER</h1>
          <img src={logo} alt="logo" className="h-10 md:h-12 " />
        </div>
        <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select
            class="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
          >
            <option>all categories</option>
          </select>
          <input
            class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
          <button type="submit" className="ml-auto h-5 px-4 text-gray-500">
            <div className="">
              <AiOutlineSearch className="text-[30px] mr-2" />
            </div>
          </button>
        </div>
        <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span class="font-bold md:text-xl">8 800 332 65-66</span>
          <span class="font-semibold text-sm text-gray-400">Support 24/7</span>
        </div>

        <nav>
          <ul className="ml-4 xl:w-48 flex items-center  justify-end ">
            <li className="ml-5 lg:ml-4 relative inline-block j">
              <Link to="/sign">
                <div className="relative">
                  <FaUserAlt className="text-[24px]" />
                  <button className="">Accounts </button>
                  
                    <div id="myDropdown" class="dropdown-content">
                      <a href="#home">Home</a>
                      <a href="#about">About</a>
                      <a href="#contact">Contact</a>
                    </div>
                  
                </div>
              </Link>
            </li>
            <li className="ml-5 lg:ml-4 relative inline-block">
              <Link to="/cart">
                <div className="relative">
                  <AiOutlineShoppingCart className="text-[24px]" />(
                  {props.cartItemNumber})
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <Outlet />
  </>
);

      

export default Header;
