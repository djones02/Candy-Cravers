import { useState } from "react";

function CandyItem({ candy }) {
  const [isOn, setIsOn] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [input, setInput] = useState(0);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  function addToCart() {
    fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...candy, amount }),
    })
      .then((response) => response.json())
      .then((data) => setIsAdded(data));
  }

  const amount = parseInt(input);
  return (
    <li className="cards__item">
      <div className="card">
        <h3 className="card__text">{isOn ? candy.name : candy.description}</h3>
        <img
          onMouseEnter={handleClick}
          onMouseLeave={handleClick}
          src={candy.image}
          alt={candy.name}
          className="card_image"
        />
        <div className="card__content"></div>
        <div className="card__detail">
          <button onClick={addToCart} id="random-planeteer">
            {isAdded ? "Added to cart!" : "Add to cart"}
          </button>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
      </div>
    </li>
  );
}

export default CandyItem;
