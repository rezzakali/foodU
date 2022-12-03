import { GiScooter } from 'react-icons/gi';
import { MdAddCall } from 'react-icons/md';
import styles from '../styles/NavAddToCard.module.css';

const OrderNumber = () => {
  return (
    <div
      className={`align-item-center justify-content-center w-100 d-flex ${styles.nav_phone}`}
    >
      <div className="d-flex align-items-center justify-space-between">
        <GiScooter
          className="d-lg-block d-sm-none text-green"
          style={{ fill: 'green', fontSize: '60px' }}
        />
        <div className="d-lg-block d-sm-none me-5">
          <div className="mx-3 w-100 lh-1 mt-3">
            <p className="mb-1 text-secondary">Call and order in</p>
            <p className="text-warning fw-bold fs-5">+91 995-469-5660</p>
          </div>
        </div>
        <div className="d-lg-none d-sm-block my-3 ms-5">
          <MdAddCall />
        </div>
      </div>
    </div>
  );
};
export default OrderNumber;
