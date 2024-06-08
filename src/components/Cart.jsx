import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE, INCREMENT, DECREMENT } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    dispatch(REMOVE(id));
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (id) => {
    dispatch(INCREMENT(id));
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (id) => {
    dispatch(DECREMENT(id));
  };

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0);
  const totalWithDiscount = subtotal - discount;

  // Function to handle the Checkout button click
  const handleCheckout = () => {
    navigate('/Checkout', { state: { cartItems, subtotal, totalWithDiscount } });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{ maxWidth: '50px', maxHeight: '50px' }}
                    />
                  </td>
                  <td>{item.title.substring(0, 45)}</td>
                  <td>${item.price}</td>
                  <td>${item.discount}</td>
                  <td>{item.rating.rate}&#x2605;</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-primary ms-2"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6">
          <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;