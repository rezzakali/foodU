import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import styles from '../../styles/NavAddToCard.module.css';

const FooterMenu = () => {
  // for add to cart modal
  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => {
    setShowCartModal(true);
  };
  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };
  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '0px',
          width: '100%',
          height: 'auto',
          background: 'white',
        }}
        className="d-lg-none"
      >
        <div className="d-flex justify-content-between align-middle shadow-lg p-1 mx-4">
          <div
            className={`border rounded-circle mx-2 d-flex  ${styles.nav_add_to_card}`}
          >
            <div className={`${styles.wishlist}`}>10</div>
            <AiFillHeart className={`fs-1 p-2`} />
          </div>
          <div
            className={`border rounded-circle mx-2 d-flex ${styles.nav_add_to_card}`}
            onClick={handleShowCartModal}
          >
            <div className={`${styles.cart}`}>10</div>
            <BsFillCartPlusFill className={`fs-1 p-2 `} />
          </div>
          <div
            className={`border rounded-circle mx-2 ${styles.nav_add_to_card}`}
          >
            <HiUser className={`fs-1 p-2 `} />
          </div>
        </div>
      </div>
      <Modal
        show={showCartModal}
        onHide={handleCloseCartModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#fef6c7',
              color: '#ffc222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AiOutlineShoppingCart size={30} />
          </div>
          <div>
            <h6 className="fw-bold">Your cart is empty</h6>
            <p>
              No items added in your cart. Please add product to your cart list.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: '#ffc222',
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            Proceed To Checkout
            <span
              style={{
                backgroundColor: 'white',
                color: 'green',
                float: 'right',
                width: '80px',
                padding: '5px',
                borderRadius: '5px',
              }}
            >
              $ 0
            </span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default FooterMenu;
