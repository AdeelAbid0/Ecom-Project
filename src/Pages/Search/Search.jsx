import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
const Search = () => {
  const search = localStorage.getItem("search") || ""; // Default to an empty string if null
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    };
    getAllProducts();
  }, [data]);

  const filter = data.filter(
    (item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item?.description?.toLowerCase().includes(search.toLowerCase()) ||
      item?.category?.toLowerCase().includes(search.toLowerCase())
  );

  if (filter.length === 0) {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-gray-100">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg
              className="w-24 h-24 animate-spin text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h2l-3 3-3-3h2a8 8 0 010-2z"
              ></path>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            No Product Found
          </h1>
          <p className="text-lg text-gray-600">
            Try adjusting your search criteria or browse our other products.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  return (
    <div className="flex flex-wrap w-full justify-center font-montserrat">
      {filter.length > 0 &&
        filter.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border w-[18rem] m-4 p-4 space-y-4 shadow-lg rounded-xl cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded w-[17rem] h-[16rem] border"
              onClick={() => handleClick(item.id)}
            />
            <h1 className="text-start font-bold truncate">{item.title}</h1>
            <h1 className="font-normal">{item.category}</h1>
            <h3 className="line-clamp-3 font-medium">{item.description}</h3>
            <br />
            <h1>
              Price <span className="font-semibold"> ${item.price}</span>
            </h1>
            <div className="flex justify-center">
              <button
                onClick={() => handleAdd(item)}
                className="rounded w-full h-[56px] bg-black hover:opacity-90 text-white flex justify-center items-center"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Search;
