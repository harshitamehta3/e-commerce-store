import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('list');

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const toggleView = () => {
    setView(view === 'list' ? 'grid' : 'list');
  };

  return (
    <div>
      <button onClick={toggleView}>Toggle View</button>
      <div>
        {view === 'list' ? (
          products.map(product => (
            <Product key={product.id}>
              <Link to={`/product/${product.id}`}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </Product>
          ))
        ) : (
          <Grid>
            {products.map(product => (
              <ProductGridItem key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </Link>
              </ProductGridItem>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

const Product = styled.div`
  /* styles for list view */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductGridItem = styled.div`
  /* styles for grid view */
`;

export default ProductList;
