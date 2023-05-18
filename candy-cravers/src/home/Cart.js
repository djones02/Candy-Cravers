import React,{useState, useEffect} from 'react'

function Cart() {
  const [carted, setCarted] = useState([])
  const [newamount, setNewamount] = useState(0)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4000/cart')
      .then(res => res.json())
      .then((data) => setCarted(data))
  }, [])
  const subTotalPrice = carted.reduce((subTotal, carted) => {
    return subTotal + carted.price * carted.amount
  }, 0)
  const taxRate = .06
  const tax = taxRate * subTotalPrice
  const total = tax + subTotalPrice

  const handleDelete = (candy) => {
    fetch(`http://localhost:4000/cart/${candy.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        setCarted(carted.filter(item => item.id !== candy.id))
      })
      .catch(error => console.error(error))
      console.log(candy)
  }

  function onAmountChange(e, candy) {
    const newAmountValue = parseInt(e.target.value);
    setNewamount(newAmountValue);
    handlePatch({ ...candy, amount: newAmountValue });
  }

  const handlePatch = (candy) => {
    const updatedCarted = carted.map((candyItem) => {
      if (candyItem.id === candy.id) {
        return { ...candyItem, amount: candy.amount };
      }
      return candyItem;
    });
  
    fetch(`http://localhost:4000/cart/${candy.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...candy, amount: candy.amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCarted(updatedCarted);
      })
      .catch((error) => console.error(error));
  };

  const handleCheckout = () => {
    const deletedItems = carted.map((item) => {
      fetch(`http://localhost:4000/cart/${item.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setCarted([]);
        })
        .catch((error) => console.error(error));
    })
    setCheckoutComplete(true)
    }

    return (
      <div>
        {checkoutComplete ? (
          <div>
            <h1>Checkout Complete!</h1>
            <p>Thank you for your purchase.</p>
          </div>
        ) : (
          <div>
            <h1>Cart</h1>
            <div className="cart-list">
              {carted.map((candy) => {
                const itemPrice = candy.price * candy.amount;
                return (
                  <div className="card" key={candy.id}>
                    <img src={candy.image} alt={candy.name} />
                    <h2>{candy.name}</h2>
                    <h3>Amount:</h3>
                    <input type="number" value={candy.amount} onChange={(e) => onAmountChange(e, candy)} min={"1"}/>
                    <p>Price: ${itemPrice.toFixed(2)}</p>
                    <button onClick={() => handleDelete(candy)}>Delete</button>
                  </div>
                );
              })}
            </div>
            <h3>SubTotal Amount: ${subTotalPrice.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h1>Total ${total.toFixed(2)}</h1>
            <button onClick={handleCheckout}>Continue to Checkout</button>
          </div>
        )}
      </div>
    )
}

export default Cart