import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from '../../styles/dashboard/Addproduct.module.css';

function updateprofile() {
  return (
    <div className="m-2">
      <h5>Update Profile</h5>
      <div className="shadow border rounded p-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Change Image</Form.Label>
            <Form.Control
              type="file"
              className={`${styles.addproduct_form_input}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="your full name"
              className={`${styles.addproduct_form_input}`}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="your email"
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
            Update Profile
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default updateprofile;
