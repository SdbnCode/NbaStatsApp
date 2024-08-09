import React, { useState } from "react";
import YearList from "../component/yearList";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/query?playerName=${input}&season=${year}`
      );
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      console.log(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        autoComplete="name"
        placeholder="Search..."
        className="block w-auto rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
      />
      <div className="flex justify-center gap-4 py-4 w-auto">
        <YearList setYear={setYear} />
      </div>
      <button
        onClick={fetchData}
        className="block w-32 rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
      >
        Search
      </button>
      {data && (
        <div>
          <h1>Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
