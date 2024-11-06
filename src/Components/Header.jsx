import React, {useState,useEffect} from "react";
import logo from "../assets/logo2.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import axios from "axios"

const Header = ({onChangeCategory,cartItemNumber, currentPage, path}) => {
  const [categories,setCategories]= useState([])


  
  const fetchCategories=async()=>{
      const response=await axios.get("https://eccomerce-backend-production.up.railway.app/api/category");
      console.log("all categories from response");
      console.log(response.data.data);
      setCategories(response.data.data);
  }
  

useEffect(()=>{
  fetchCategories();
  
},[])
 
  const [open,SetOpen] = useState(false)
  // const onClick = () => setIsActive(!isActive);
  const toggleMenu = ()=>SetOpen(!open)
  

  
  return(
  <div>
    <header className="bg-white border-b py-4">
      <div className="container px-2 flex items-center justify-between mx-auto">
     
        <a href= "/" className=" flex-shrink-0 flex ">
          {/* <button onClick={()}className="text-blue-500 font-extrabold text-4xl"> ATELLER</button> */}
          <img src={logo} alt="logo" className="h-4 md:h-8 pb-1 " />
          <h1 className="text-blue-500 ml-2 font-extrabold text-xl hover:no-underline">ATELLER</h1>
        </a>
        
        <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md h-10 hidden xl:flex items-center ">
          <select
            className="bg-transparent uppercase font-semibold text-sm p-4 mr-4"
            name=""
            id=""
            onChange={(e)=>{          
              onChangeCategory(e.target.value)
            }}
          
          >

           
             <option value={"all"}>All</option>
        {categories?.map((category)=><option value={category._id}>{category.name}</option>)}
            
          </select>
          
      
          <input
            className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
            type="text"
            placeholder="I'm searching for ..."
          />
          <button type="submit" className="ml-auto px-4 text-gray-500">
            <div className="">
              <AiOutlineSearch className="text-[12px] mr-2" />
            </div>
          </button>
        </div>
        <div className="flex flex-row">
          <div class=" md:w-46 hidden sm:flex flex-col place-items-end">
            <span class="font-semibold text-gray-700 md:text-sm">+254 702 531 281</span>
            <span class="font-semibold text-sm text-gray-500">
              Support 24/7
            </span>
          </div>

          <nav>
            <ul className="ml-4 xl:w-48 flex items-center  ">
              <li className="ml-4  lg:ml-4 relative inline-block j flex">
                {/* Dropdown menu */}
                <Link to="">
                  <div className="">
                  <div className="relative pb-6 hover:font-bold hover:cursor-pointer hover:text-blue-400" onClick={toggleMenu}>
                    <BiUser className="text-[24px]" />
                  </div>
                  <nav className={`menu ${open ? "active" : "inactive"}`} >
          {
            open &&
            <div className="w-27 h-27 bg-gray-100">
          <ul>
            <li>
            <Link to="/login">Sign In</Link>
            </li>
            <li>
            <Link to="/checkout">My orders</Link>
            </li>
            <li>
            <Link to="/profile">My account</Link>
            </li>
          </ul>
          </div>
          }
        </nav>
                  
                  {/* <div>
                    <select className="bg-transparent uppercase font-semibold text-sm  mr-2">
                      <option value="sign up">
                      <Link to="/login">Sign In</Link>
                      </option>

                      <option value="vegetable">  <Link to="/checkout">My orders</Link></option>

                      <option value="meat">  <Link to="/profile">My account</Link></option>
                    </select>
                  </div> */}
                  </div>
                </Link>
              </li>
              <li className="ml-4 lg:ml-4 relative inline-block">
                <Link to="/cart">
                  <div className="relative">
                    <AiOutlineShoppingCart className="text-[24px]" />
                    <span className="text-xs font-bold text-gray-600">{cartItemNumber}</span>
                  </div>
                </Link>
              </li>
              {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            </ul>
          </nav>
        </div>
      </div>
      <div className = "flex mx-12 mt-4 text-gray-400 font-bold text-sm">
      <AiFillHome className="text-[12px] mt-1 mr-2" />
         <Link to="/">Home</Link>
         <span className="mr-2 ml-2" hidden={currentPage === 'home' ? true : false}>&#62;</span>
        <Link to={path} hidden={currentPage === 'home' ? true : false}>{currentPage}</Link>
      </div>
    </header>

    <Outlet />
  </div>
  )
};

export default Header;
