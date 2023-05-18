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
              <div id="confetti-wrapper">
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
              <div className="confetti"></div>
          <div>
            <h1>Checkout Complete!</h1>
            <p>Thank you for your purchase.</p>
          </div>
          </div>
        ) : (
          <div className='cart-page'>
            <div className='cart-h1' style={{margin: "auto"}}>
            <h1 className="cart-title" style={{boxShadow: "5px 5px 10px #1f2937", marginBottom:"30px", borderTop:"1px solid #fafaf9"}}>Cart</h1>
            </div>
            <div className="container" style={{maxWidth: "300px", marginBottom: "30px"}}>
              {carted.map((candy) => {
                const itemPrice = candy.price * candy.amount;
                return (
                  
                  <div className="card" key={candy.id} style={{marginBottom: "50px", border:"none", boxShadow: "5px 5px 10px #1f2937"}}>
                    <img className='cart-image' src={candy.image} alt={candy.name} />
                    <div className='cart-body'>
                    <h2 className='cart-item'>{candy.name}</h2>
                    <div style={{display:"flex"}}>
                    <h3 className='cart-item' style={{marginRight:"20px"}}>Amount:</h3>
                    <input className="cart-amount" style={{backgroundColor:"#fafaf9"}} type="number" value={candy.amount} onChange={(e) => onAmountChange(e, candy)} min={"1"}/>
                    </div>
                    <p className='cart-item'>Price: ${itemPrice.toFixed(2)}</p>
                    <button className="cart-delete" onClick={() => handleDelete(candy)}>Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", backgroundColor: "#fafaf9", padding:"20px", borderRadius: "20px", marginBottom: "30px", boxShadow: "5px 5px 10px #1f2937"}}>
            <h3 className='cart-total'>SubTotal Amount: ${subTotalPrice.toFixed(2)}</h3>
            <h3 className='cart-total'>Tax: ${tax.toFixed(2)}</h3>
            <h1 className='cart-total' id='cart-total'>Total: ${total.toFixed(2)}</h1>
            </div>
            
            <button className='cart-checkout' style={{boxShadow: "5px 5px 10px #1f2937"}} onClick={handleCheckout}>Continue to Checkout</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default Cart