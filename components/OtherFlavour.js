import Image from 'next/image';
import styles from '../styles/OtherFlavour.module.css';

const OtherFlavour = () => {
  return (
    <div className="">
      <div className={`row ${styles.other_flavour}`}>
        <div
          className={`col-lg-3 m-auto d-flex my-2 p-4 border rounded ${styles.other_flavour_card}`}
          style={{ width: '430px', backgroundColor: 'white' }}
        >
          <div className="d-block text-justify">
            <h2 className="fw-bold">Any Day Offers</h2>
            <p>New Phenomenon Burger Taste</p>
            <p
              className="fw-bold "
              style={{ color: 'green', fontSize: '27px' }}
            >
              $12.87
            </p>
          </div>
          <div
            className={`border rounded-pill d-flex ${styles.other_flavour_card}`}
            style={{
              width: '200px',
              height: '160px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: '#ffc222',
            }}
          >
            <Image
              src="/assets/bannerPizza.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
          </div>
        </div>
        <div
          className={`col-lg-3 m-auto d-flex my-2 p-4 border shadow-sm rounded ${styles.other_flavour_col2} ${styles.other_flavour_card}`}
          style={{ width: '410px' }}
        >
          <div className="d-block text-justify">
            <h2 className="fw-bold">Other flavors</h2>
            <p>Save Room. We Made Salats.</p>
            <p className="fw-bold">$12.99</p>
          </div>
          <div
            className={`border rounded-pill d-flex ${styles.other_flavour_card}`}
            style={{
              width: '200px',
              height: '160px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'white',
            }}
          >
            <Image
              src="/assets/sauces.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
          </div>
        </div>
        <div
          className={`col-lg-3 m-auto d-flex my-2 p-4 ${styles.other_flavour_card}`}
          style={{ width: '400px', backgroundColor: 'white' }}
        >
          <div className="d-block text-justify">
            <h2 className="fw-bold">Find a FoodU store near you</h2>
            <h6 className="fw-bold text-warning mt-4">Contact Us</h6>
          </div>
          <div
            className={`d-flex `}
            style={{
              width: '200px',
              height: '160px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'white',
            }}
          >
            <Image
              src="/assets/map.png"
              width={100}
              height={100}
              alt="menus_card_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherFlavour;
