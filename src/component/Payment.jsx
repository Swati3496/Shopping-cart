
import { useState } from "react";

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [customerDetails, setCustomerDetails] = useState({ name: "", email: "", phone: "" });
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", cvv: "", expiryDate: "" });
  const [upiDetails, setUpiDetails] = useState({ mobileNumber: "" });

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleUpiDetailsChange = (event) => {
    const { name, value } = event.target;
    setUpiDetails({ ...upiDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (paymentMethod === "Credit Card") {
      setBillAmount(100);
    } else if (paymentMethod === "Debit Card") {
      setBillAmount(150);
    } else if (paymentMethod === "UPI") {
      setBillAmount(200);
    } else if (paymentMethod === "COD") {
      setBillAmount(250);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="paymentMethod">Select payment method:</label>
        <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentChange}>
          <option value="">Select payment method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="COD">Cash on Delivery</option>
        </select>
      </div>
      {paymentMethod === "UPI" && (
        <div>
          <h3>UPI Payment</h3>
          <p>Enter your mobile number:</p>
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={upiDetails.mobileNumber}
            onChange={handleUpiDetailsChange}
            required
          />
          <button type="submit">Pay with UPI</button>
        </div>
      )}
      {paymentMethod === "COD" && (
        <div>
          <h3>Cash on Delivery</h3>
          <p>Pay when the product is delivered to you.</p>
          <button type="submit">Pay with Cash on Delivery</button>
        </div>
      )}
      {paymentMethod === "Credit Card" && (
        <div>
          <h3>Credit Card Payment</h3>
          <p>Enter your card details:</p>
          <input
            type="tel"
            name="cardNumber"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={handleCardDetailsChange}
            required
          />
          <input
            type="tel"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleCardDetailsChange}
            required
          />
        </div>
      )}
    </form>
  );
      }          
      export default PaymentForm;
         



