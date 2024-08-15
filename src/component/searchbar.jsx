import React, { useState } from "react";
import YearList from "../component/yearList";
import SearchButton from "./searchButton";
import fetchData from "./fetchdata";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [year, setYear] = useState("");

  const { data, loading, error, setUrl } = fetchData("");

  //Set the url to the api
  const handleSearch = () => {
    if (!input || !year) {
      return alert("Please enter a player name and year");
    }
    const url = `http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/query?playerName=${input}&season=${year}`;
    setUrl(url);
  };

  return (
    <div>
      <div className="my-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          autoComplete="name"
          placeholder="Search..."
          className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
        />
        <YearList setYear={setYear} />
      </div>
      <SearchButton onClick={handleSearch} />
      {loading && <p>Loading...</p>}
      {!loading && error && <p className="text-red-500">Error: {error}</p>}
      {!loading && !error && data && data.length > 0 && (
        <div>
          <h1>Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
