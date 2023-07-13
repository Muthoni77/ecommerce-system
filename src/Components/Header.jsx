import React, {useState,useEffect} from "react";
import logo from "../assets/logo2.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import axios from "axios"

const Header = ({onChangeCategory,cartItemNumber}) => {
  const [categories,setCategories]= useState([])


  
  const fetchCategories=async()=>{
      const response=await axios.get("http://localhost:20090/api/category/");
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
    <header className="bg-white ">
      <div className="container mr-2 px-4 py-8 flex items-center justify-between">
     
        <a href= "/" className=" md:w-48 flex-shrink-0 flex ">
          {/* <button onClick={()}className="text-blue-500 font-extrabold text-4xl"> ATELLER</button> */}
      <h1 className="text-blue-500 font-extrabold text-4xl hover:no-underline">ATELLER</h1>
          <img src={logo} alt="logo" className="h-10 md:h-12 " />
        </a>
        
        <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center ">
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
          <button type="submit" className="ml-auto h-5 px-4 text-gray-500">
            <div className="">
              <AiOutlineSearch className="text-[30px] mr-2" />
            </div>
          </button>
        </div>
        <div className="flex flex-row">
          <div class=" md:w-46 hidden sm:flex flex-col place-items-end">
            <span class="font-semibold md:text-xl">+254 702 531 281</span>
            <span class="font-semibold text-sm text-gray-400">
              Support 24/7
            </span>
          </div>

          <nav>
            <ul className="ml-4 xl:w-48 flex items-center  ">
              <li className="ml-4  lg:ml-4 relative inline-block j flex">
                {/* Dropdown menu */}
                <Link to="">
                  <div className="">
                  <div className="relative">
                    <BiUser className="text-[26px]" />
                  </div> 
                  <button onClick={toggleMenu} className="bg-transparent uppercase font-semibold text-sm  mr-2">
          <span>User</span>
        </button>
        {console.log(open)}
        <nav
          
          className={`menu ${open ? "active" : "inactive"}`}
        >
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
                    <AiOutlineShoppingCart className="text-[32px]" />(
                    {cartItemNumber})
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
    </header>

    <Outlet />
  </div>
  )
};

export default Header;
