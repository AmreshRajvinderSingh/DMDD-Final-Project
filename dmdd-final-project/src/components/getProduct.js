import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './getProduct.css'

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2507/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="productTableContainer">
      <h3>Products</h3>
      <div className="searchAndAdd">


      </div>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Category ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.Product_ID}>
                <td>{product.Product_ID}</td>
                <td>{product.CategoryID}</td>
                <td>{product.Name}</td>
                <td>{product.Description}</td>
                <td>${product.Price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
