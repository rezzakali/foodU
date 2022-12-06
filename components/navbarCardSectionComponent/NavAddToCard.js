import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup, Modal, Popover } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import classes from '../../styles/AuthModal.module.css';
import styles from '../../styles/NavAddToCard.module.css';

const NavbarAddToCard = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // register
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [profile, setProfile] = useState('');

  // for login
  const [logUser, setLogUser] = useState({
    email: '',
    password: '',
  });

  // for add to cart modal
  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => {
    setShowCartModal(true);
  };
  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleProfile = (e) => {
    setProfile(e.target.files[0]);
  };
  const regiterHandleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('name', newUser.name);
    // formData.append('email', newUser.email);
    // formData.append('password', newUser.password);
    // // formData.append('profile', profile);

    // axios
    //   .post('http://localhost:3000/api/register', formData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };
  const handleRegister = () => {
    setShowRegisterModal(true);
  };

  // login
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };
  const handleLogin = () => {
    setShowLoginModal(true);
  };

  // admin
  const handleCloseAdminModal = () => {
    setShowAdminModal(false);
  };
  const handleAdmin = () => {
    setShowAdminModal(true);
  };

  const logHandleChange = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: logUser.email,
        password: logUser.password,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
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
      <div className={`mt-2 d-lg-block ${styles.wishlist_and_cart}`}>
        <div className="d-flex align-items-center justify-content-end ms-5 mt-2">
          <Link href="/wishlist">
            <div
              className={`mx-2 d-flex rounded-circle border ${styles.nav_add_to_card}`}
            >
              <div className={`${styles.wishlist}`}>10</div>
              <AiFillHeart className={`fs-1 p-2 `} />
            </div>
          </Link>

          <div
            className={`mx-2 d-flex rounded-circle border ${styles.nav_add_to_card}`}
            onClick={handleShowCartModal}
          >
            <div className={`${styles.cart}`}>10</div>
            <BsFillCartPlusFill className={`fs-1 p-2`} />
          </div>

          <div
            className={`mx-2 rounded-circle border ${styles.nav_add_to_card}`}
            onClick={handleClick}
          >
            <HiUser className={`fs-1 p-2 `} />
          </div>
        </div>
      </div>
      <div ref={ref}>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Body className={`${classes.auth_para}`}>
              <p onClick={handleRegister}>Register</p>
              <p onClick={handleLogin}>Login</p>
              <p onClick={handleAdmin}>Login as Admin</p>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>

      {/* Register Modal start from here */}
      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} type="multipart/form-data">
            <Form.Label>Name</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiOutlineUser />
              </InputGroup.Text>
              <Form.Control
                placeholder="your full name"
                aria-label="name"
                aria-describedby="basic-addon1"
                autoFocus
                required
                className={`${classes.register_input}`}
                name="name"
                value={newUser.name}
                onChange={regiterHandleChange}
              />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <MdOutlineAlternateEmail />
                </InputGroup.Text>
                <Form.Control
                  placeholder="your email address"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  required
                  className={`${classes.register_input}`}
                  name="email"
                  value={newUser.email}
                  onChange={regiterHandleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <RiLockPasswordLine />
                </InputGroup.Text>
                <Form.Control
                  placeholder="***"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  required
                  className={`${classes.register_input}`}
                  name="password"
                  value={newUser.password}
                  onChange={regiterHandleChange}
                />
              </InputGroup>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="file"
                placeholder="choose file"
                className={`${classes.register_input}`}
                // required
                name="profile"
                onChange={handleProfile}
              />
            </Form.Group>
            <br />
            <Button
              type="submit"
              className={`bg-warning w-100 fw-bold ${classes.register_btn}`}
            >
              Register
            </Button>
          </Form>
        </Modal.Body>
        <br />
      </Modal>
      {/* register modal end from here */}

      {/* login modal start from here */}
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <MdOutlineAlternateEmail />
                </InputGroup.Text>
                <Form.Control
                  placeholder="your email address"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  required
                  className={`${classes.register_input}`}
                  autoFocus
                  name="email"
                  value={logUser.email}
                  onChange={logHandleChange}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <RiLockPasswordLine />
                </InputGroup.Text>
                <Form.Control
                  placeholder="***"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  required
                  className={`${classes.register_input}`}
                  name="password"
                  value={logUser.password}
                  onChange={logHandleChange}
                />
              </InputGroup>
            </Form.Group>

            <br />
            <Button
              type="submit"
              className={`bg-warning w-100 fw-bold ${classes.register_btn}`}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
        <br />
      </Modal>
      {/* login modal end from here */}

      {/* admin modal start from here */}
      <Modal show={showAdminModal} onHide={handleCloseAdminModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login As Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <MdOutlineAlternateEmail />
                </InputGroup.Text>
                <Form.Control
                  placeholder="your email address"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  required
                  className={`${classes.register_input}`}
                  autoFocus
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <RiLockPasswordLine />
                </InputGroup.Text>
                <Form.Control
                  placeholder="***"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  required
                  className={`${classes.register_input}`}
                />
              </InputGroup>
            </Form.Group>

            <br />
            <Button
              type="submit"
              className={`bg-warning w-100 fw-bold ${classes.register_btn}`}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
        <br />
      </Modal>
      {/* admin modal end from here */}
    </>
  );
};
export default NavbarAddToCard;
