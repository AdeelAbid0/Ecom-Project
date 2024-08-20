import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
const MensFashion = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const getAllProducts = async () => {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    getAllProducts();
  }, []);
  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap w-full justify-starts font-montserrat">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border w-[18rem] m-4 p-4 space-y-4 shadow-lg rounded-xl cursor-pointer"
            >
              <img
                src={item?.image}
                alt="image"
                className="rounded w-[17rem] h-[16rem] border"
                onClick={() => {
                  handleNavigate(item?.id);
                }}
              />
              <h1 className="text-start font-bold truncate">{item?.title}</h1>
              <h1 className="font-normal">{item?.category}</h1>
              <h3 className=" line-clamp-3 font-medium ">{item.description}</h3>
              <br />
              <h1>
                Price <span className="font-semibold"> ${item?.price}</span>
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
      )}
    </>
  );
};

export default MensFashion;
