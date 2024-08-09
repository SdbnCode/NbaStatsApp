import React from "react";
import { NavLink } from "react-router-dom";
import API from "../component/api";
import YearList from "../component/yearList";
import SearchBar from "../component/searchbar";
class ComparePlayer extends React.Component {
  render() {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center gap-4 py-4 w-auto">
          <SearchBar />
          <SearchBar />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="block w-32 rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            Search
          </button>
        </div>
        <p className="text-center">
          Currently our data is only accurate between the years of 1993 to 2024
        </p>
      </div>
    );
  }
}

export default ComparePlayer;
