import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(PixabayContext);

  return (
    <>
      <div className="container text-center my-3">
        <button
          onClick={() => fetchImageByCategory("nature")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Nature
        </button>
        <button
          onClick={() => fetchImageByCategory("science")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Science
        </button>
        <button
          onClick={() => fetchImageByCategory("animals")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Animals
        </button>
        <button
          onClick={() => fetchImageByCategory("buildings")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Buildings
        </button>
        <button
          onClick={() => fetchImageByCategory("sports")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Sports
        </button>
        <button
          onClick={() => fetchImageByCategory("transportation")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Transportation
        </button>
        <button
          onClick={() => fetchImageByCategory("travel")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Travel
        </button>
        <button
          onClick={() => fetchImageByCategory("food")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Food
        </button>
      </div>
      <div
        className="searchBar"
        style={{
          position: "sticky",
          top: "0", // Keeps it at the top of the viewport when scrolling
          backgroundColor: "#343a40", // Background color to match the search bar styling
          padding: "10px",
          zIndex: 1000, // Ensures the search bar is above other content
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
          width: "100%", // Ensures the search bar spans across the viewport
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          class="form-control bg-dark text-light"
        ></input>
      </div>
    </>
  );
};

export default Navbar;
