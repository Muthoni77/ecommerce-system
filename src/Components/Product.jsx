import React, { useState } from 'react'
function Product({ product, handleAddToCart }) {
  //const Product = ({ product, handleAddToCart }) =>{
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "Ksh",
  });

  const Items = [
    {
      id: 1,
      name: "Product Name",
      href: "#",
      price: "9.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 2,
      name: "Product Name",
      href: "#",
      price: "10.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 3,
      name: "Product Name",
      href: "#",
      price: "12.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 4,
      name: "Product Name",
      href: "#",
      price: "9.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 5,
      name: "Product Name",
      price: "6.99",
      href: "#",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 6,
      name: "Product Name",
      href: "#",
      price: "10.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 7,
      name: "Product Name",
      href: "#",
      price: "22.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      id: 8,
      name: "Product Name",
      href: "#",
      price: "19.99",
      category: "Laptop",
      imageSrc:
        "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];
   const [products, setProducts] = useState(Items);

  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {Items.map((product) => (
        <a
      
          key={product.id}
          href={product.href}
        >
          <img
            className="hover:grow hover:shadow-lg"
            src={product.imageSrc}
            alt="products"
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="">{product.name}</p>
          </div>
          <p className="pt-1 text-red-700 font-bold">
            {DollarUsd.format(product.price)}
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-gray-300 w-full  rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500 hover:text-white"
          >
            Buy now
          </button>
        </a>
      ))}
    </div>
  );
};

export default Product
// const Header = (props) => (
  
//   <>
//     <header class="bg-white">
//       <div class="container mr-2 px-4 py-8 flex items-center justify-between">
//         <div class=" md:w-48 flex-shrink-0 flex">
//           <h1 className="text-blue-500 font-extrabold text-4xl ">ATELLER</h1>
//           <img src={logo} alt="logo" className="h-10 md:h-12 " />
//         </div>
//         <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center ">
//           <select
//             className="bg-transparent uppercase font-semibold text-sm p-4 mr-4"
//             name=""
//             id=""
//           >
//             <option>all categories</option>
//           </select>
//           <input
//             className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
//             type="text"
//             placeholder="I'm searching for ..."
//           />
//           <button type="submit" className="ml-auto h-5 px-4 text-gray-500">
//             <div className="">
//               <AiOutlineSearch className="text-[30px] mr-2" />
//             </div>
//           </button>
//         </div>
//         <div className="flex flex-row">
//           <div class=" md:w-46 hidden sm:flex flex-col place-items-end">
//             <span class="font-semibold md:text-xl">+254 702 531 281</span>
//             <span class="font-semibold text-sm text-gray-400">
//               Support 24/7
//             </span>
//           </div>

//           <nav>
//             <ul className="ml-4 xl:w-48 flex items-center  ">
//               <li className="ml-4  lg:ml-4 relative inline-block j flex">
//                 <Link to="">
//                   <div>
//                   <div className="relative">
//                     <BiUser className="text-[24px]" />
//                   </div>
//                   <div>
//                     <select className="bg-transparent uppercase font-semibold text-sm  mr-2">
//                       <option value="sign up">
//                       <Link to="/login">Sign In</Link>
//                       </option>

//                       <option value="vegetable">  <Link to="/checkout">My orders</Link></option>

//                       <option value="meat">  <Link to="/profile">My account</Link></option>
//                     </select>
//                   </div></div>
//                 </Link>
//               </li>
//               <li className="ml-4 lg:ml-4 relative inline-block">
//                 <Link to="/cart">
//                   <div className="relative">
//                     <AiOutlineShoppingCart className="text-[32px]" />(
//                     {props.cartItemNumber})
//                   </div>
//                 </Link>
//               </li>
//               {/* <li>
//               <Link to="/">Home</Link>
//             </li> */}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>

//     <Outlet />
//   </>