import React, { useState, useEffect } from "react";

const url = "http://b8c40s8.143.198.70.30.sslip.io/api";

const API = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/query?playerName=LeBron&season=2023&sortBy=PlayerName&ascending=true&pageNumber=1&pageSize=10"
        );
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

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default API;
