import React, { useEffect, useState } from "react";

function GetRating({ getRating }) {
  const [data, setData] = useState([true, true, false, false, false]);

  function handleClick(index) {
    const updatedData = data.map((elem, i) => index >= i);
    setData(updatedData);
  }
  useEffect(() => {
    const count = data.reduce(
      (accumulator, currentValue) => currentValue && ++accumulator,
      0
    );
    getRating(count);
  }, [data, getRating]);

  return (
    <div className="flex justify-center w-full items-center">
      {data.map((isOn, index) => (
        <div key={index} onClick={() => handleClick(index)}>
          <Star isOn={isOn} />
        </div>
      ))}
    </div>
  );
}

function Star({ isOn }) {
  return (
    <div
      className={`w-12 h-16 text-white ${isOn ? "bg-yellow-400" : "bg-black"}`}
    >
      {isOn ? "★ " : "☆ "}
    </div>
  );
}

function StarRating() {
  const [ratings, setRatings] = useState([
    { name: "john", rating: 0 },
    { name: "con", rating: 0 },
    { name: "tom", rating: 0 },
    { name: "rom", rating: 0 },
    { name: "som", rating: 0 },
  ]);

  // Function to handle rating updates for each user
  function getRating(rating, index) {
    const updatedRatings = [...ratings];
    updatedRatings[index].rating = rating;
    setRatings(updatedRatings);
  }

  return (
    <div>
      {ratings.map((user, index) => {
        return (
          <div key={user.name}>   
            <h1>
              {user.name} has a rating of {user.rating}
            </h1>
            <GetRating getRating={(rating) => getRating(rating, index)} />
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
