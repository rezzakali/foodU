import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from '../../styles/dashboard/Addproduct.module.css';

function addcategory() {
  return (
    <div className="m-2">
      <h5 className="fw-bold">Add Category</h5>
      <div className="p-3 shadow">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="categrory name"
              className={`${styles.addproduct_form_input}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Categrory Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="product price"
              className={`${styles.addproduct_form_input}`}
            />
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
            Add Category
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default addcategory;
