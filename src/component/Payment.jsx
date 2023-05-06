
import { useState } from "react";

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [billAmount, setBillAmount] = useState(0);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (paymentMethod === "Credit Card") {
      setBillAmount(100);
    } else if (paymentMethod === "cod") {
      setBillAmount(150);
    } else if (paymentMethod === "Debit Card"){
        setBillAmount(151); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="paymentMethod">Select payment method:</label>
        <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentChange}>
          <option value="">Select payment method</option>
          <option value="phonepay">PhonePe</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>
      {paymentMethod === "UPI" && (
        <div>
          <h3>UPI</h3>
          <p>Make your payment through UPI.</p>
          <button type="submit">Pay with UPI</button>
        </div>
      )}
      {paymentMethod === "cod" && (
        <div>
          <h3>Cash on Delivery</h3>
          <p>Pay when the product is delivered to you.</p>
          <button type="submit">Pay with Cash on Delivery</button>
        </div>
      )}
        {paymentMethod === "Credit Card" && (
            <div>
              <h3>Credit Card</h3>
              <p>Make your payment through Credit Card.</p>
              <button type="submit">Pay with Credit Card</button>
            </div>
            )}
             {paymentMethod === "Debit Card" && (
            <div>
              <h3>Debit Card</h3>
              <p>Make your payment through Debit Card.</p>
              <button type="submit">Pay with Debit Card</button>
            </div>
            )}
      {billAmount > 0 && (
        <div>
          <h3>Your bill: ₹{billAmount}</h3>
        </div>
      )}
    </form>
  );
}

export default PaymentForm;
