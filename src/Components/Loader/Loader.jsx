import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center mb-4 h-[80vh] items-center">
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
  );
};

export default Loader;
