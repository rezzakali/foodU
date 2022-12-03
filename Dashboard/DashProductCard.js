import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import styles from '../styles/DashProductCard.module.css';

function DashProductCard({ imge, title, category }) {
  return (
    <div
      style={{ width: '260px', height: '400px' }}
      className="d-flex shadow border rounded p-2 text-center"
    >
      <Card className={`${styles.card}`}>
        <div
          className={`d-flex align-item-center justify-content-end m-2 ${styles.edit_option_area}`}
        >
          <FaEdit style={{ fill: 'green', fontSize: '25px', margin: '10px' }} />
          <AiFillDelete
            style={{ fill: 'red', fontSize: '25px', margin: '10px' }}
          />
        </div>
        <Image
          src={imge}
          width={100}
          height={100}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Category: {category}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DashProductCard;
