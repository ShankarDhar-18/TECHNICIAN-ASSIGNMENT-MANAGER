import React from 'react';
import { useCart } from '../context/CartContext';

const SparePartCard = ({ part }) => {
  const { cart, setCart } = useCart();

  const handleAdd = () => {
    setCart([...cart, part]);
    alert(`${part.name} added to cart`);
  };

  return (
    <div className="card p-3 mb-3">
      <h5>{part.name}</h5>
      <p>{part.desc}</p>
      <p>₹{part.price}</p>
      <button className="btn btn-primary" onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default SparePartCard;
