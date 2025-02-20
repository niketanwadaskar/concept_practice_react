import { useState } from "react";

function useAPI() {
  const [data, setData] = useState({
    status: false,
    loading: false,
    error: null,
    data: null,
  });

  // Make callAPI async to use await
  async function callAPI({ url, method, payload, header }) {
    // Set loading to true at the start of the API call
    setData((prev) => ({ ...prev, loading: true }));

    try {
      const options = {
        method: method,
        body: payload && JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          ...header,
        },
      };

      const res = await fetch(url, options);
      const result = await res.json(); // Wait for the result of JSON parsing

      if (res.ok) {
        // On success, store data
        setData((prev) => ({
          ...prev,
          data: result,
          loading: false,
          status: true,
        }));
      } else {
        // On failure, store error message
        setData((prev) => ({
          ...prev,
          error: result,
          loading: false,
          status: false,
        }));
      }
    } catch (e) {
      // Handle error if there's an exception
      setData((prev) => ({
        ...prev,
        error: e,
        loading: false,
        status: false,
      }));
    }
  }

  return { callAPI, data };
}

export default useAPI;
