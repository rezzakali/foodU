import React from 'react';
import { Button } from 'react-bootstrap';
import CategoryCard from '../../Dashboard/CategoryCard';
import burgerImage from '../../public/assets/boro_burger.png';
import chickenImage from '../../public/assets/chicken.png';
import comboImage from '../../public/assets/combo.png';
import styles from '../../styles/dashboard/Category.module.css';

function allcategory() {
  return (
    <div className="m-2">
      <h5>All Category</h5>
      <div className="row shadow border rounded p-3 m-auto">
        <div className="d-flex">
          <input
            type="text"
            placeholder="search by category name"
            className={`rounded ps-3 ${styles.allcategory_input}`}
            style={{
              width: '100%',
              height: '40px',
              marginRight: '3px',
              backgroundColor: '#fef9c3 ',
            }}
          />
          <Button
            style={{
              height: '40px',
              width: '200px',
              backgroundColor: '#ffc222',
              border: 'none',
              color: 'black',
            }}
          >
            Add Category
          </Button>
        </div>
      </div>
      <br />
      <br />
      <div className="d-flex align-item-center justify-content-between">
        <CategoryCard imge={burgerImage} title={'Burger'} />
        <CategoryCard imge={chickenImage} title={'Chicken'} />
        <CategoryCard imge={comboImage} title={'Combo'} />
        <CategoryCard imge={burgerImage} title={'Burger'} />
      </div>
      <div className="d-flex align-item-center justify-content-between">
        <CategoryCard imge={burgerImage} title={'Burger'} />
        <CategoryCard imge={chickenImage} title={'Chicken'} />
        <CategoryCard imge={comboImage} title={'Combo'} />
        <CategoryCard imge={burgerImage} title={'Burger'} />
      </div>
      <div className="d-flex align-item-center justify-content-between">
        <CategoryCard imge={chickenImage} title={'Chicken'} />
        <CategoryCard imge={burgerImage} title={'Burger'} />
        <CategoryCard imge={burgerImage} title={'Burger'} />
        <CategoryCard imge={comboImage} title={'Combo'} />
      </div>
    </div>
  );
}

export default allcategory;
