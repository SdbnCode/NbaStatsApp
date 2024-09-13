import React from "react";
import SearchBar from "../component/searchbar";
import BarChart from "../component/chart";

class ComparePlayer extends React.Component {
  render() {
    return (
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" flex justify-center gap-8 mt-10">
          <SearchBar />
          <SearchBar />
        </div>
        <p className="text-center mt-10">
          Currently our data is only accurate between the years of 1993 to 2024
        </p>
      </div>
    );
  }
}

export default ComparePlayer;
