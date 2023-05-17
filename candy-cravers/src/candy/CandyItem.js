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
    <div className="col-xl-1 offset-2 col-lg-2 col-md-3 offset-1 col-sm-5 offset-1 col-xs-8 ">
      <div className="container" >
        <div className="card" style={{ width: "250px", minHeight: "470px", border:"none" }}>
          <img
            onMouseEnter={handleClick}
            onMouseLeave={handleClick}
            src={isOn ? candy.image : candy.back_image}
            alt={candy.name}
            className="card-img-top"
            style={{ minHeight: "250px" }}
          />

          <div
            className="card-body"
            style={{
              borderTop: "1.5px solid black",
              // minHeight: "200px",
            }}
          >
            <h5 className="card-title">{candy.name}</h5>
          </div>
          <div className="card__price">
            <div>Amount:</div>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <div>Price: ${candy.price.toFixed(2)}</div>
          </div>
          <button
            onClick={addToCart}
            className="btn btn-color btn-lg btn-block"
            id="add-to-cart"
          >
            {isAdded ? "Added to cart!" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandyItem;
