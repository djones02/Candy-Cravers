import React,{useState, useEffect} from 'react'

function Cart() {
  const [carted, setCarted] = useState([])
  const [newamount, setNewamount] = useState(0)

  useEffect(() => {
    fetch('http://localhost:4000/cart')
      .then(res => res.json())
      .then((data) => setCarted(data))
  }, [])

  const totalPrice = carted.reduce((total, carted) => {
    return total + carted.price * carted.amount
  }, 0)

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
        return { ...candyItem, amount: newamount };
      }
      return candyItem;
    });
  
    fetch(`http://localhost:4000/cart/${candy.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...candy, amount: newamount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCarted(updatedCarted);
      })
      .catch((error) => console.error(error));
  };
  
  
  
  
  



  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-list">
        {carted.map(candy => (
          <div className="card" key={candy.id}>
            <img src={candy.image} alt={candy.name} />
            <h2>{candy.name}</h2>
            <h3>{candy.amount}</h3>
            <input type='number' value={candy.amount} onChange={(e) => onAmountChange(e, candy)} />
            <p>Price: ${candy.price*candy.amount}</p>
            <button onClick={() => handleDelete(candy)}>Delete</button>
          </div>
        ))}
      </div>
      <h1>Total Amount: ${totalPrice}</h1>
      <button>Continue to Checkout</button>
    </div>
  )
}

export default Cart