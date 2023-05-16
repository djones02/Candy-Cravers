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
        <h3 className="card__text">{candy.name}</h3>
        <img
          onMouseEnter={handleClick}
          onMouseLeave={handleClick}
          src={isOn ? candy.image : candy.back_image}
          alt={candy.name}
          className="card_image"
        />
        <div className="card__content"></div>
        <div className="card__detail">
          <div className="card__price">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <h4>${candy.price}</h4>
          </div>
          <button onClick={addToCart} className="add-to-cart">
            {isAdded ? "Added to cart!" : "Add to cart"}
          </button>
        </div>
      </div>
    </li>
  );
}

export default CandyItem;
