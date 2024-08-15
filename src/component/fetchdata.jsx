import { useState, useEffect } from "react";

const useFetchData = (initialUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  // Function to fetch data
  const fetchData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch data when URL changes
  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  // Return state and function to update URL
  return { data, loading, error, setUrl };
};

export default useFetchData;
