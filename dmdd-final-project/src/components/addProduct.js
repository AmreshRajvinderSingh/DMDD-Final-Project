import { useState } from 'react';
import axios from 'axios';

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
      // Optionally reset the form after successful submission
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
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10%' }}>
      <section>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="productID" className="form-label" style={{ minWidth: '120px' }}>
              Product ID
            </label>
            <input
              type="text"
              className="form-control"
              id="productID"
              name="Product_ID"
              value={formData.Product_ID}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="categoryID" className="form-label" style={{ minWidth: '120px' }}>
              Category ID
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryID"
              name="CategoryID"
              value={formData.CategoryID}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="name" className="form-label" style={{ minWidth: '120px' }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <label htmlFor="description" className="form-label" style={{ minWidth: '120px' }}>
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              required
              style={{ flex: '1', minHeight: '80px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <label htmlFor="price" className="form-label" style={{ minWidth: '120px' }}>
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              required
              style={{ flex: '1' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginLeft:'25%' }}>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
