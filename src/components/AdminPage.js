import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => {
  const [product, setProduct] = useState({
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    title: '',
    description: '',
    price: '',
    discount: '',
    brand: '',
    stock: '',
    thumbnail: '',
    tags: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setProduct({
      ...product,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to an API
    console.log('Product added:', product);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="img1" className="form-label"> Main Image </label>
          <input
            type="file"
            className="form-control"
            id="img1"
            name="img1"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img1" className="form-label">Image 2</label>
          <input
            type="file"
            className="form-control"
            id="img1"
            name="img1"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img1" className="form-label">Image 3</label>
          <input
            type="file"
            className="form-control"
            id="img1"
            name="img1"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img1" className="form-label">Image 4</label>
          <input
            type="file"
            className="form-control"
            id="img1"
            name="img1"
            onChange={handleImageChange}
            required
          />
        </div>
        {/* Image 2-5 input fields */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Product Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Product Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">Discount</label>
          <input
            type="number"
            className="form-control"
            id="discount"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more input fields for tags */}
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'orange' }}>Add Product</button>

      </form>
      <br></br>
    </div>
  );
};

export default AdminPage;