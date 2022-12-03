import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../public/assets/food_u_logo.png';
import styles from '../styles/NavAddToCard.module.css';
import NavbarAddToCard from './navbarCardSectionComponent/NavAddToCard';
import OrderNumber from './OrderNumber';

function Navigation() {
  const router = useRouter();

  return (
    <Navbar
      expand={'lg'}
      bg={'light'}
      className="mb-3 sticky-top m-auto shadow"
    >
      <Container fluid>
        <Navbar.Brand href="/" className={`${styles.nav_brand}`}>
          <Image src={logo} alt="food_u_logo" className="p-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title href="/">
              <Image src={logo} alt="food_u_logo" className="p-2" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className={`justify-content-center flex-grow-1 pe-3 d-flex align-item-center link ${styles.link}`}
            >
              <div className="d-lg-flex align-items-center">
                <Link
                  href="/"
                  className={router.pathname == '/' ? styles.active : ''}
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  className={router.pathname == '/menu' ? styles.active : ''}
                >
                  Menu
                </Link>
                <Link
                  href="about"
                  className={router.pathname == '/about' ? styles.active : ''}
                >
                  About
                </Link>
                <Link
                  href="contact"
                  className={router.pathname == '/contact' ? styles.active : ''}
                >
                  Contact
                </Link>
                <Link
                  href="shop"
                  className={router.pathname == '/shop' ? styles.active : ''}
                >
                  Shop
                </Link>
              </div>
              <OrderNumber />
              <NavbarAddToCard />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
