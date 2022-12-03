import Link from 'next/link';
import React from 'react';
import DashboardProductCard from '../../Dashboard/DashProductCard';
import burgerImage from '../../public/assets/burger.png';
import foodImage from '../../public/assets/food.png';
import styles from '../../styles/dashboard/DashPagination.module.css';

function allproducts() {
  return (
    <div>
      <h5>All Products</h5>
      <div className="d-flex align-item-center justify-content-between">
        <DashboardProductCard
          imge={burgerImage}
          title={'Burger'}
          category={'Burger'}
        />
        <DashboardProductCard
          imge={foodImage}
          title={'Pizza'}
          category={'Pizza'}
        />
        <DashboardProductCard
          imge={burgerImage}
          title={'Burger'}
          category={'Burger'}
        />
        <DashboardProductCard
          imge={foodImage}
          title={'Pizza'}
          category={'Pizza'}
        />
      </div>
      <div className="d-flex align-item-center justify-content-between">
        <DashboardProductCard
          imge={burgerImage}
          title={'Burger'}
          category={'Burger'}
        />
        <DashboardProductCard
          imge={foodImage}
          title={'Pizza'}
          category={'Pizza'}
        />
        <DashboardProductCard
          imge={burgerImage}
          title={'Burger'}
          category={'Burger'}
        />
        <DashboardProductCard
          imge={foodImage}
          title={'Pizza'}
          category={'Pizza'}
        />
      </div>
      <br />
      <br />
      <nav aria-label="Page navigation example">
        <ul
          className={`pagination justify-content-center ${styles.pagination_in_all_product}`}
        >
          <li>
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li>
            <Link className="page-link" href="#">
              2
            </Link>
          </li>
          <li>
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li>
            <Link className="page-link" href="#">
              4
            </Link>
          </li>
          <li>
            <Link className="page-link" href="#">
              5
            </Link>
          </li>
          <li>
            <Link className="page-link" href="#">
              6
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default allproducts;
