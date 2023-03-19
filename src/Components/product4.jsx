// import React from 'react'

// function product4() {
//   return (
//     <div>product4</div>
//   )
// }

// export default product4
import React from "react";
const Product = ({ product, handleAddToCart }) => {
  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "Ksh",
  });
  const products = [
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

  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <a
          handleAddToCart={handleAddToCart}
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

export default Product;