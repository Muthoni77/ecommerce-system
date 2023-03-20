import React from 'react'
import logo from '../assets/logo.png'
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
const Header = props => (
  
    <>
      <nav className="container mx-auto  flex items-center justify-between  py-1 text-white px-2">
        <img src={logo} alt="logo" className="w-16 h-16 " />
        <ul className="flex items-center">
          <li>
            <div className="flex items-center mr-2">
              <BiPhoneCall className="text-[30px] mr-2" />
              <div>
                <p>Call to buy</p>
                <p>1900999</p>
              </div>
            </div>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="relative">
                <AiOutlineShoppingCart className="text-[24px]" />(
                {props.cartItemNumber})
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );


export default Header;

