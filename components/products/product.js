import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import boroBurgerImage from '../../public/assets/boro_burger.png';
import chickenImage from '../../public/assets/chicken/chicken.png';
import chicken2Image from '../../public/assets/chicken/chicken2.png';
import chicken3Image from '../../public/assets/chicken/chicken3.png';
import drinks1 from '../../public/assets/drinks/drinks1.png';
import drinks2 from '../../public/assets/drinks/drinks2.png';
import drinks3 from '../../public/assets/drinks/drinks3.png';
import drinks4 from '../../public/assets/drinks/drinks4.png';
import pasta1 from '../../public/assets/pasta/pasta1.png';
import pasta2 from '../../public/assets/pasta/pasta2.png';
import pasta3 from '../../public/assets/pasta/pasta3.png';
import saucesImage2 from '../../public/assets/sauces/sauces2.png';
import saucesImage3 from '../../public/assets/sauces/sauces3.png';
import whiteCastleImage from '../../public/assets/white_castle.png';
import styles from '../../styles/Product.module.css';
import Button from '../Button';
import ProductCard from './ProductCard';

const Product = () => {
  return (
    <>
      <div>
        <h1 className="text-center fw-bold">Popular dishes</h1>
        <br />
        <div className={`${styles.nav_tabs}`}>
          <Tabs
            defaultActiveKey="burger"
            id="fill-tab-example"
            className={`mb-2 ${styles.tabs}`}
            fill
          >
            <Tab eventKey="burger" title="Burger">
              <div className="row">
                <div className="col d-lg-flex ">
                  <ProductCard
                    price={14}
                    image={boroBurgerImage}
                    title={'Big Burger'}
                    text={
                      'The Cricket’s been serving up food in Denver for 70 years, so it’s pre...'
                    }
                  />
                  <ProductCard
                    price={16}
                    image={whiteCastleImage}
                    title={'White Castle'}
                    text={
                      'With over 36,000 restaurants around the world, White Castle has establ...'
                    }
                  />
                  <ProductCard
                    price={14}
                    image={boroBurgerImage}
                    title={'Big Burger'}
                    text={
                      'The Cricket’s been serving up food in Denver for 70 years, so it’s pre...'
                    }
                  />
                  <ProductCard
                    price={16}
                    image={whiteCastleImage}
                    title={'White Castle'}
                    text={
                      'With over 36,000 restaurants around the world, White Castle has establ...'
                    }
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="chicken" title="Chicken">
              <div className="row">
                <div className="col d-lg-flex ">
                  <ProductCard
                    price={26}
                    image={chickenImage}
                    title={'Chocolate cake'}
                    text={
                      'Browse unique Coca-Cola products, clothing, & accessories, or customiz...'
                    }
                  />
                  <ProductCard
                    price={74}
                    image={chicken2Image}
                    title={'Mother Clucker'}
                    text={
                      'Speaking of hot sauce, another honourable mention in the history of fr...'
                    }
                  />
                  <ProductCard
                    price={14}
                    image={chicken3Image}
                    title={'Bird Chicken'}
                    text={
                      'Fried chicken is omnipresent in London. Originating from Scottish (chi...'
                    }
                  />
                  <ProductCard
                    price={16}
                    image={whiteCastleImage}
                    title={'White Castle'}
                    text={
                      'With over 36,000 restaurants around the world, White Castle has establ...'
                    }
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="sauces" title="Sauces">
              <div className="row">
                <div className="col d-lg-flex ">
                  <ProductCard
                    price={14}
                    image={saucesImage2}
                    title={'breakfast cereal'}
                    text={
                      'breakfast cereal, grain food, usually precooked or ready-to-eat, that ...'
                    }
                  />
                  <ProductCard
                    price={32}
                    image={saucesImage3}
                    title={'Zhug'}
                    text={
                      'There’s the fantasy: cooking a party spread for friends, or even just ...'
                    }
                  />

                  <ProductCard
                    price={32}
                    image={saucesImage3}
                    title={'Zhug'}
                    text={
                      'There’s the fantasy: cooking a party spread for friends, or even just ...'
                    }
                  />

                  <ProductCard
                    price={32}
                    image={saucesImage3}
                    title={'Zhug'}
                    text={
                      'There’s the fantasy: cooking a party spread for friends, or even just ...'
                    }
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="pasta" title="Pasta">
              <div className="row">
                <div className="col d-lg-flex ">
                  <ProductCard
                    price={32}
                    image={pasta1}
                    title={'Lasagne alla Bolognese'}
                    text={
                      'A traditional dish from Emilia-Romagna, Lasagne alla Bolognese is made...'
                    }
                  />
                  <ProductCard
                    price={50}
                    image={pasta2}
                    title={'Sweet Pasta'}
                    text={
                      'A coastal classic with origins in Calabria, pasta with tuna is a simpl...'
                    }
                  />

                  <ProductCard
                    price={54}
                    image={pasta3}
                    title={'Cacio e pepe'}
                    text={
                      'This ancient dish with Roman origins is regarded as one of the simples...'
                    }
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="drinks" title="Drinks">
              <div className="row">
                <div className="col d-lg-flex ">
                  <ProductCard
                    price={45}
                    image={drinks1}
                    title={'Perfect Lemonade'}
                    text={
                      'Well, the problem is that if you just stir all of these together the s...'
                    }
                  />
                  <ProductCard
                    price={36}
                    image={drinks2}
                    title={'Lemonades Drink'}
                    text={
                      'Lyrical Lemonade, a Chicago-based promotion company, launched its self...'
                    }
                  />

                  <ProductCard
                    price={35}
                    image={drinks3}
                    title={'Blueberry Shake'}
                    text={
                      'Hubs and I were not enthusiastic about the nutmeg but that just pers...'
                    }
                  />
                  <ProductCard
                    price={33}
                    image={drinks4}
                    title={'Stawberry Ice'}
                    text={
                      'Place the strawberries in a blender or food processor; cover and proce...'
                    }
                  />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="text-center mt-5">
          <Link href="/shop">
            <Button
              className={`btn btn-warning fw-bold ${styles.all_products_btn}`}
              title={'All Products'}
            />
          </Link>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};
export default Product;
