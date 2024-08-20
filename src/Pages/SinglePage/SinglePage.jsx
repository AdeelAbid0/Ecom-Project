import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getAllProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getAllProducts();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex flex-wrap w-full text-white mt-24 mb-6 pl-48">
            <Link
              className="font-medium text-xl text-black"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Link>
          </div>
          <div className="flex flex-wrap w-full justify-center flex-row mb-24 font-montserrat ">
            <div className="  shadow-md">
              <img
                src={data?.image}
                alt="image"
                className="rounded-xl w-[25rem] h-[29rem] border shadow-lg"
              />
            </div>
            <div className="flex flex-col w-[35rem] pl-20 space-y-2  rounded-xl">
              <h1 className="text-start font-bold text-3xl ">{data?.title}</h1>
              <br />
              <h1 className="font-normal text-[#8888] text-sm">Category</h1>
              <h1 className="font-semibold text-base ">{data?.category}</h1>
              <br />
              <h1 className="font-normal text-[#8888] text-sm">Description:</h1>

              <h3 className=" line-clamp-3 font-normal ">
                {data?.description}
              </h3>
              <br />
              <h1 className="text-black text-base">Price</h1>
              <span className="font-bold text-3xl"> ${data?.price}</span>
              <div className="flex justify-center">
                <button className="rounded-xl mt-2 w-full h-[56px] bg-black hover:opacity-90 text-white flex justify-center items-center">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePage;
