import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';

const Menus = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/beverages.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>BEVERAGES</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/burger.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>BURGER</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/chicken.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>CHICKEN</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/combo.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>COMBO</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/drinks.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>DRINKS</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/pasta.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>PASTA</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/pizza2.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>PIZZA</h6>
          </div>
          <div className={`col border m-1 rounded ${styles.menus_card}`}>
            <Image
              src="/assets/sauces.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
            <h6>SAUCES</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menus;
