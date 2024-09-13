import React, { useState } from "react";
import YearList from "../component/yearList";
import SearchButton from "./searchButton";
import useFetchData from "./fetchdata";
import BarChart from "../component/chart";

export const SearchBar = () => {
  const [inputPlayer1, setInputPlayer1] = useState("");
  const [inputPlayer2, setInputPlayer2] = useState("");
  const [yearPlayer1, setYearPlayer1] = useState("");
  const [yearPlayer2, setYearPlayer2] = useState("");

  const {
    data: data1,
    loading: loading1,
    error: error1,
    setUrl: setUrl1,
  } = useFetchData("");

  const {
    data: data2,
    loading: loading2,
    error: error2,
    setUrl: setUrl2,
  } = useFetchData("");

  // Set the URL to the API endpoint being the players name and year
  const handleSearch = () => {
    //If there is no name search or year search, alert the user
    if (!inputPlayer1 || !inputPlayer2 || !yearPlayer1 || !yearPlayer2) {
      return alert("Please enter a player name and year");
    }

    //Set the url for player 1
    const url = `http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/query?playerName=${inputPlayer1}&season=${yearPlayer1}`;
    setUrl1(url);

    //Set the url for player 2
    if (inputPlayer2) {
      const url2 = `http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/query?playerName=${inputPlayer2}&season=${yearPlayer2}`;
      setUrl2(url2);
    }
  };

  return (
    <div className="p-2">
      <form>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="player1"
            value={inputPlayer1}
            onChange={(e) => setInputPlayer1(e.target.value)}
            required
            autoComplete="on"
            placeholder="Enter a Name"
            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
          <input
            type="text"
            name="player2"
            value={inputPlayer2}
            onChange={(e) => setInputPlayer2(e.target.value)}
            required
            autoComplete="on"
            placeholder="Enter a Name"
            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
          />
          <YearList setYear={setYearPlayer1} />
          <YearList setYear={setYearPlayer2} />
        </div>
      </form>

      <div className="flex justify-center">
        <SearchButton onClick={handleSearch} />
      </div>

      {(loading1 || loading2) && <p>Loading...</p>}
      {!loading1 && error1 && <p className="text-red-500">{error1}</p>}
      {!loading2 && error2 && <p className="text-red-500">{error2}</p>}
      {!loading1 && !loading2 && !error1 && !error2 && data1 && (
        <div className="mt-6">
          <BarChart data1={data1} data2={data2} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
