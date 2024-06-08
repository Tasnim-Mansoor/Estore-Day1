import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { state } = useLocation();
  const { cartItems, subtotal } = state;
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Add your logic to place the order here
    // You can use the paymentInfo and shippingAddress states to send the data to the server
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cart Items</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} className="img-fluid" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    </td>
                    <td>{item.title.substring(0, 45)}</td>
                    <td>${item.price}</td>
                    <td>${item.discount}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
          </div>

          <h5 className="mt-4">Payment Information</h5>
          <div className="row">
            <div className="col-md-4 form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handlePaymentInfoChange}
              />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handlePaymentInfoChange}
              />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentInfoChange}
              />
            </div>
          </div>

          <h5 className="mt-4">Shipping Address</h5>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={shippingAddress.name}
                onChange={handleAddressChange}
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={shippingAddress.address}
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                value={shippingAddress.city}
                onChange={handleAddressChange}
              />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                value={shippingAddress.state}
                onChange={handleAddressChange}
              />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                value={shippingAddress.zip}
                onChange={handleAddressChange}
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;