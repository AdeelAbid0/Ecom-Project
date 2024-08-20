import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartIcon, Search } from "../../Assets/index.jsx";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [active, setActive] = useState("/");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);
  const handleactive = (path) => {
    setActive(path);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("search", search);
      navigate("/search");
    }
  };
  const linkClass = (path) =>
    active === path ? "font-semibold" : "font-normal";
  return (
    <div className="flex items-center justify-between w-full shadow-lg h-24 px-6">
      <div className="flex justify-start">
        <h1>
          <Link
            to={"/"}
            className="text-black text-3xl font-bold ml-6 font-playfair"
            onClick={() => handleactive("/")}
          >
            Ecommerce
          </Link>
        </h1>
      </div>
      <div className="flex justify-center w-[50%]">
        <ul className="flex space-x-10 font-normal text-base text-black font-montserrat ">
          <Link
            to={"/Electronics"}
            className={linkClass("/Electronics")}
            onClick={() => handleactive("/Electronics")}
          >
            Electronics
          </Link>
          <Link
            to={"/MensFashion"}
            className={linkClass("/MensFashion")}
            onClick={() => handleactive("/MensFashion")}
          >
            Mens Fashion
          </Link>
          <Link
            to={"/WomensFashion"}
            className={linkClass("/WomensFashion")}
            onClick={() => handleactive("/WomensFashion")}
          >
            Women's Fashion
          </Link>
          <Link
            to={"/Jewelery"}
            className={linkClass("/Jewelery")}
            onClick={() => handleactive("/Jewelery")}
          >
            Jewelery
          </Link>
        </ul>
      </div>
      <div className="card flex justify-content-center">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="h-10 w-64 border decoration-none rounded-lg pl-4 focus:outline-none pr-10 placeholder-black"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className=" flex items-center w-[8rem] h-12 rounded-lg font-montserrat bg-black hover:opacity-90 text-white justify-center"
          onClick={() => {
            handleactive("/Cart");
            navigate("/Cart");
          }}
        >
          <span className="flex w-full justify-center ">
            {items.length} &nbsp; <CartIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
