import React from "react";
import { NavLink } from "react-router-dom";
import API from "../component/api";
import YearList from "../component/yearList";

class ComparePlayer extends React.Component {
  render() {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center gap-4 py-4 w-auto">
          <div>
            <input
              id=""
              name="player"
              type="name"
              required
              autoComplete="name"
              placeholder="player name"
              className="block w-auto rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
            />
            <div className="flex justify-center gap-4 py-4 w-auto">
              <YearList />
            </div>
          </div>
          <div>
            <input
              id=""
              name="player"
              type="name"
              required
              autoComplete="name"
              placeholder="player name"
              className="block w-auto rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
            />
            <div className="flex justify-center gap-4 py-4 w-auto">
              <YearList />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        >
          Search
        </button>
        <p className="text-center">
          Currently our data is only accurate between the years of 1993 to 2024
        </p>
      </div>
    );
  }
}

export default ComparePlayer;
