import Link from 'next/link';
import { BsFillPhoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import styles from '../styles/contact/Contact.module.css';

const Contact = () => {
  return (
    <div className="m-5">
      <div className={`${styles.contact_header}`}>
        <h1 className="text-center">Contact Us</h1>
        <div className={`${styles.contact_header_link}`}>
          <Link href="/">Home</Link>
          <span>
            <IoIosArrowForward />
            Contact Us
          </span>
        </div>
      </div>
      <br />
      <br />
      <h1>Call us or visit place</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        modi.
      </p>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col">
          <BsFillPhoneFill style={{ fill: '#ffc222', fontSize: '60px' }} />
          <h2>Phone:</h2>
          <p>+ 44 123 456 78 90</p>
          <p style={{ lineHeight: '2px' }}>+ 844 123 444 77 88</p>
        </div>
        <div className="col">
          <MdEmail style={{ fill: '#ffc222', fontSize: '60px' }} />
          <h2>Email:</h2>
          <p>contact@example.com</p>
          <p style={{ lineHeight: '2px' }}>info@example.com</p>
        </div>
        <div className="col">
          <HiLocationMarker style={{ fill: '#ffc222', fontSize: '60px' }} />
          <h2>Address:</h2>
          <p>
            Box 565, Pinney's Beach, Charlestown, Nevis, West Indies, Caribbean
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <ContactForm />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};
export default Contact;
