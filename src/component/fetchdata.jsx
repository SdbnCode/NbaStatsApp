import { useState, useEffect } from "react";

const useFetchData = (initialQuery) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(initialQuery);

  // Function to fetch data
  const fetchData = async (query) => {
    setLoading(true);
    setError(null);

    //Headers for API request
    const myHeaders = new Headers();
    const url = "https://www.nbaapi.com/graphql/";
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ query }),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when URL changes
  useEffect(() => {
    if (query) {
      fetchData(query);
    }
  }, [query]);

  // Return state and function to update URL
  return { data, loading, error, setQuery };
};

export default useFetchData;
