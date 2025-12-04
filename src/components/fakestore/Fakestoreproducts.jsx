import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Fakestoreproducts = () => {
  const [products, setProducts] = useState ([]);

  useEffect (() => {
    fetch ('https://fakestoreapi.com/products/categories')
      .then (response => response.json ())
      .then (data => {
        console.log ('products data=', data);
        setProducts (data);
      })
      .catch (error => {
        console.error ('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <div>Fakestoreproducts</div>;

      {products.map (product => (
        <div
          key={product}
          style={{margin: '10px', padding: '10px'}}
        >
       <Link to={`/products/${product}`}> <h3>{product}</h3></Link>

        </div>
      ))}   
    </div>
  );
};

export default Fakestoreproducts;
