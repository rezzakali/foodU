import Image from 'next/image';
import { Card, ListGroup } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCartPlusFill, BsSuitHeartFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import styles from '../../styles/HeroSection.module.css';

const ProductCard = ({ title, text, image, price }) => {
  return (
    <Card className={`my-3 mx-2 ${styles.main_card}`}>
      <div className={`${styles.product_cart_image_background}`}>
        <BsSuitHeartFill className={`${styles.wishlist_icon_heart}`} />
        <Image
          variant="top"
          src={image}
          alt="boro_product"
          style={{
            width: '100%',
            height: '90%',
            objectFit: 'cover',
            margin: 'auto',
          }}
        />
      </div>
      <Card.Body>
        <Card.Title className={`${styles.product_title}`}>{title}</Card.Title>
        <Card.Text className="text-secondary">{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <AiFillStar style={{ fill: '#ffc222' }} />
          <AiFillStar style={{ fill: '#ffc222' }} />
          <AiFillStar style={{ fill: '#ffc222' }} />
          <AiFillStar style={{ fill: '#ffc222' }} />
          <FaStarHalfAlt style={{ fill: '#ffc222' }} />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-between">
        <Card.Title className="fw-bold text-warning">${price}</Card.Title>
        <Card.Title
          className={`border rounded-pill ${styles.product_cart}`}
          style={{
            width: '40px',
            height: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            background: '#ffc222',
          }}
        >
          <BsFillCartPlusFill id="cart" />
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
