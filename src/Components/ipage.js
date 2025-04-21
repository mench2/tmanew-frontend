import React, { useState } from 'react';
import './ProductList.css';


const products = [

    {
      id: 1,
      name: 'Product 1',
      price: '$1000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$1000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$30',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$40',
      image: 'https://via.placeholder.com/150',
    },
  ];


const Ipage = () => {
      <h1>Adeita</h1>
      const [selectedProduct, setSelectedProduct] = useState(null);

      const handleProductClick = (productId) => {
        setSelectedProduct((prev) => (prev === productId ? null : productId));
      };
    
      return (
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-item ${
                selectedProduct === product.id ? 'selected' : ''
              }`}
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      );
    };
  
  export {Ipage};