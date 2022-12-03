import { AiFillHeart } from 'react-icons/ai';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import styles from '../../styles/NavAddToCard.module.css';

const FooterMenu = () => {
  return (
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
        >
          <div className={`${styles.cart}`}>10</div>
          <BsFillCartPlusFill className={`fs-1 p-2 `} />
        </div>
        <div className={`border rounded-circle mx-2 ${styles.nav_add_to_card}`}>
          <HiUser className={`fs-1 p-2 `} />
        </div>
      </div>
    </div>
  );
};
export default FooterMenu;
