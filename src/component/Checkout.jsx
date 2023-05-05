import { useState, useEffect} from 'react';
import "../style/checkout.css";
import { Link } from 'react-router-dom';


function CheckoutForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <label htmlFor="card-number">Credit Card Number</label>
      <input
        type="text"
        id="card-number"
        name="card-number"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
      />

      <label htmlFor="exp-date">Expiration Date</label>
      <input
        type="text"
        id="exp-date"
        name="exp-date"
        value={expDate}
        onChange={(event) => setExpDate(event.target.value)}
      />

      <label htmlFor="cvv">CVV</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        value={cvv}
        onChange={(event) => setCvv(event.target.value)}
      />

      <Link to="/Payment"><button type="submit">Submit Payment</button></Link>
    </form>
  );
}
export default CheckoutForm;
