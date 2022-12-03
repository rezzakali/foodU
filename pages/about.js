import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '../components/Button';
import Testimonial from '../components/testimonial/Testimonial';
import classes from '../styles/about/About.module.css';

const About = () => {
  return (
    <div className="m-5">
      <div className={`${classes.about_header}`}>
        <h1 className="text-center">About Us</h1>
        <div className={`${classes.about_header_link}`}>
          <Link href="/">Home</Link>
          <span>
            <IoIosArrowForward />
            About Us
          </span>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className={`col-sm-12 col-md-4 col-lg-4 ${classes.left_col}`}>
          <h1>Wellome!</h1>
          <h2>Best burger ideas & traditions from the whole world</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            repellendus blanditiis, rerum, quae natus est labore error soluta
            facere ipsa omnis provident cumque ab ut, neque ad impedit. Neque,
            rem!
          </p>
          <br />
          <Button title={'Contact Now'} />
        </div>
        <div
          className={`col-sm-12 col-md-4 col-lg-4 text-end ${classes.col_right}`}
        >
          <img src="/assets/about-hero-2.jpg" alt="about page image hero" />
        </div>
        <div className={`col-sm-12 col-md-4 col-lg-4 ${classes.col_right}`}>
          <img src="/assets/about-hero-1.jpg" alt="about page image hero" />
          <br />
          <br />
          <img src="/assets/about-hero-3.jpg" alt="about page image hero" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className={`col-sm-12 col-md-6 col-lg-6 ${classes.left_col}`}>
          <h3>Our Quality</h3>
          <h2 className="fw-bold">Chicken</h2>
          <p>
            Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken
            Bites and Grilled Chicken Topping are made from chickens raised
            without antibiotics and fed an all vegetable-grain diet, with no
            animal by-products. Plus, our Bites are made with 100% chicken
            breast meat.
          </p>
          <Button title={'Order Now'} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            src="/assets/chicken_about.jpg"
            alt="chicken"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundSize: 'cover',
            }}
            className="rounded"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className={`col-sm-12 col-md-6 col-lg-6 `}>
          <img
            src="/assets/about-burger.png"
            alt="chicken"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundSize: 'cover',
            }}
            className="rounded"
          />
        </div>
        <div className={`col-sm-12 col-md-6 col-lg-6 mt-3 ${classes.left_col}`}>
          <h3>Our Quality</h3>
          <h2 className="fw-bold">Burger</h2>
          <p>
            Some of the world’s best cheese is made close to home! All our
            deliciously melty Mozzarella is made with 100% Canadian milk. We’re
            proud to support Canadian dairy farmers.
          </p>
          <Button title={'Order Now'} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className={`col-sm-12 col-md-6 col-lg-6 ${classes.left_col}`}>
          <h3>Our Quality</h3>
          <h2 className="fw-bold">Pizza Douch</h2>
          <p>
            Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken
            Bites and Grilled Chicken Topping are made from chickens raised
            without antibiotics and fed an all vegetable-grain diet, with no
            animal by-products. Plus, our Bites are made with 100% chicken
            breast meat.
          </p>
          <Button title={'Order Now'} />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img
            src="/assets/about-pizza.png"
            alt="chicken"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundSize: 'cover',
            }}
            className="rounded"
          />
        </div>
      </div>
      <Testimonial />
      <br />
      <br />
      <br />
      <div className="row">
        <div className={`col mt-5 ${classes.left_col}`}>
          <h1>We Guarantee</h1>
          <h2>30 Minutes Delivery!</h2>
          <p>
            If you’re having a meeting, working late at night and need an extra
            push. Let us know and we will be there
          </p>
        </div>
        <div className="col">
          <img
            src="/assets/delivery_boy_about.jpg"
            alt="delivery_boy"
            className="float-start rounded"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
