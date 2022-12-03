import Image from 'next/image';
import Link from 'next/link';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaDev, FaFacebookSquare } from 'react-icons/fa';
import logo from '../../public/assets/food_u_logo.png';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#000', padding: '40px' }}
      className={`${styles.footer}`}
    >
      <h1 className="text-center">
        <Image src={logo} alt="food_u_logo" height={'10px'} className="mt-5" />
      </h1>
      <br />
      <div className="row text-center text-light">
        <div className="col-sm-12 col-lg-3 col-md-3 p-2">
          <h4>ADDRESS</h4>
          <p>570 8th Ave, New York, NY 10018 United States</p>
        </div>
        <div className="col-sm-12 col-lg-3 col-md-3 p-2">
          <h4>BOOK TABLE</h4>
          <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
        </div>
        <div className="col-sm-12 col-lg-3 col-md-3 p-2">
          <h4>OPENING HOURS</h4>
          <p>Monday – Friday: 8am – 4pm Saturday: 9am – 5pm</p>
          <div className="d-flex  ms-5">
            <Link
              href="#"
              className={`border p-1 m-2 rounded-circle ${styles.footer_media_icon} `}
              style={{ width: '35px', height: '35px' }}
            >
              {' '}
              <FaFacebookSquare />
            </Link>

            <Link
              href="#"
              className={`border p-1 m-2 rounded-circle ${styles.footer_media_icon} `}
              style={{ width: '35px', height: '35px' }}
            >
              {' '}
              <AiFillTwitterSquare />
            </Link>
            <Link
              href="#"
              className={`border p-1 m-2 rounded-circle ${styles.footer_media_icon} `}
              style={{ width: '35px', height: '35px' }}
            >
              {' '}
              <AiFillLinkedin />
            </Link>
            <Link
              href="#"
              className={`border p-1 m-2 rounded-circle ${styles.footer_media_icon} `}
              style={{ width: '35px', height: '35px' }}
            >
              {' '}
              <FaDev />
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 col-md-3 p-2">
          <h4>NEWSLETTER</h4>
          <p>Subscribe to the weekly newsletter for all the latest updates</p>
        </div>
      </div>
      <br />
      <br />
      <p
        className="mt-2 text-center text-light"
        style={{ lineHeight: '-50px', position: 'absolute' }}
      >
        All Right Reserved @ 2022 - Rezzak Ali
      </p>
    </footer>
  );
};
export default Footer;
