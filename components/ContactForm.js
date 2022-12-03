import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Button from '../components/Button';
import styles from '../styles/contact/Contact.module.css';

const ContactForm = () => {
  return (
    <div>
      <Form>
        <h2>Send us a message</h2>
        <p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className={`${styles.contact_form_input}`}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              className={`${styles.contact_form_input}`}
            />
          </FloatingLabel>
        </Form.Group>
        <br />
        <Button title={'Contact Us'} />
      </Form>
    </div>
  );
};

export default ContactForm;
