import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateProduct.css'; // Import CSS file for styling

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    Product_ID: '',
    Name: '',
    Description: '',
    Price: ''
  });

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
  }, [products]); // Re-fetch products when products state changes

  const handleEdit = (product) => {
    setEditProduct(product);
    setUpdatedProduct({
      Product_ID: product.Product_ID,
      Name: product.Name,
      Description: product.Description,
      Price: product.Price
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleCancelEdit = () => {
    setEditProduct(null);
    setUpdatedProduct({
      Product_ID: '',
      Name: '',
      Description: '',
      Price: ''
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2507/api/products`, updatedProduct);
      console.log('Product updated:', response.data);

      // Update products state to reflect the changes
      const updatedProducts = products.map(product => {
        if (product.Product_ID === updatedProduct.Product_ID) {
          return { ...product, ...updatedProduct };
        }
        return product;
      });

      setProducts(updatedProducts); // Update products state
      setEditProduct(null);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };

  return (
    <div className="update-product-container">
      <h3>Products</h3>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.Product_ID}>
                <td>{product.Product_ID}</td>
                <td>{editProduct && editProduct.Product_ID === product.Product_ID ?
                    <input type="text" name="Name" value={updatedProduct.Name} onChange={handleChange} />
                    : product.Name}</td>
                <td>{editProduct && editProduct.Product_ID === product.Product_ID ?
                    <input type="text" name="Description" value={updatedProduct.Description} onChange={handleChange} />
                    : product.Description}</td>
                <td>{editProduct && editProduct.Product_ID === product.Product_ID ?
                    <input type="number" name="Price" value={updatedProduct.Price} onChange={handleChange} />
                    : (typeof product.Price === 'number' ? `$${product.Price.toFixed(2)}` : 'N/A')}</td>
                <td>
                  {editProduct && editProduct.Product_ID === product.Product_ID ? (
                    <>
                      <button className="btn btn-success" onClick={handleUpdate}>Save</button>
                      <button className="btn btn-danger" onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <button className="btn btn-primary" onClick={() => handleEdit(product)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateProduct;
