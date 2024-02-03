/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

// Higher Order Component to add loading spinner
const withLoadingSpinner = (WrappedComponent) => {
    return (props) => {
        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState(null);

        useEffect(() => {
            // Simulate an asynchronous data fetching operation
            const fetchData = async () => {
                try {
                    // Assume data is fetched successfully after 2 seconds
                    setTimeout(() => {
                        const fakeData = "This is the fetched data!";
                        setData(fakeData);
                        setLoading(false);
                    }, 2000);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                }
            };
            fetchData();
        }, []);

        // Render the wrapped component with additional props
        return (
            <div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <WrappedComponent data={data} {...props} />
                )}
            </div>
        );
    };
};

// Example of a function-based component that will use the HOC
const MyComponent = ({ data }) => {
    return (
        <div>
            <h1>Data from HOC:</h1>
            <p>{data}</p>
        </div>
    );
};

// Apply the HOC to MyComponent
const MyComponentWithLoadingSpinner = withLoadingSpinner(MyComponent);

// Now use the enhanced component in your application
// <MyComponentWithLoadingSpinner />
export default MyComponentWithLoadingSpinner;
