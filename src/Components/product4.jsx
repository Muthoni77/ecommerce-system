 <header class="bg-white">
       <div class="container mx-auto px-4 py-8 flex items-center">
         <div class="mr-auto md:w-48 flex-shrink-0">
             <img src={logo} alt="logo" className="h-8 md:h-10" />
    </div>
     <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
      <select class="bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
        <option>all categories</option>
      </select>
      <input class="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="I'm searching for ..."/>
       <button type="submit" className="">
                  <div className="ml-auto h-5 px-4 text-gray-500">
                    <AiOutlineSearch className="text-[30px] mr-2" />
                  </div>
                </button>
    </div>
     <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
      <BiPhoneCall className="text-[30px] mr-2" />
      <span class="font-bold md:text-xl">8 800 332 65-66</span>
      <span class="font-semibold text-sm text-gray-400">Support 24/7</span>
    </div>
    
    <nav class="contents">
           <ul class="ml-4 xl:w-48 flex items-center justify-end">
 <li className="ml-2 lg:ml-4 relative inline-block">
          <Link to="/cart">
            <div className="relative">
              <FaUserAlt className="text-[24px]" />(
              {props.cartItemNumber})
            </div>
          </Link>
        </li>
        <li className="ml-2 lg:ml-4 relative inline-block">
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