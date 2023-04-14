import React, { useState } from 'react';

function PaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expDate: '',
    cvv: '',
    amount: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Card number:</label>
      <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
      <br />
      <label htmlFor="cardName">Card name:</label>
      <input type="text" id="cardName" name="cardName" value={formData.cardName} onChange={handleChange} />
      <br />
      <label htmlFor="expDate">Expiration date:</label>
      <input type="text" id="expDate" name="expDate" value={formData.expDate} onChange={handleChange} />
      <br />
      <label htmlFor="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} />
      <br />
      <button type="submit">Pay</button>
    </form>
  );
}

export default PaymentForm;
