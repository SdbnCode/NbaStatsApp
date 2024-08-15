import React from "react";

const SearchButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="block w-32 rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
