
import { useState } from "react";

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [billAmount, setBillAmount] = useState(0);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (paymentMethod === "phonepay") {
      setBillAmount(100);
    } else if (paymentMethod === "cod") {
      setBillAmount(150);
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
      {paymentMethod === "phonepay" && (
        <div>
          <h3>PhonePe payment</h3>
          <p>Make your payment through PhonePe.</p>
          <button type="submit">Pay with PhonePe</button>
        </div>
      )}
      {paymentMethod === "cod" && (
        <div>
          <h3>Cash on Delivery</h3>
          <p>Pay when the product is delivered to you.</p>
          <button type="submit">Pay with Cash on Delivery</button>
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
