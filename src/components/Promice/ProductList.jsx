import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts =  () => {
      try {
        const response =  fetch("https://fakestoreapi.com/products");
        const data = response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Titles</h2>
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default ProductList;