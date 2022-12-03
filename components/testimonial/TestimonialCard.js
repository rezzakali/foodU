import Image from 'next/image';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';

function TestimonialCard({ name, message, image }) {
  return (
    <div className=" p-4 m-2 rounded bg-light">
      <Image
        src={image}
        width={100}
        height={100}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
        alt="card_image"
      />
      <h3>{name}</h3>
      <p>{message}</p>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <AiFillStar style={{ fill: '#ffc222' }} />
          <AiFillStar style={{ fill: '#ffc222' }} />
          <AiFillStar style={{ fill: '#ffc222' }} />
          <AiFillStar style={{ fill: '#ffc222' }} />
          <FaStarHalfAlt style={{ fill: '#ffc222' }} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default TestimonialCard;
