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
        <div className="mx-2 d-flex">
          <div className={`${styles.wishlist}`}>10</div>
          <AiFillHeart
            className={`rounded-circle border fs-1 p-2 ${styles.nav_add_to_card}`}
          />
        </div>
        <div className="mx-2 d-flex">
          <div className={`${styles.cart}`}>10</div>
          <BsFillCartPlusFill
            className={`rounded-circle border fs-1 p-2 ${styles.nav_add_to_card}`}
          />
        </div>
        <div className="mx-2">
          <HiUser
            className={`rounded-circle border fs-1 p-2 ${styles.nav_add_to_card}`}
          />
        </div>
      </div>
    </div>
  );
};
export default FooterMenu;
