import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);
  
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key ={product.id}>{product.name} - Rp{product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
