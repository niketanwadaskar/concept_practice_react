import React, { useEffect, useState } from "react";
import useAPI from "./useFetchAPI";

export default function FetchAPI() {
  const [vals, setVals] = useState(null);
  const { callAPI, data } = useAPI();

  // Define the async function to fetch data
  async function getData() {
    try {
      // Call the API with required parameters
      await callAPI({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        method: "GET",
        payload: null, // No payload needed for GET request
        header: {}, // You can pass headers if necessary
      });
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    getData();
  }, []);

  // Use data from the custom hook
  useEffect(() => {
    if (data.status && data.data) {
      setVals(data.data); // Set the response data to the state
    }
  }, [data]); // This useEffect runs when `data` changes

  // Display loading, error, or data
  if (data.loading) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  return (
    <div>
      {vals ? (
        <div>
          <h1>Data fetched:</h1>
          <pre>{JSON.stringify(vals, null, 2)}</pre>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}
