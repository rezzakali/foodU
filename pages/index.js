import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from '../components/Button';
import Menus from '../components/Menus';
import OtherFlavour from '../components/OtherFlavour';
import Product from '../components/products/product';
import Testimonial from '../components/testimonial/Testimonial';
import TopRecepesCard from '../components/topRecepes/Card';
import CardLeft from '../components/topRecepes/CardLeft';
import leftCardImage from '../public/assets/food.png';
import heroPizzaImage from '../public/assets/hero_food.png';
import styles from '../styles/HeroSection.module.css';

const Home = () => {
  return (
    <div>
      <div className="m-5">
        <br />
        <br />
        <br />
        <Row xs={1} md={1} lg={2}>
          <Col className="text-justify">
            <h1 className="fw-bold">UNLIMITED MEDIUM</h1>
            <h1 className="text-warning fw-bold">PIZZAS</h1>
            <h2 style={{ color: 'green', fontWeight: 'bold' }}>
              Medium 2-topping* pizza
            </h2>
            <h5>
              *Additional charge for premium toppings. Minimum of 2 required.
            </h5>
            <div className="d-flex mt-3">
              <Button
                className={`btn btn-warning fw-bold ${styles.order_button}`}
                title={' Order Now'}
              />
              <h2
                style={{
                  color: 'green',
                  fontWeight: 'bold',
                  marginLeft: '25px',
                  alignItems: 'center',
                  fontSize: '40px',
                }}
              >
                $12.78
              </h2>
            </div>
          </Col>
          <Col className={`${styles.hero_section_pizza_image}`}>
            <Image src={heroPizzaImage} alt="hero_food_image" />
          </Col>
        </Row>
        <br />
        <br />
        <div className="text-center mt-5">
          <Link href="/menu">
            <Button
              className={`btn btn-warning fw-bold ${styles.order_button}`}
              title={'Menus'}
            />
          </Link>
          <br />
          <br />
        </div>
        <Menus />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div style={{ backgroundColor: '#f7f2e2', padding: '60px' }}>
        <OtherFlavour />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ padding: '60px' }}>
        <Product />
      </div>
      <div style={{ padding: '60px' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex justify-content-between">
              <h1>Top recipes</h1>
              <Link href="/shop" className="mt-3">
                see All{' '}
                <span>
                  <AiOutlineArrowRight />
                </span>{' '}
              </Link>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="d-lg-flex">
                <CardLeft
                  image={leftCardImage}
                  title="The Classic Burger"
                  para="Burger"
                  price={32}
                />
                <CardLeft
                  image={leftCardImage}
                  title="Gaucho Style Crispy Sirloin"
                  para="Burger"
                  price={54}
                />
              </div>
              <div className="d-lg-flex">
                <CardLeft
                  image={leftCardImage}
                  title="
White Castle"
                  para="Burger"
                  price={12}
                />
                <CardLeft
                  image={leftCardImage}
                  title="
boro burger"
                  para="Burger"
                  price={40}
                />
              </div>
              <div className="d-lg-flex">
                <CardLeft
                  image={leftCardImage}
                  title="Cacio e pepe"
                  para="Burger"
                  price={32}
                />
                <CardLeft
                  image={leftCardImage}
                  title="The Classic Burger"
                  para="Pasta"
                  price={32}
                />
              </div>
              <div className="d-lg-flex">
                <CardLeft
                  image={leftCardImage}
                  title="The Classic Burger"
                  para="Pasta"
                  price={48}
                />
                <CardLeft
                  image={leftCardImage}
                  title="Gaucho Style Crispy Sirloin"
                  para="Burger"
                  price={14}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <TopRecepesCard />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ padding: '60px', backgroundColor: '#f7f2e2' }}>
        <Testimonial />
      </div>
    </div>
  );
};
export default Home;
