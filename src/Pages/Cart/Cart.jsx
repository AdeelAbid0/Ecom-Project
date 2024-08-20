import React from "react";
import { useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { useDispatch } from "react-redux";
import { Column } from "primereact/column";
import { add, decreaseQuantity } from "../../store/cartSlice";
import { remove } from "../../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  console.log("products", products);
  const dispatch = useDispatch();
  const image = (rowData) => {
    return (
      <img
        src={rowData.image}
        alt={rowData.name}
        className="w-[60px] h-[60px]"
      />
    );
  };
  const priceTemplate = (rowData) => {
    const totalPrice = rowData.price * rowData.quantity;
    return `$${totalPrice.toFixed(2)}`;
  };
  const handleAdd = (item) => {
    dispatch(add(item));
  };
  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };
  const getTotalPrice = () => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const quantityTemplate = (rowData) => {
    return (
      <>
        <div>
          <span>
            <button
              className="w-2 bg-black rounded-md text-white"
              onClick={() => handleDecrease(rowData)}
            >
              -
            </button>
            <span> </span>
            {rowData.quantity}
            <span> </span>
            <button
              className="w-2 bg-black rounded-md text-white"
              onClick={() => handleAdd(rowData)}
            >
              +
            </button>
          </span>
        </div>
      </>
    );
  };
  const deleteTemplate = (rowData) => {
    return (
      <button
        className="w-2 rounded text-red-500"
        onClick={() => handleRemove(rowData)}
      >
        <i className="pi pi-trash"></i>
      </button>
    );
  };

  return (
    <>
      <div className="flex ml-16 mt-16 font-montserrat h-[0.5rem]">
        <h1 className="font-semibold text-2xl">Your Cart</h1>
      </div>
      <div className="flex flex-wrap justify-evenly mt-8 w-full min-h-screen ">
        <div className="card">
          <DataTable
            value={products}
            className="min-w-[55rem]"
            rowClassName={() => "rounded-2xl border border-gray-200"}
          >
            <Column
              body={image}
              header=""
              headerClassName="bg-transparent"
            ></Column>
            <Column
              field="category"
              header="Name"
              className="font-montserrat font-medium text-base text-black capitalize "
              headerClassName="text-[#8B8B8B] font-medium font-montserrat bg-transparent"
            ></Column>
            <Column
              header="Price"
              body={priceTemplate}
              className="font-medium font-poppins text-base text-black "
              headerClassName="text-[#8B8B8B] font-medium font-montserrat bg-transparent"
            ></Column>
            <Column
              body={quantityTemplate}
              header="Quantity"
              headerClassName="text-[#8B8B8B] font-medium font-montserrat bg-transparent"
            ></Column>
            <Column
              body={deleteTemplate}
              header="Delete"
              headerClassName="text-[#8B8B8B] font-medium font-montserrat bg-transparent"
            ></Column>
          </DataTable>
        </div>
        <div className="flex flex-col justify-start mt-3 rounded-lg bg-white shadow-2xl w-[20%] h-[100%] font-Inter">
          <h1 className="flex w-full items-center h-[2rem] font-semibold m-4 ">
            Your Total
          </h1>
          <div className="flex flex-row justify-between w-full mt-4">
            <h1 className="ml-4 font-medium text-base">
              Total Products X {products.length}
            </h1>
            <h1 className="mr-4 font-medium text-base">
              $ {getTotalPrice().toFixed(2)}{" "}
            </h1>
          </div>
          <div className="flex-grow"></div>
          <div className="flex justify-between mb-4 w-full mt-8">
            <h1 className="ml-4 font-medium text-lg">Total</h1>
            <h1 className="mr-4 font-medium text-lg">
              {" "}
              $ {getTotalPrice().toFixed(2)}
            </h1>
          </div>
          <div className="flex justify-center mb-4">
            <button className=" flex w-[90%] h-[3rem] rounded-xl justify-center items-center font-montserrat bg-black hover:opacity-90 text-white font-bold text-sm">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
