import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const Cart = () => {
  const { cart, setCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [wp, setWp] = useState('');
  const [mode, setMode] = useState('COD');

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Load user info on mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData && userData !== 'undefined') {
      try {
        const user = JSON.parse(userData);
        if (user?.name) setName(user.name);
        if (user?.email) setEmail(user.email);
      } catch (err) {
        console.error('❌ Invalid user in localStorage:', err);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const placeOrder = async () => {
    const userData = localStorage.getItem('user');
    if (!userData || userData === 'undefined') {
      alert('⚠️ Please login to place an order.');
      return;
    }

    let user;
    try {
      user = JSON.parse(userData);
    } catch (err) {
      alert('⚠️ Invalid user session. Please login again.');
      localStorage.removeItem('user');
      return;
    }

    if (!name || !address || !phone) {
      alert('❗ Please fill in all required fields: Name, Address, Phone.');
      return;
    }

    const order = {
      items: cart.map((item) => item.name),
      total,
      user: name,   // ✅ Send user's name here
      address,
      phone,
      wp,
      mode,
    };

    try {
      const res = await axios.post('http://localhost:6500/api/orders', order);
      if (res?.data) {
        alert(`✅ Order placed successfully using ${mode}!\n📞 Owner phone no:9674383094`);
        setCart([]);
        setAddress('');
        setPhone('');
        setWp('');
      } else {
        throw new Error('Empty response from server');
      }
    } catch (err) {
      console.error('❌ Order placement error:', err);
      alert('❌ Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div
        className="card p-4 shadow-lg"
        style={{
          background: 'linear-gradient(to right, #ffffff, #f7f8fa)',
          borderRadius: '16px',
          border: '1px solid #e0e0e0',
        }}
      >
        <h2 className="text-center mb-4 text-primary">🛒 Your Spare Parts Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-muted">🛑 Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.name}
                  <span className="badge badge-success badge-pill">₹{item.price}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-right text-dark mb-4">
              <strong>Total:</strong> ₹{total}
            </h4>

            <div className="form-group">
              <input
                className="form-control mb-3"
                placeholder="👤 Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control mb-3"
                placeholder="📧 Email"
                value={email}
                readOnly
              />
              <textarea
                className="form-control mb-3"
                placeholder="🏠 Full Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="form-control mb-3"
                placeholder="📞 Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                className="form-control mb-3"
                placeholder="💬 WhatsApp Number"
                value={wp}
                onChange={(e) => setWp(e.target.value)}
              />
              <select
                className="form-control mb-4"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
              >
                <option value="COD">💰 Cash on Delivery</option>
                <option value="Online">💳 Online Payment</option>
              </select>
            </div>

            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={placeOrder}
              style={{ fontWeight: '600', borderRadius: '12px' }}
            >
              🚀 Place Order Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
