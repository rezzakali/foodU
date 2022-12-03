import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import styles from '../../styles/dashboard/Addproduct.module.css';

function addproduct() {
  return (
    <div className="m-2">
      <h5 className="fw-bold">Add Products</h5>
      <div className="p-3 shadow">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="product title"
              className={`${styles.addproduct_form_input}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="product price"
              className={`${styles.addproduct_form_input}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Select Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className={`${styles.addproduct_form_input}`}
            >
              <option>Select Category</option>
              <option value="burger">Burger</option>
              <option value="chicken">Chicken</option>
              <option value="sauces">Sauces</option>
              <option value="pasta">Pasta</option>
              <option value="drinks">Drinks</option>
              <option value="beverages">Beverages</option>
              <option value="combo">Combo</option>
              <option value="pizza">Pizza</option>
              <option value="shawarma">Shawarma</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              className={`${styles.addproduct_form_input}`}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Short Description</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              label="product short description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="product short description"
                className={`${styles.addproduct_form_input}`}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Description</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              label="product description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="product description"
                className={`${styles.addproduct_form_input}`}
              />
            </FloatingLabel>
          </Form.Group>
          <Button
            style={{
              backgroundColor: '#ffc222',
              border: 'none',
              color: 'black',
            }}
            type="submit"
            className="w-100"
          >
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default addproduct;
