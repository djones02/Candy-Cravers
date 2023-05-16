import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CandyItem from "./CandyItem.js";
import Search from "./Search.js";

function Candy() {
  const { occasion } = useParams();
  const [candies, setCandies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/candies")
      .then((res) => res.json())
      .then((data) => setCandies(data));
  }, []);
  let searchedCandy = candies.filter((candy) =>
    candy.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  function candyChoice() {
    if (occasion === "all") {
      return searchedCandy.map((candy) => {
        return <CandyItem candy={candy} key={candy.id} />;
      });
    } else if (occasion === "easter") {
      return searchedCandy
        .filter((candy) => {
          return candy.occasion === occasion;
        })
        .map((candy) => {
          return <CandyItem candy={candy} key={candy.id} />;
        });
    } else if (occasion === "halloween") {
      return searchedCandy
        .filter((candy) => {
          return candy.occasion === occasion;
        })
        .map((candy) => {
          return <CandyItem candy={candy} key={candy.id} />;
        });
    }
  }
  function updateSearch(newSearch) {
    setSearch(newSearch);
  }

  return (
    <div>
      <Search search={search} onSearch={updateSearch} />
      <ul className="candy-container">{candyChoice()}</ul>
    </div>
  );
}

export default Candy;
