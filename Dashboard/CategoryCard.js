import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';

function CategoryCard({ imge, title }) {
  return (
    <div
      style={{ width: '260px', height: '400px' }}
      className="d-flex shadow border rounded p-2 text-center"
    >
      <Card>
        <Image
          src={imge}
          width={100}
          height={100}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoryCard;
