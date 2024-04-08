import { useState } from 'react';
import axios from 'axios';
import './AddProductStyles.css'; // Import the updated CSS file
 
const AddProduct = () => {
  const [formData, setFormData] = useState({
    Product_ID: '',
    CategoryID: '',
    Name: '',
    Description: '',
    Price: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2507/api/products', formData);
      console.log('Product created:', response.data);
      setFormData({
        Product_ID: '',
        CategoryID: '',
        Name: '',
        Description: '',
        Price: '',
      });
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Failed to add product. Please try again.');
    }
  };
 
  return (
    <div className="form-container">
      <section className="form-section">
        <h3 className="form-title">Add Product</h3>
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="productID"
              name="Product_ID"
              placeholder="Product ID"
              value={formData.Product_ID}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="categoryID"
              name="CategoryID"
              placeholder="Category ID"
              value={formData.CategoryID}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              placeholder="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <textarea
              className="form-control"
              id="description"
              name="Description"
              placeholder="Description"
              value={formData.Description}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-row">
            <input
              type="number"
              className="form-control"
              id="price"
              name="Price"
              placeholder="Price"
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </div>
 
          <div className="form-submit">
            <button type="submit" className="btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
 
export default AddProduct;
 